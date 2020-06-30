import React from 'react'

import './App.css'
import { TemplateForm } from './TemplateForm/index'
import mail from './mail.svg'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={mail} className="App-logo" alt="logo" />
      </header>
      <main>
        <TemplateForm />
      </main>
      <footer>
        {/* <div>Icons made by <a href="https://www.flaticon.com/authors/kiranshastry" title="Kiranshastry">Kiranshastry</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
    </footer>
    </div>
  )
}

export default App
