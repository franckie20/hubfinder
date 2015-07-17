LoggedUser = new Mongo.Collection('UserLog');

Meteor.methods({
    'insertUserName': function(uid, fname, lname){
        var currentUserId = Meteor.userId();
        LoggedUser.insert({
			userid: uid,
            firstname: fname,
            lastname: lname
        });
    },
	// Set the state to true
	'setLoginStateTrue': function(){
		return userLoggedIn = true;
	},
	// Set the state to false
	'setLoginStateFalse': function(){
		return userLoggedIn = false;
	}
});

UI.registerHelper('isLoggedIn',function(){
  return Session.get("setLoginStateResult");
});

LoggedUser.allow({
  insert: function (userId, doc) {
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

