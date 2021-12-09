import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startSaveNote, starUploadFile } from "../../actions/notes";

const NoteAppBar = () => {
  const dispatch = useDispatch();
  const { active } = useSelector((state) => state.notes);

  const handleSave = () => {
    dispatch(startSaveNote(active));
  };

  const handleFileSelect = () => {
    document.querySelector("#inputSelected").click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      dispatch(starUploadFile(file));
    }
  };

  return (
    <div className="notes__appbar">
      <input
        id="inputSelected"
        type="file"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />

      <span>28 de agosto 2020</span>
      <div>
        <button onClick={handleFileSelect} className="btn">
          Picture
        </button>
        <button onClick={handleSave} className="btn">
          Save
        </button>
      </div>
    </div>
  );
};

export default NoteAppBar;
