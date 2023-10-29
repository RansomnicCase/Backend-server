const app = require('./app');
const db = require('./config/database'); 
const usermodel = require('./models/user.model');
const port = 3000;

app.get('/', (req, res) => {
  res.send("welcome to setu");
});

app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`);
});
