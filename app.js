const yargs = require('yargs');
const { addNote, deleteNote } = require('./notes');

yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'title of a note',
      demandOption: true
    },
    body: {
      describe: 'message of a note'
    }
  },
  handler: function (args) {
    console.log(args)
    addNote(args.title, args.body);
  }
}).command({
  command: 'delete',
  describe: 'delete a note',
  builder: {
    title: {
      describe: 'title of a note',
      demandOption: true
    },
    body: {
      describe: 'message of a note'
    }
  },
  handler: function (args) {
    deleteNote(args.title);
  }
})

yargs.parse();
