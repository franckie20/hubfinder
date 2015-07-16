Template.usersList.helpers({
users: function() {
return LoggedUser.find();
}
});