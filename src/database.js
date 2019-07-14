import mongoose from "mongoose";

export async function connect() {
  try {
    await mongoose.connect('mongodb://localhost/mongodbgraphql', {
      useNewUrlParser: true,
      useFindAndModify: false
    })
    console.log('>>> DB is connected');
  } catch(error) {
    console.log('Something goes wrong!');
    console.log(error);
  }
}