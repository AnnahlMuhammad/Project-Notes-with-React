import React from "react";

const ArchievedNotes = ({
  archievedNotes,
  removeNote,
  unarchivedNote,
  inputSearch,
}) => {
  let searchNotes = archievedNotes.filter((note) => {
    return Object.keys(note).some((item) => {
      return note[item]
        .toString()
        .toLowerCase()
        .includes(inputSearch.toString().toLowerCase());
    });
  });
  const listNotesArchieved = searchNotes.map((note) => {
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
            unarchivedNote(note);
          }}
        >
          Unarchieve
        </button>
      </div>
    );
  });

  return (
    <>
      {archievedNotes.length > 0 ? (
        <>
          <p className="textNotes">Archieved Notes</p>
          <div className="containerNotes">{listNotesArchieved}</div>
        </>
      ) : (
        <h1 className="noNotes">NO ARCHIVED RECORDS</h1>
      )}
    </>
  );
};

export default ArchievedNotes;
