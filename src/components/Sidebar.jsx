import React from 'react'
import "./Sidebar.css";

const Sidebar = ({
    onAddNote,
     notes,
     onDeleteNote,
     activeNote,
     setActiveNote
      = []}) => {
        const sortedNotes = notes.sort((a, b)=> b.modDate - a.modDate);

  return (
    <div className='app-sidebar'>
        <div className='app-side-header'>
            <h1>NOTE</h1>
            <button onClick={onAddNote}>ADD</button > 
            </div>
            <div className='app-sidebar-notes'>
                {sortedNotes.map((note) => (
                                    <div 
                                    className={`app-sidebar-note ${note.id === activeNote && "active"}`}
                                     key={note.id}
                                     onClick={()=> setActiveNote(note.id)}
                                     >
                                    <div className='sidebar-note-title'>
                                        <strong>{note.title}</strong>
                                        <button onClick={() => onDeleteNote(note.id)}>DELETE</button>
                                    </div>
                                    <p>{note.content}</p>
                                    <small>{new Date(note.modDate).toLocaleDateString("ja-jp", {hour: "2-digit", minute: "2-digit"}) }</small>
                                    </div>
                ))}
        </div>
    </div>
  );
}

export default Sidebar