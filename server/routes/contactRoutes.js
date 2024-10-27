import express from 'express';
import Contact from '../models/Contact.js'; 

const router = express.Router();

// CRUD Operations
router.get('/', async (req, res) => {
  const contacts = await Contact.find();
  res.json(contacts);
});

router.get('/:id', async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) return res.status(404).send('Contact not found');
    res.json(contact);
  } catch (error) {
    res.status(500).send('Server error');
  }
});

router.post('/', async (req, res) => {
  const newContact = new Contact(req.body);
  await newContact.save();
  res.status(201).json(newContact);
});

router.put('/:id', async (req, res) => {
  try {
    const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedContact) return res.status(404).send('Contact not found');
    res.json(updatedContact);
  } catch (error) {
    res.status(500).send('Server error');
  }
});

router.delete('/:id', async (req, res) => {
  await Contact.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

router.delete('/', async (req, res) => {
  await Contact.deleteMany({});
  res.status(204).send();
});

export default router;
