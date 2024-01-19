const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Note = require("./Note");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/test", (req, res) => {
  res.status(200).json({ message: "Hello World" });
});

// connect to the database
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connection successful");
  })
  .catch((err) => {
    console.error("Database connection error");
    console.error(err);
  });

// get the list of notes
app.get("/api/notes", async (req, res) => {
  try {
    const notes = await Note.find();
    res
      .status(200)
      .json({ message: "Notes fetched successfully", data: notes });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

// create a new note
app.post("/api/notes", async (req, res) => {
  try {
    const note = new Note({
      title: req.body.title,
      content: req.body.content,
    });
    const savedNote = await note.save();
    res.status(201).json({
      message: "Note created successfully",
      data: savedNote,
    });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

// get a single note
app.get("/api/notes/:id", async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    res.status(200).json({ message: "Note fetched successfully", data: note });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

// update a note
app.put("/api/notes/:id", async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    note.title = req.body.title;
    note.content = req.body.content;
    const savedNote = await note.save();
    res.status(200).json({
      message: "Note updated successfully",
      data: savedNote,
    });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

// delete a note
app.delete("/api/notes/:id", async (req, res) => {
  try {
    const note = await Note.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: "Note deleted successfully",
      data: note,
    });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

// not found handler
app.use((req, res) => {
  res.status(404).json({ message: "Resource not found" });
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
