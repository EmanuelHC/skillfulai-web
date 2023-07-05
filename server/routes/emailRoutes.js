import express from 'express';
import Email from '../models/email.js';

const router = express.Router();

router.route('/').post(async (req, res) => {
  try {
    const { email } = req.body;

    const newEmail = new Email({ email });

    await newEmail.save();

    res.status(200).json({ success: true, data: newEmail });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Unable to create an email, please try again' });
  }
});

export default router;
