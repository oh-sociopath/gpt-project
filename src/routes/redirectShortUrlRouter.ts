import * as express from 'express';
import { redirectController } from '../controllers/redirect.controller';
import { routeHandler } from '../handlers/errorhandler';

export const routerRedirect = express.Router();

routerRedirect.get('/:shortUrl', routeHandler(async (req) => {
    return await redirectController.redirectShortUrl(req.params);
}));
