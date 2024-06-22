import React, { useState } from 'react';
import Home from './src/screens/home';
import AddNote from './src/screens/addNote';
import EditNote from './src/screens/editNote';
import HapusNote from './src/screens/hapusNote';

const CurrentPageWidget = ({
  currentPage,
  noteList,
  setCurrentPage,
  addNote,
  editNote,
  hapusNote,
  currentEditNoteId,
  setCurrentEditNoteId,
}) => {
  switch (currentPage) {
    case 'home':
      return (
        <Home
          noteList={noteList}
          setCurrentPage={setCurrentPage}
          setCurrentEditNoteId={setCurrentEditNoteId}
          hapusNote={hapusNote}
        />
      );
    case 'add':
      return <AddNote setCurrentPage={setCurrentPage} addNote={addNote} />;
    case 'edit':
      return (
        <EditNote
          setCurrentPage={setCurrentPage}
          editNote={editNote}
          currentEditNoteId={currentEditNoteId}
          noteList={noteList}
        />
      );
    case 'hapus':
      return <HapusNote setCurrentPage={setCurrentPage} hapusNote={hapusNote} currentEditNoteId={currentEditNoteId} />;
    default:
      return <Home />;
  }
};

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentEditNoteId, setCurrentEditNoteId] = useState(null);

  const [noteList, setNoteList] = useState([]); 

  const addNote = (title, desc) => {
    const id = noteList.length > 0 ? noteList[noteList.length - 1].id + 1 : 1;
    setNoteList([
      ...noteList,
      {
        id,
        title: title,
        desc: desc,
      },
    ]);
  };

  const editNote = (id, title, desc) => {
    const updatedNotes = noteList.map((note) =>
      note.id === id ? { ...note, title, desc } : note
    );
    setNoteList(updatedNotes);
  };

  const hapusNote = (id) => {
    const updatedNotes = noteList.filter((note) => note.id !== id);
    setNoteList(updatedNotes);
    setCurrentPage('home');
  };

  return (
    <CurrentPageWidget
      currentPage={currentPage}
      noteList={noteList}
      setCurrentPage={setCurrentPage}
      addNote={addNote}
      editNote={editNote}
      hapusNote={hapusNote}
      currentEditNoteId={currentEditNoteId}
      setCurrentEditNoteId={setCurrentEditNoteId}
    />
  );
};

export default App;
