// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var watson = {
  all: function(cb) {
    orm.all("topics", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("topics", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("topics", objColVals, condition, function(res) {
      cb(res);
    });
  },
  /** 
   * Deletes a row where the ID matches a row in the database
   * @param {number} id - The id of the row to delete
   * @param {function} cb  - Callback function
   * @see http://usejsdoc.org/ 
   */
  delete: function(id, cb) {
    
    let conditionString = "id = " + id;
    orm.delete("topics", conditionString, function (res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = watson;
