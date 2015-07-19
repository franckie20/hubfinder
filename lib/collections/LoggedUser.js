LoggedUser = new Mongo.Collection('UserLog');

Meteor.methods({
    'insertUserName': function(uid, fname, lname, email, hline, picurl, cnumber, sum){
        var currentUserId = Meteor.userId();
        LoggedUser.insert({
			userid: uid,
            firstname: fname,
            lastname: lname,
			email: email,
			headline: hline,
			picture: picurl,
			connections: cnumber,
			summary: sum
        });
    },
	// Set the state to true
	'setLoginStateTrue': function(){
		return userLoggedIn = true;
	},
	// Set the state to false
	'setLoginStateFalse': function(){
		return userLoggedIn = false;
	},
	// Give the User object value
	'setProfileUser': function(uid){
		return LoggedUser.findOne({userid: uid});
	},
});


UI.registerHelper('isLoggedIn',function(){
  return Session.get("setLoginStateResult");
});

//Helper for the User (LinkedIn) object
UI.registerHelper('userObject',function(){
  return Session.get("setProfileUserResult");
});

LoggedUser.allow({
  insert: function (userId, doc) {
    return true;
  },
  update: function() {
	return true;
  }
})
/*
    // update the post with the number of comments
    Posts.update(comment.postId, {$inc: {commentsCount: 1}});

    // create the comment, save the id
    comment._id = Comments.insert(comment);

    // now create a notification, informing the user that there's been a comment
    createCommentNotification(comment);

    return comment._id;
   */

