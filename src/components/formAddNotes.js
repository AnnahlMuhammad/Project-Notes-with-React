import React from "react";

const FormAddNotes = ({
  titleNotes,
  descNotes,
  setTitleNotesHandler,
  setDescNotesHandler,
  submitHandler,
  leftCharacter,
  leftCharacterHandler,
}) => {
  return (
    <>
      <h1 className="makeNotes">Make Some Notes</h1>
      <p className="textForm">
        <em>write down your feelings, your thoughts, or whatever it is!</em>
      </p>
      <div className="containerForm">
        <form onSubmit={submitHandler} className="form">
          <label className="labelForm">Title :</label>
          <input
            type="text"
            placeholder="Title notes..."
            value={titleNotes}
            onChange={setTitleNotesHandler}
            className="inputTitle"
          />
          <br />
          <label className="labelForm">Decription :</label>
          <textarea
            placeholder="Description notes..."
            name=""
            id=""
            cols="30"
            rows="10"
            value={descNotes}
            onChange={setDescNotesHandler}
            className="descTitle"
          ></textarea>
          <br />
          <button type="submit" className="submitButton">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default FormAddNotes;
