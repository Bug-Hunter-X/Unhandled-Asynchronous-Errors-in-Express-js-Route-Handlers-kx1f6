const express = require('express');
const app = express();
app.get('/', (req, res) => {
  someAsyncOperation()
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.error("Error:", err);
      res.status(500).send('Something went wrong!'); // Send an error response to the client
    });
});
app.listen(3000, () => console.log('Server listening on port 3000'));

async function someAsyncOperation(){
  // Simulate an async operation that might throw
  await new Promise(resolve => setTimeout(resolve, 100));
  throw new Error('Something went wrong!');
}