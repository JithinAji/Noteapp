new Vue({
  el: "#vmNote",
  data: {
    notes: [],
  },
  methods: {
    //check if notes are empty or not and return true if notes are empty
    notesIfEmpty: function () {
      if (this.notes.length == 0) {
        return true;
      } else {
        return false;
      }
    },

    //To add a new note to the list
    addNote: function () {
      let counter = this.notes.length;
      this.notes.push({
        id: counter,
        title: "Click to add title",
        body: "Click to edit note",
        dropdown: false,
      });
      console.log(this.notes[counter].id);
    },

    //changes the body or title depending upon the function call
    changeContent: function (note, num) {
      console.log(note);
      if (num == 1) {
        let title = prompt("Enter titile");
        this.notes[note].title = title;
      } else {
        let body = prompt("Edit Content");
        this.notes[note].body = body;
      }
    },

    //to delete a notte
    deleteNote: function(noteId){
      this.notes.splice(noteId, 1);
    }
  },
});
