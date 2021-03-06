/*Require JS configuration*/
/*global require*/
require.config({
  baseUrl: 'js',
  paths: {
    angular: 'vendor/angular.min',
    jquery: 'vendor/jquery.min',
    angularroute: 'vendor/angular-route.min',
    angularsanitize: 'vendor/angular-sanitize.min',
    underscore: 'vendor/underscore-min'
  },
  shim: {
    angular: {
      deps: ['jquery'],
      exports: 'angular'
    },
    angularroute: {
      deps: ['angular']
    },
    angularsanitize: {
      deps: ['angular']
    },
    underscore: {
      exports: '_'
    }
  }
});