/* Importing React's useState hook */
import { useState } from 'react';
/* Import of bootstrap, bootstrap-icons and bootstrap-js */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
/* Importing axios for my API call */
import axios from 'axios';

function App() {

  /* Declaring a useState object variable where we store the form data */
  const [formData, setFormData] = useState({
    author: "",
    title: "",
    body: "",
    public: false
  })

  /* Handling form submission and preventing page reload with e.preventDefault() */
  const handleSubmit = (e) => (
    e.preventDefault()
  )




  return (
    <>
      <header className="mb-5">
        <nav className="navbar navbar-light bg-dark px-3">
          <span className="navbar-brand h1 text-white">Boolean Blog</span>
        </nav>
      </header>

      <main>
        <div className="container">
          <h1>Crea un nuovo post!</h1>
          <form>
            {/* INSERT AUTHOR HERE */}
            <div className="mb-4 mt-4 fw-bold">
              <label className="form-label">Autore</label>
              <input type="text" name="author" className="form-control" placeholder="Inserisci qui il tuo nome" />
            </div>

            {/* INSERT TITLE OF YOUR POST HERE */}
            <div className="mb-4 fw-bold">
              <label className="form-label">Titolo</label>
              <input type="text" name="title" className="form-control" placeholder="Titolo del tuo post" />
            </div>

            {/* INSERT THE BODY OF YOUR POST HERE */}
            <div className="mb-4 fw-bold">
              <label className="form-label">Testo del tuo post</label>
              <textarea name="body" className="form-control" placeholder="Scrivi qui il contenuto del tuo post"></textarea>
            </div>

            {/* IS YOUR POST PUBLIC OR NOT? */}
            <div className="mb-4 form-check">
              <input type="checkbox" name="public" className="form-check-input" />
              <label className="form-check-label">Vuoi che il post sia pubblico?</label>
            </div>

            {/* SUBMIT FORM BUTTON */}
            <button type="submit" className="btn btn-dark">Invia</button>
          </form>
        </div>
      </main>
    </>
  )
}

export default App
