'use strict';

(function(exports){
  function ListView(list_model){
    this.list = list_model;
  };
  ListView.prototype.generate_HTML = function() {
    var list = ''
    this.list.notes.forEach(function(note) {
      var notes = note.getText()
      list += "<li>" + notes + "</li>"
    });

    var HTML = "<ul>" + list + "</ul>";
    return HTML;
  };

  exports.ListView = ListView;

})(this);

// var list = "<ul><li>" + array.join('</li><li>') + "</li></ul>";
