import * as express from 'express';
import { redirectController } from '../controllers/redirect.controller';

export const routerRedirect = express.Router();

routerRedirect.get('/:shortUrl', (req, res) => {
    res.json(redirectController.redirectShortUrl(req.params))
})
