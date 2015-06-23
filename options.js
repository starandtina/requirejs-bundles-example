module.exports = {
  appDir: 'www',
  baseUrl: 'js/',
  paths: {
    'jquery': 'vendor/jquery',
    'bootstrap': 'vendor/bootstrap',
    'text': 'vendor/text'
  },
  optimize: 'none',
  shim: {
    'bootstrap': ['jquery']
  },
  dir: 'www-release',
  modules: [
    // First set up the shared build layer.
    {
      // module names are relative to baseUrl
      name: 'shared',
      create: true,
      // List shared dependencies here. Only need to list
      // top level dependencies, 'include' will find
      // nested dependencies.
      include: [
        'app/models/basicModel',
        'jquery',
        'bootstrap',
        'text'
      ]
    },

    // Now set up a build layer for each main layer, but exclude
    // the shared one. If you're excluding a module, the excludee
    // must appear before the excluder in this file. Otherwise it will
    // get confused.
    {
      name: 'app/main-about',
      exclude: ['shared']
    },

    {
      name: 'app/main-contact',
      exclude: ['shared']
    },

    {
      name: 'app/main-contact-template',
      create: true,
      include: ['text!app/templates/main-contact.html'],
      exclude: ['shared']
    }
  ]
};
