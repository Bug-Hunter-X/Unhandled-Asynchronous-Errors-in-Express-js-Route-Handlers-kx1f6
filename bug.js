const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Asynchronous operation that might throw an error
  someAsyncOperation().then(result => {
    res.send(result);
  }).catch(err => {
    // Error handling is missing here. The error is swallowed!
    console.error("Error:", err); //This will log the error, but the response to the client will be missing
  });
});
app.listen(3000, () => console.log('Server listening on port 3000'));

async function someAsyncOperation(){
  // Simulate an async operation that might throw
  await new Promise(resolve => setTimeout(resolve, 100));
  throw new Error('Something went wrong!');
}