Template.addSkills.helpers({
  hubSkills: function() {
   return hubSkills.find().fetch();
  }
});

Template.addSkills.rendered = function() {
    Meteor.typeahead.inject();
}

Template.addSkills.events({
  'submit #updateSkills': function(e, t) {
    e.preventDefault();

    var skillForm = $(e.currentTarget),
      skill = event.target.skill.value;
      userid = event.target.userid.value;

      skillExists = hubSkills.findOne({name: skill});

      // Controle voor bestaande skill invoeren

      if(skill.length >= 3) {
        if(skillExists) {
          updateSkills(skill, userid);
        }
        else {
          alert('Skill komt niet voor in de database!');
        }
      }
      else {
        alert('Skill moet minstens 3 karakters lang zijn!');
      }
    }
});
