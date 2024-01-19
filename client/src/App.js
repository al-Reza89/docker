import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [notes, setNotes] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:4000/api/notes").then((res) => {
      console.log(res?.data?.data);
      setNotes(res?.data?.data);
    });
  }, []);

  return (
    <div className="App">
      <h1>Notes App</h1>
      {notes &&
        notes.map((note) => (
          <div key={note._id}>
            <h2>{note.title}</h2>
            <p>{note.content}</p>
          </div>
        ))}
    </div>
  );
}

export default App;
