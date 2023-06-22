import * as express from 'express';
import { shortenController } from '../controllers/shorten.controller';
import { routeHandler } from '../handlers/errorhandler';

export const routerShortenUrl = express.Router();

routerShortenUrl.post('/shorten-url', routeHandler((req) => {
    return shortenController.createShortUrl(req.body);
}));
