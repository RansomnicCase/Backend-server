const app = require('./app');
const database = require('C:/Users/YASH/Documents/Setubackend/config/database.js');
const usermodel = require('C:/Users/YASH/Documents/Setubackend/models/user.model.js');
const port = 3000;

app.get('/', (req, res) => {
  res.send("welcome to setu");
  res.send("this is a food delivery app");
});

app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`);
  console.log("sending succesful");
});
