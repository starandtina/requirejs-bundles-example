define('app/models/aboutModel',['./basicModel'], function (BasicModel) {
  var model1 = new BasicModel('This is the title for the About page', '50%');
  return model1;
});


define('text!app/templates/main-about.html',[],function () { return '<h1>Main About Template</h1>\n';});

define('app/main-about',[
  'jquery',
  'app/models/aboutModel',
  'bootstrap',
  'text!app/templates/main-about.html'
], function ($, model, bootstrap, tpl) {
  'use strict';

  $(function () {
    // Set the title for our module with the data
    // from our model
    $('h1').html(model.getTitle());

    $('#tpl').html(tpl);

    // Set the width of our progress bar with
    // data from our model.
    var percent = model.getPercentComplete();
    $('.progress-bar')
      .css({
        'width': percent
      })
      .attr('aria-valuenow', percent.substr(0, percent.length - 1));

    // Activate the bootstrap popover plugin
    $('[rel=popover]').popover({
      trigger: 'hover'
    });
  });
});

