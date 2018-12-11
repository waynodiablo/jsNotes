function NoteReturnsText() {
 var note = new Note(“Hello”);
 note.write(“bye”);
 assert.isTrue(note.text) === “goodbye”;
};
NoteReturnsText();
