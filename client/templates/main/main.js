
	// Setup an event listener to make an API call once auth is complete
    onLinkedInLoad = function onLinkedInLoad() {
		IN.Event.on(IN, "auth", getProfileData);
    }
	
	var userLoggedIn = false;
	
    // Handle the successful return from the API call
    onSuccess = function onSuccess(data) {
		
		userFirstname = data.firstName;
		userLastname = data.lastName;
		
		var userWithSameId = LoggedUser.findOne({userid: data.id});
		if(userWithSameId == null) {
			Meteor.call('insertUserName', data.id, data.firstName, data.lastName, data.emailAddress, data.headline, data.pictureUrl, data.numConnections);
		}
		
		// Set the login state to true
		Meteor.call('setLoginStateTrue', function(error, result) {
			 Session.set('setLoginStateResult', result);
		});
		
		// Set the User profile object
		Meteor.call('setProfileUser', data.id, function(error, result) {
			 Session.set('setProfileUserResult', result);
		});

		console.log(userWithSameId);
        console.log(data);
    }
	
    // Handle an error response from the API call
    function onError(error) {
        console.log(error);
    }
    // Use the API call wrapper to request the member's profile data
    getProfileData = function getProfileData() {
		IN.API.Raw("/people/~:(id,first-name,last-name,headline,email-address,num-connections,picture-url)").result(onSuccess).error(onError);
    }

	logoutUser = function logoutUser() {
		IN.User.logout(logoutSucces);
	}

	logoutSucces = function logoutSucces() {
		window.location.href = "/logout";
		// Set the login state to true
		Meteor.call('setLoginStateFalse', function(error, result) {
			 Session.set('setLoginStateResult', result);
		});
		console.log("Logout successful!");
	}


