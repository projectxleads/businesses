import express from 'express';

const moneyRouter = express.Router();
const uri = '/money';

moneyRouter.get(uri, (req, res) => res.send('get money'));
moneyRouter.get(`${uri}/:id`, (req, res) => res.send('get money by id'));
moneyRouter.post(uri, (req, res) => res.send('post money'));
moneyRouter.put(`${uri}/:id`, (req, res) => res.send('put money'));
moneyRouter.delete(`${uri}/:id`, (req, res) => res.send('delete money'));

export default moneyRouter;