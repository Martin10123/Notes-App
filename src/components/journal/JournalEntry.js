import React from "react";
import moment from "moment";
import { useDispatch } from "react-redux";
import { activeNote } from "../../actions/notes";

const JournalEntry = ({ id, date, title, body, url }) => {
  const dispatch = useDispatch();

  const dateNote = moment(date);

  const handleEntryClick = () => {
    dispatch(activeNote(id, { date, title, body, url }));
  };

  return (
    <div
      onClick={handleEntryClick}
      className="journal__entry pointer animate__animated animate__fadeIn animate__faster"
    >
      <div
        className="journal__entry-picture"
        style={{
          backgroundImage: `url(${url})`,
          backgroundSize: "cover",
        }}
      ></div>

      <div className="journal__entry-body">
        <p className="journal__entry-title">{title}</p>
        <p className="journal__entry-contect">{body}</p>
      </div>

      <div className="journal__entry-date-box">
        <span>{dateNote.format("dddd")}</span>
        <h4>{dateNote.format("Do")}</h4>
      </div>
    </div>
  );
};

export default JournalEntry;
