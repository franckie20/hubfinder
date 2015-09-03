Template.addSkills.helpers({
  hubSkills: function() {
   return hubSkills.find().fetch();
  }
});

Template.addSkills.rendered = function() {
    Meteor.typeahead.inject();
}

Template.addSkills.events({
  'submit #updateSkills': function(e) {
    e.preventDefault();

    var skillForm = $(e.currentTarget),
      skill = event.target.skill.value;
      userid = event.target.userid.value;

      skillExists = hubSkills.findOne({name: skill});

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
    },


    'submit #newSkill': function(e) {
      e.preventDefault();

      var skillForm = $(e.currentTarget),
        skill = event.target.skill.value;
        newSkillName = toTitleCase(skill);

        description = event.target.description.value;
        newDescription = toTitleCase(description);

        skillExists = hubSkills.findOne({name: newSkillName});

        if(skill.length >= 3) {
          if(skillExists == null) {
            insertNewSkill(newSkillName, newDescription);
          }
          else {
            alert('Skill komt al voor in de database!');
          }
        }
        //hij pakt deze elke keer
        else {
          alert('Skill moet minstens 3 karakters lang zijn!');
        }
      },
});
