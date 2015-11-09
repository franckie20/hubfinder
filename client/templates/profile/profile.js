Template.profile.rendered = function() {
    Meteor.typeahead.inject();
}

Template.profile.events({
  "click [href=#removeSkillLink]": function(e) {
    e.preventDefault();
  }
});
