hubSkills = new Mongo.Collection('hubSkills');

Meteor.methods({
  'insertSkill': function(skill, description){
      hubSkills.insert({
    	    name: skill,
          description: description,
          value: skill
      });
  }
});

hubSkills.allow({
  update: function (id) {
	return true;
  }
})

// Deny the Client access to insert update or remove anything from the MongoDB
hubSkills.deny({
  insert: function() {
    return true;
  },
  remove: function() {
	return true;
  }
})
