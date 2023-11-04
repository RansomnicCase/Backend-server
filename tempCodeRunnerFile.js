const app = require('./app');
// const database = require('.config/database');
// const usermodel = require('./model/user.model');
const usermodel = require('./models');
const port = 3000;

app.get('/', (req, res) => {
  res.send("welcome to setu");
  res.send("this is a food delivery app");
});

app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`);
  console.log("sending succesful");
});
