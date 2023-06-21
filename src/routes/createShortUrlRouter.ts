import * as express from 'express';
import { shortenController } from '../controllers/shorten.controller';

export const routerShortenUrl = express.Router();

routerShortenUrl.post('/shorten-url', (req, res) => {
    res.json(shortenController.createShortUrl(req.body))
})
