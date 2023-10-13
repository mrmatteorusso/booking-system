import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  console.log("we are inside handler");
  if (req.method === "POST") {
    const data = req.body;
    console.log("this is the new data", data);
    //const { title, image, address, description } = data;
    const client = await MongoClient.connect(
      "mongodb+srv://mrmatteorusso:pass@cluster0.fzf4mee.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp"
    );

    //helper function
    const db = client.db();
    const bookingCollection = db.collection("bookings");
    const result = await bookingCollection.insertOne(data);
    console.log("this is the result from new meetup handler", result);
    res.status(201).json({ message: "ALL GOOD from booking" });
  }
}

// import { MongoClient } from "mongodb";

// export default async function handler(req, res) {
//   let client; // Define the client variable outside the try block
//   console.log("inside handler");

//   if (req.method === "POST") {
//     const data = req.body;
//     try {
//       console.log("Inside try block");
//       client = await MongoClient.connect(
//         "mongodb+srv://mrmatteorusso:pass@cluster0.fzf4mee.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp"
//       );
//       const db = client.db();
//       const bookingCollection = db.collection("bookings");
//       const result = await bookingCollection.insertOne(data);
//       console.log("this is the result from new meetup handler", result);
//       res.status(201).json({ message: "connected to booking data" });
//     } catch (error) {
//       console.error("Error:", error);
//       res.status(500).json({ message: "An error occurred" });
//     } finally {
//       if (client) {
//         client.close();
//       }
//     }
//   }
// }
