'use strict';

(function(exports) {
  function Note(string) {
      this.text = string;
  };

Note.prototype.write = function(string) {
    this.text = string;
  };

Note.prototype.getText = function() {
  return this.text;
};

  exports.Note = Note;

})(this);
