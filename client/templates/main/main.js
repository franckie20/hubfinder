
	// Setup an event listener to make an API call once auth is complete
    onLinkedInLoad = function onLinkedInLoad() {
		IN.Event.on(IN, "auth", getProfileData);
    }

	var userLoggedIn = false;

    // Handle the successful return from the API call
    onSuccess = function onSuccess(data) {

		userFirstname = data.firstName; userLastname = data.lastName; userEmail = data.emailAddress;
		userHeadline = data.headline; userPicture = data.pictureUrl; userConnections = data.numConnections;
		userId = data.id; userSummary = data.summary; userSkills = [];

		var userWithSameId = hubUsers.findOne({userid: userId});
		if(userWithSameId == null) {
      // Set the firstlogin state to true
      Meteor.call('setFirstLoginStateTrue', function(error, result) {
         Session.set('setFirstLoginStateResult', result);
      });
			Meteor.call('insertUserName', userId, userFirstname, userLastname, userEmail, userHeadline, userPicture, userConnections, userSummary, userSkills);
			onLoginSuccess(data);
		}
		else {
			// Update the MongoDB information (If there's a LinkedIn profile update)
			hubUsers.update(
				{_id: userWithSameId._id},
				{$set: {firstname: userFirstname, lastname: userLastname, email: userEmail, headline: userHeadline, picture: userPicture, connections: userConnections, summary: userSummary}}
			);

      // Set the firstlogin state to false
      Meteor.call('setFirstLoginStateFalse', function(error, result) {
         Session.set('setFirstLoginStateResult', result);
      });

			onLoginSuccess(data);

			console.log(userWithSameId);
			console.log(data);
		}
    }

	function onLoginSuccess(data) {
		// Set the login state to true
		Meteor.call('setLoginStateTrue', function(error, result) {
			 Session.set('setLoginStateResult', result);
		});

		// Set the User profile object
		Meteor.call('setProfileUser', data.id, function(error, result) {
			 Session.set('setProfileUserResult', result);
		});
	}

    // Handle an error response from the API call
    function onError(error) {
        console.log(error);
    }
    // Use the API call wrapper to request the member's profile data
    getProfileData = function getProfileData() {
		IN.API.Raw("/people/~:(id,first-name,last-name,headline,email-address,num-connections,picture-url,summary)").result(onSuccess).error(onError);
    }

	logoutUser = function logoutUser() {
		IN.User.logout(logoutSucces);
	}

  updateSkills = function updateSkills(skill, userid) {
    hubUsers.update(
      {_id: userid},
      {$addToSet: {skills: {$each: [skill] }}}
    );

    alert("Skill " + skill + " toegevoegd aan de lijst met skills!");
  }

	logoutSucces = function logoutSucces() {
		window.location.href = "/logout";
		// Set the login state to false
		Meteor.call('setLoginStateFalse', function(error, result) {
			 Session.set('setLoginStateResult', result);
		});
		console.log("Logout successful!");
	}
