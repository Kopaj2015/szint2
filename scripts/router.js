/**
 * Router configuration.
 * Application layout definition.
 */
Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/home', {
  layoutTemplate: 'layout',

});
Router.route('/adminSzint', {
  layoutTemplate: 'adminSzint',

});
Router.route('/adminEvent', {
  layoutTemplate: 'adminEvent',

});
/**
 * Router definition for the chat room page.
 * Subscribes to the required publications.
 */
Router.route('/score', {
  layoutTemplate: 'scoreTemplate',

});

