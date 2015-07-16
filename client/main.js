    // Setup an event listener to make an API call once auth is complete
    onLinkedInLoad = function onLinkedInLoad() {
        IN.Event.on(IN, "auth", getProfileData);
    }
	// Check if the user has been here before
	function loggedInBefore() {
	}
    // Handle the successful return from the API call
    onSuccess = function onSuccess(data) {
		var userWithSameId = LoggedUser.findOne({userid: data.id});
		if(userWithSameId == null) {
			Meteor.call('insertUserName', data.id, data.firstName, data.lastName);
		}
		console.log(userWithSameId);
        console.log(data);
    }
    // Handle an error response from the API call
    function onError(error) {
        console.log(error);
    }
    // Use the API call wrapper to request the member's profile data
    getProfileData = function getProfileData() {
		IN.API.Raw("/people/~").result(onSuccess).error(onError);
    }

	logoutUser = function logoutUser() {
		IN.User.logout(logoutSucces);
	}

	logoutSucces = function logoutSucces() {
		console.log("Logout successful!");
	}


