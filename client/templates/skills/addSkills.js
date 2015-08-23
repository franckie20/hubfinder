Template.addSkills.helpers({
  hubSkills: function() {
   return hubSkills.find().fetch();
  }
});

Template.addSkills.rendered = function() {
    Meteor.typeahead.inject();
}
