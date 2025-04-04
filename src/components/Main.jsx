import React from 'react'


import "./Main.css";
const Main = ({activeNote, onUpdateNote}) => {
    const onEditNote = (key, value) =>{
        onUpdateNote({
            ...activeNote,
            [key]: value,
            modDate: Date.now(),
        });
    };

    if(!activeNote) {
        return <div className='no-active-note'>Select Note</div>
    }
  return (
    <div className='app-main'>
    <div className='app-main-note-edit'>
     <input 
     id="title" 
     placeholder='Title'
     type="text" 
     value={activeNote.title}
     onChange= {(event)=> onEditNote("title", event.target.value)}/>
     <textarea 
     id="content" 
     placeholder='write note'
     value = {activeNote.content} 
     onChange= {(event)=> onEditNote("content", event.target.value)}
     ></textarea>
    </div>
    <div className='app-main-note-preview'>
    <h1 className='preview-title'>{activeNote.title}</h1>
    <div className='markdown-preview'>{activeNote.content}</div>
    </div>
    </div>
  );
};

export default Main