import express from 'express';
import Email from '../mongo_db/models/email.js';


const router = express.Router();

router.route('/').post(async (req, res) => {
  try {
    const { email, date } = req.body;

    const newEmail = new Email({ email, date });
    console.log('New email:', newEmail); // This will print the new email object

    await newEmail.save();

    res.status(200).json({ success: true, data: newEmail });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Unable to create an email, please try again' });
  }
});
export default router;
