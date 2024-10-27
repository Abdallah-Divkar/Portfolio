import express from 'express';
import User from '../models/User.js'; 
const router = express.Router();

// CRUD Operations
router.get('/api/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

router.get('/api/users/:id', async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
});

router.post('/api/users', async (req, res) => {
  const newUser = new User(req.body);
  await newUser.save();
  res.status(201).json(newUser);
});

router.put('/api/users/:id', async (req, res) => {
  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedUser);
});

router.delete('/api/users/:id', async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

router.delete('/api/users', async (req, res) => {
  await User.deleteMany({});
  res.status(204).send();
});

export default router;
