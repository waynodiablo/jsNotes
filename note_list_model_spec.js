function CreatesAnArray() {
  var list = new List();
  assert.isTrue(List.prototype.isPrototypeOf(list) === true);
}
CreatesAnArray();

function ArrayIsEmpty() {
  var list = new List();
  assert.isTrue(list.notes.length === 0);
}
ArrayIsEmpty();



function ReturnsAnArray() {
  var list = new List();
  assert.isTrue(list.getNotes().length === 0);
}
ReturnsAnArray();

function CreatesAndStoresANote() {
  var list = new List();
  list.createNote("This note is in a list");
  assert.isTrue(list.notes[0].text === "This note is in a list")
}
CreatesAndStoresANote()
