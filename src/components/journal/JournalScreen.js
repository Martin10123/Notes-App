import React from "react";
import { useSelector } from "react-redux";
import NoteScreen from "../notes/NoteScreen";
import NothinSelect from "./NothinSelect";
import Sidebar from "./Sidebar";

const JournalScreen = () => {
  const { active } = useSelector((state) => state.notes);

  return (
    <div className="journal__main-content animate__animated animate__fadeIn animate__faster">
      <Sidebar />

      <main>{active ? <NoteScreen /> : <NothinSelect />}</main>
    </div>
  );
};

export default JournalScreen;
