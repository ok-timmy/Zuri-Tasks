const router = require("express").Router();
const Note = require("../Models/Note");
const jwt = require('jsonwebtoken');


// CREATE NOTE
router.post("/newnote/:email", async (req, res) => {
  try {
    const newNote = new Note({
      title: req.body.title,
      description: req.body.description,
       author : req.params.email.toString()
    });
    const note = await newNote.save();
    res.status(200).json(note);
    console.log("Note Created Successfully!");
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
    console.log("Note Not Created!!");
  }
});



//GET NOTES
router.get("/my-notes/:email", async (req, res) => {
  try {
    const email = req.params.email.toString();
    const notes = await Note.find({author:email})
    // console.log(notes.title);
    res.status(200).send(notes);
  } catch (error) {
    console.log(error);
  }
});


// DELETE NOTE

router.delete("/:id", async (req, res) => {
  try {
    console.log(req.params.id.toString());
    const post = await Note.findById(req.params.id.toString());
    if(post){
      try {
       await post.deleteOne();
       console.log("Note Deleted")
       res.status(200)
      } catch (error) {
        console.log(error)
      }
     
    } else {console.log("Note not deleted")}
   
  } catch (error) {
    console.log(error);
  }
});

//UPDATE NOTE
router.put("/:id", async (req, res) => {
  try {
    console.log(req.params.id.toString());
    const post = await Note.findById(req.params.id.toString());
    if(post){
      try {
        const updatedPost = await Note.findByIdAndUpdate(req.params.id, {
          $set :  req.body 
        }, {new: true});
        res.status(200).send(updatedPost);
      } catch (error) {
        console.log(error)
      }
     
    } else {console.log("Note not found")}
   
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
