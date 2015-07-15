var usersData = [
 {
  name: 'Jasper de Waard',
  url: 'http://sachagreif.com/introducing-telescope/'
 },
 {
  name: 'Franck Verschuur',
  url: 'http://meteor.com'
 },
 {
  name: 'Alex Jongman',
  url: 'http://themeteorbook.com'
 }
];
Template.usersList.helpers({
users: usersData
});