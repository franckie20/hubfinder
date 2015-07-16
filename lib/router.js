Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',

});
 
Router.route('/', function () {
  this.render('main');
});

Router.route('/dashboard', function () {
  this.render('dashboard');
});