import React from "react";
import ActiveNotes from "./ActiveNotes";
import ArchievedNotes from "./ArchievedNotes";
import FormAddNotes from "./formAddNotes";
import InputSearch from "./InputSearch";
import { getInitialData, showFormattedDate } from "../utils";

const NotesApp = () => {
  const dataNotes = getInitialData();
  const [title, setTitle] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const [notes, setNotes] = React.useState(dataNotes);
  const [archievedNotes, setArchievedNotes] = React.useState([]);
  const [input, setInput] = React.useState("");

  function submitHandler(e) {
    e.preventDefault();
    const id = generateId();
    const createdAt = showFormattedDate();
    setNotes([...notes, { id, title, desc, archived: false, createdAt }]);
    reset();
  }

  function reset() {
    setTitle("");
    setDesc("");
  }

  function generateId() {
    return +new Date();
  }

  function setTitleNotesHandler(e) {
    setTitle(e.target.value);
  }

  function setDescNotesHandler(e) {
    setDesc(e.target.value);
  }

  function removeNoteHandler(objectNote) {
    const note = notes.filter((note) => {
      return note.id !== objectNote.id;
    });
    const archievedNote = archievedNotes.filter((note) => {
      return note.id !== objectNote.id;
    });
    if (objectNote.archived) {
      return setArchievedNotes(archievedNote);
    }
    setNotes(note);
  }

  function archivedNoteHandler(objectNote) {
    const allNotes = notes.filter((note) => {
      return note.id !== objectNote.id;
    });
    setNotes(allNotes);
    setArchievedNotes([
      ...archievedNotes,
      {
        id: objectNote.id,
        title: objectNote.title,
        desc: objectNote.desc,
        createdAt: objectNote.createdAt,
        archived: true,
      },
    ]);
  }

  function unarchivedNoteHandler(objectNote) {
    const allArchivedNote = archievedNotes.filter((note) => {
      return note.id !== objectNote.id;
    });
    setArchievedNotes(allArchivedNote);
    setNotes([
      ...notes,
      {
        id: objectNote.id,
        title: objectNote.title,
        desc: objectNote.desc,
        createdAt: objectNote.createdAt,
        archived: false,
      },
    ]);
  }

  function inputSearchHandler(e) {
    setInput(e.target.value);
  }

  return (
    <>
      <InputSearch inputSearch={input} searchHandler={inputSearchHandler} />
      <FormAddNotes
        submitHandler={submitHandler}
        titleNotes={title}
        descNotes={desc}
        setTitleNotesHandler={setTitleNotesHandler}
        setDescNotesHandler={setDescNotesHandler}
      />
      <br />

      <ActiveNotes
        notes={notes}
        removeNote={removeNoteHandler}
        archivedNote={archivedNoteHandler}
        inputSearch={input}
      />

      <ArchievedNotes
        archievedNotes={archievedNotes}
        removeNote={removeNoteHandler}
        unarchivedNote={unarchivedNoteHandler}
        inputSearch={input}
      />
    </>
  );
};

export default NotesApp;
