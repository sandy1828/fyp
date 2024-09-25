const express = require("express");
const Message = require("../models/Message");
const router = express.Router();

// Endpoint to submit a message
router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  const newMessage = new Message({ name, email, message });

  try {
    await newMessage.save();
    res.status(201).json({ success: true, message: "Message sent!" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Error saving message." });
  }
});

// Endpoint to get all messages
router.get("/", async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Error fetching messages." });
  }
});

module.exports = router;
