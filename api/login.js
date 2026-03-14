
export default function handler(req, res) {
  if (req.method === "POST") {
    const { email } = req.body;

    res.status(200).json({
      token: "demo-token",
      user: {
        email: email,
        role: "user"
      }
    });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
