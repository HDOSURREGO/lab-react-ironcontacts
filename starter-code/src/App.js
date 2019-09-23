import React from 'react';
import './App.css';
import ContactList from './components/ContactList';
import contacts from './contacts.json'




function App() {
  return (
    <div >
    <h2 >THIS IS MY CONTACT LIST</h2>
    <ContactList />
    </div>
  );
}








export default App;


