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
        titleEdit: false,
        bodyEdit: false,
      });
    },

    //to delete a notte
    deleteNote: function (noteId) {
      //confirmation box will ask if you really want to delete the application
      if (confirm("Do you really want to delete?")) {
        this.notes.splice(noteId, 1);
      }
    },
  },
  mounted() {
    console.log("App mounted!");
    if (localStorage.getItem("notes"))
      this.notes = JSON.parse(localStorage.getItem("notes"));
  },
  watch: {
    notes: {
      handler() {
        console.log("Notes changed!");
        localStorage.setItem("notes", JSON.stringify(this.notes));
      },
      deep: true,
    },
  },
});
