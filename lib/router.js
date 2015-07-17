Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',

});

Router.route('/profile', function () {
  this.render('profile');
});

Router.route('/', function () {
  this.render('main');
});

Router.route('/logout', function () {
  this.render('logout');
});

Router.route('/dashboard', function () {
  this.render('dashboard');
});