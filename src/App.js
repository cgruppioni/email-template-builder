import React from 'react';
import mail from './mail.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={mail} className="App-logo" alt="logo" />
      </header>
      <section>
        <p>Mail to</p>
        <p>CC</p>
        <p>BCC</p>
        <p>Subject</p>
        <p>Body</p>
      </section>
      <footer>
        <div>Icons made by <a href="https://www.flaticon.com/authors/kiranshastry" title="Kiranshastry">Kiranshastry</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    </footer>
    </div>
  );
}

export default App;
