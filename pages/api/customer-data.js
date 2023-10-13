// import { MongoClient } from "mongodb";

// export default async function handler(req, res) {
//   const client = await MongoClient.connect(
//     "mongodb+srv://mrmatteorusso:pass@cluster0.fzf4mee.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp"
//   );
//   const db = client.db();
//   const bookings = db.collection("bookings");
//   const result = await bookings.find({}).toArray();
//   console.log(result);
//   client.close();

//   res.status(201).json(result);
// }
