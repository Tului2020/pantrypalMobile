const mongoose = require('mongoose');


export default mongoose
  .connect('mongodb+srv://testUser:testUser@cluster0.xttb6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
  .then(() => console.log('connection successfull'))
  .catch(err => console.log(err))

