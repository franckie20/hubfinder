Template.dashboard.rendered = function() {
    Meteor.typeahead.inject();
    setInterval(function() {Session.get('setProfileUserResult')}, 3000);
}
