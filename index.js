const app = require('./app');
const db = require('./config/database'); // Remove the extra period
const usermodel = require('./models/user.model');
const port = 3000;

app.get('/', (req, res) => {
  res.send("dayum this shit cool");
});

app.listen(port, () => {
  console.log(`Server listening on port http://localhost:${port}`);
});
