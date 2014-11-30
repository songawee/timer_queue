var Q = require('q');
var TaskServerActions = require('../actions/TaskServerActions');

module.exports = {
  init: function() {
    var promise = new Q.Promise(function(resolve, reject) {
      $.ajax({
        dataType: "json",
        url: '/api/projects',
        success: function(data) {
          resolve(data);
        },
        failure: function(err) {
          reject(err);
        },
        type: 'GET'
      });
    });

    return promise;
  },

  createProject: function(project) {
    $.ajax({
      dataType: "json",
      data: project,
      url: '/api/projects',
      success: function(data) {
        // TaskServerActions.createProject(data);
        console.log(data);
      },
      failure: function(err) {
        console.log(err);
      },
      type: 'POST'
    });
  },

  deleteProject: function(id) {
    $.ajax({
      dataType: "json",
      url: '/api/projects/' + id,
      success: function(data) {
        TaskServerActions.deleteProject(id);
      },
      failure: function(err) {
        console.log(err);
      },
      type: 'DELETE'
    });
  },

  updateProject: function(project) {
    $.ajax({
      dataType: "json",
      url: '/api/projects/' + project._id,
      data: project,
      success: function(data) {
        // TaskServerActions.updateProject(data);
        console.log(data);
      },
      failure: function(err) {
        console.log(err);
      },
      type: 'PUT'
    });
  }
};
