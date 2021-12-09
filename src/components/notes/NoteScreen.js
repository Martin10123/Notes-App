import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { activeNote, starDaleting } from "../../actions/notes";
import { useForm } from "../../hooks/useForm";
import NoteAppBar from "./NoteAppBar";

const NoteScreen = () => {
  const dispatch = useDispatch();

  const { active: note } = useSelector((state) => state.notes);
  const [formValues, handleInputChange, reset] = useForm(note);
  const { body, title, id } = formValues;

  const activeId = useRef(note.id);

  useEffect(() => {
    if (note.id !== activeId.current) {
      reset(note);
      activeId.current = note.id;
    }
  }, [note, reset]);

  useEffect(() => {
    dispatch(activeNote(formValues.id, { ...formValues }));
  }, [formValues, dispatch]);

  const handleDelete = () => {
    dispatch(starDaleting(id));
  };

  return (
    <div className="notes__main-content">
      <NoteAppBar />

      <div className="notes__content">
        <input
          type="text"
          name="title"
          placeholder="Some awesome title"
          className="notes__title-input"
          value={title}
          onChange={handleInputChange}
        />

        <textarea
          name="body"
          className="notes__textarea"
          placeholder="What happened today"
          value={body}
          onChange={handleInputChange}
        />

        {note.url && (
          <div className="notes__image">
            <img src={note.url} alt="images" />
          </div>
        )}
      </div>

      <button onClick={handleDelete} className="btn btn_danger">
        Delete
      </button>
    </div>
  );
};

export default NoteScreen;
