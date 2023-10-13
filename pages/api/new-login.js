import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  const data = req.body;

  const client = await MongoClient.connect(
    "mongodb+srv://mrmatteorusso:pass@cluster0.fzf4mee.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp"
  );
  const db = client.db();
  const loginCollection = db.collection("logins");

  const result = await loginCollection.findOne(data);
  if (result != null) {
    console.log("this is the result after finding one", result);
    client.close();
    res.status(201).json({ correctLogin: true });
  } else {
    console.log("no match");
    res.status(401).json({ correctLogin: false });
  }

  //   if (req.method === "POST") {
  //     const data = req.body;

  //     const client = await MongoClient.connect(
  //       "mongodb+srv://mrmatteorusso:pass@cluster0.fzf4mee.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp"
  //     );
  //     const db = client.db();
  //     const loginCollection = db.collection("logins");
  //     const result = await loginCollection.insertOne(data);
  //     client.close();
  //     res.status(201).json({ message: "login ok" });
  //   }
}
