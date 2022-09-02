import React from "react";

const ActiveNotes = ({ notes, removeNote, archivedNote, inputSearch }) => {
  let searchNotes = notes.filter((note) => {
    return Object.keys(note).some((item) => {
      return note[item]
        .toString()
        .toLowerCase()
        .includes(inputSearch.toString().toLowerCase());
    });
  });
  const listNotes = searchNotes.map((note) => {
    return (
      <div key={note.id} className="note">
        <p className="titleNotes">{note.title.toUpperCase()}</p>

        <p>{note.desc}</p>
        <p>
          <em>{note.createdAt}</em>
        </p>

        <button
          className="notesButton"
          onClick={() => {
            removeNote(note);
          }}
        >
          Delete
        </button>
        <button
          className="notesButton"
          onClick={() => {
            archivedNote(note);
          }}
        >
          Archieve
        </button>
      </div>
    );
  });

  return (
    <>
      {notes.length > 0 ? (
        <>
          <p className="textNotes">Active Notes</p>
          <div className="containerNotes">{listNotes}</div>
        </>
      ) : (
        <h1 className="noNotes">NO NOTES WRITTEN</h1>
      )}
    </>
  );
};

export default ActiveNotes;
