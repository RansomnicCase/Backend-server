const app = require('./app');
const db = require('./config/database.js');
const usermodel = require('./models/user.model');
const port = 3000;

app.get('/', (req, res) => {
  res.send("welcome to setu");
  res.send("this is a food delivery app");
});

app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`);
  console.log("sending succesful");
});
