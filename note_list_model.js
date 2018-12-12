'use strict';

(function(exports) {
  function List() {
    this.notes = [];
  };

  List.prototype.getNotes = function() {
    return this.notes;
  }

  List.prototype.createNote = function(string) {
    this.notes.push(new Note(string))
  };

  exports.List = List;

})(this);
