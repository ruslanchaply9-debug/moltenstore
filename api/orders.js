export default function handler(req, res) {

  if (req.method === "GET") {
    res.status(200).json([
      {
        id: "MS-123456",
        productName: "360 Gems",
        price: "23.99",
        playerId: "#PLAYER",
        date: "2026",
        status: "Completed"
      }
    ]);
  }

  if (req.method === "POST") {
    res.status(201).json({
      success: true
    });
  }

}
