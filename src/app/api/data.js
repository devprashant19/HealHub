import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db("yourDatabaseName");
    const collection = db.collection("yourCollectionName");

    if (req.method === "GET") {
      // Fetch data from MongoDB
      const data = await collection.find({}).toArray();
      res.status(200).json(data);
    } else if (req.method === "POST") {
      // Insert data into MongoDB
      const { name, email } = req.body; // Extract data from request body
      if (!name || !email) {
        return res.status(400).json({ error: "Name and Email are required" });
      }

      const result = await collection.insertOne({ name, email });

      res.status(201).json({ message: "Data added successfully", result });
    } else {
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error("Database error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
