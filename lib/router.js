Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',

});

Router.route('/profile', function () {
  this.render('profile');
});

Router.route('/users', function () {
  this.render('usersList');
});

Router.route('/', function () {
  this.render('main');
});

Router.route('/skills', function () {
  this.render('addSkills');
});

Router.route('/manager', function () {
  this.render('add_manager');
});

Router.route('/logout', function () {
  this.render('logout');
});

Router.route('/dashboard', function () {
  this.render('dashboard');
});

Router.route('/diagram', function () {
  this.render('diagram');
});