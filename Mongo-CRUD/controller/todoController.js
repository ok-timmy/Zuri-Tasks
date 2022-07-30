const Todo = require("../Models/Todo");


// Get All Todos
exports.allTodo = async (req, res) => {
  try {
    const todo = await Todo.find();
    res.status(200).json(todo);
    console.log("Got all Todos!");
  } catch (error) {
    console.log(error);
  }
};

//Get Single Todo
exports.singleTodo = async (req, res) => {
  const { id } = req.params;
  try {
    const todo = await Todo.findById(id);
    console.log("Todo Found Successfully!");
    // console.log(post)
    res.status(200).json(todo);
  } catch (error) {
    console.log(error);
  }
};

// Create New Todo
exports.newTodo = async (req, res) => {
  const { title, description } = req.body;
  try {
    const newTodo = new Todo({
      title,
      description
    });

    const todo = await newTodo.save();
    console.log("Todo was Created Successfully!!");
    res.status(200).json(todo);
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
};

//Update Todo
exports.updateTodo = async (req, res) => {
  const { title, description } = req.body;
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(
      {_id : req.params.id },
      {
        $set: {
          title,
          description
        },
      },
      {
        new: true,
      }
    );
    console.log("Todo Updated Successfully!!");
    res.status(200).json(updatedTodo);
  } catch (error) {
    console.log(error);
  }
};

//Delete Flight
exports.deleteTodo = async(req, res) => {
  try {
    await Todo.findByIdAndDelete( req.params.id );
   console.log("Todo Deleted Successfully!");
   res.status(200).json("deleted successfully");
 } catch (error) {
   console.log(error);
 }
};
