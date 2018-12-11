(function(exports){
  function Note() {
    this.text = "";

  };

  Note.prototype.write = function(string) {
    this.text = string;
  };

  exports.Note = Note;

  })(this);

  // expect(note.write("hello"))

//
// function Note() {
//   (function(notes) {
//       var text = []
//
//       function write(string) {
//       this.text.push(string);
//     }
// notes.write = write;
//
// };
//
// Note.prototype.write = function(string) {
//
// }};
