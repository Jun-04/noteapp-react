import { useEffect, useState } from "react";
import uuid from "react-uuid";

import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import './App.css'

function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []);
  const [activeNote, setActiveNote] = useState(null);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);
  useEffect(()=>{
    setActiveNote(notes[0].id);
  }, []);
  
  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "",
      content:"",
      modDate: Date.now(), 
    };
    setNotes([...notes, newNote]);
    setActiveNote(newNote.id);
  }; 

  const onDeleteNote = (id) => {
    const filterNotes = notes.filter((note)=> note.id !== id);
    setNotes(filterNotes);
  };

  const getActiveNote = () => {
    return notes.find((note)=> note.id === activeNote);
  };
  
  const onUpdateNote = (updatedNote) => {
    const updatedNotesArray = notes.map((note)=>{
      if(note.id === updatedNote.id) {
        return updatedNote;
      } else {
        return note;
      }
    });
    setNotes(updatedNotesArray);
  };
  
  return (
    <div className='App'>
      <Sidebar
       onAddNote={onAddNote}
       notes={notes}
       onDeleteNote={onDeleteNote}
       activeNote={activeNote}
       setActiveNote={setActiveNote}
       />
      <Main 
      activeNote={getActiveNote()} 
      onUpdateNote={onUpdateNote}
       />
    </div>
  )
}

export default App
