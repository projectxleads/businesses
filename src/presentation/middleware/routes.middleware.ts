import express from 'express';

const router = express.Router();

router.use('/home', (req, res) => {
  res.send('Home');
})

export = router;