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
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData);
    /* Didn't know about Axios Post syntax, checked it on the Axios Docu + AI overview to make sure I understood it*/
    axios.post("https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts", formData)
      .then(res => {
        console.log("Post was sent successfully!", res.data)
        alert("Il post è stato creato con successo! 😃")
      })
      .catch(err => {
        console.error("Post submission failed", err)
        alert("Errore durante la creazione del post! Prova piu' tardi! ❌")
      })
    /* Resetting my form to the default values */
    setFormData({
      author: "",
      title: "",
      body: "",
      public: false
    })
  }


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
          <form onSubmit={handleSubmit}>
            {/* INSERT AUTHOR HERE */}
            <div className="mb-4 mt-4 fw-bold">
              <label className="form-label">Autore</label>
              <input value={formData.author} type="text" name="author" className="form-control" placeholder="Inserisci qui il tuo nome" onChange={(e) => setFormData({ ...formData, author: e.target.value })} />
            </div>

            {/* INSERT TITLE OF YOUR POST HERE */}
            <div className="mb-4 fw-bold">
              <label className="form-label">Titolo</label>
              <input value={formData.title} type="text" name="title" className="form-control" placeholder="Titolo del tuo post" onChange={(e) => setFormData({ ...formData, title: e.target.value })} />
            </div>

            {/* INSERT THE BODY OF YOUR POST HERE */}
            <div className="mb-4 fw-bold">
              <label className="form-label">Testo del tuo post</label>
              <textarea value={formData.body} name="body" className="form-control" placeholder="Scrivi qui il contenuto del tuo post" onChange={(e) => setFormData({ ...formData, body: e.target.value })}></textarea>
            </div>

            {/* IS YOUR POST PUBLIC OR NOT? */}
            <div className="mb-4 form-check">
              <input type="checkbox" name="public" className="form-check-input" checked={formData.public} onChange={(e) => setFormData({ ...formData, public: e.target.checked })} />
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
