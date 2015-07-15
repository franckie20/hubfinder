var usersData = [
 {
  firstname: 'Jasper',
  lastname: 'de Waard',
  url: 'http://sachagreif.com/introducing-telescope/'
 },
 {
  firstname: 'Franck',
  lastname: 'Verschuur',
  url: 'http://meteor.com'
 },
 {
  firstname: 'Alex',
  lastname: 'Jongman',
  url: 'http://themeteorbook.com'
 }
];
Template.usersList.helpers({
users: usersData
});