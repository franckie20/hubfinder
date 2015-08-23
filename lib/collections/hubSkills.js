hubSkills = new Mongo.Collection('hubSkills');

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
