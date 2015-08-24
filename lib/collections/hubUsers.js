hubUsers = new Mongo.Collection('hubUsers');

Meteor.methods({
    'insertUserName': function(uid, fname, lname, email, hline, picurl, cnumber, sum, skills){
        var currentUserId = Meteor.userId();
        hubUsers.insert({
    			userid: uid,
          firstname: fname,
          lastname: lname,
    			email: email,
    			headline: hline,
    			picture: picurl,
    			connections: cnumber,
    			summary: sum,
          skills: skills
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
    // Set the state to true
    'setFirstLoginStateTrue': function(){
      return userFirstLogin = true;
    },
    // Set the state to false
    'setFirstLoginStateFalse': function(){
      return userFirstLogin = false;
    },
  	// Give the User object value
  	'setProfileUser': function(uid){
  		return hubUsers.findOne({userid: uid});
  	},
});


UI.registerHelper('isLoggedIn',function(){
  return Session.get("setLoginStateResult");
});

UI.registerHelper('isFirstLogin',function(){
  return Session.get("setFirstLoginStateResult");
});

//Helper for the User (LinkedIn) object
UI.registerHelper('userObject',function(){
  return Session.get("setProfileUserResult");
});

hubUsers.allow({
  update: function (id) {
	return true;
  }
})

// Deny the Client access to insert update or remove anything from the MongoDB
hubUsers.deny({
  insert: function() {
    return true;
  },
  remove: function() {
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
