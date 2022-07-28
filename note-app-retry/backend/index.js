const express = require('express');
const dotenv = require('dotenv');
const { default: mongoose } = require('mongoose');
const AuthRoute = require('./Routes/Auth');
const NoteRoute = require('./Routes/Notes')
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const path = require('path');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

// app.use(express.static(path.join(__dirname, "clientside/build")));
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'clientside/build', 'index.html'));
// });




mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser : true,
  useUnifiedTopology : true,
}).then(console.log('Connected to DB successfully!!')).catch((err)=>{console.log(err)});



app.use('/api/auth', AuthRoute);
app.use('/api', NoteRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log(`Example app listening on port`)
})