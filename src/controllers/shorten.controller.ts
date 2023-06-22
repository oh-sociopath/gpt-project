import { shortenService } from '../services/shorten.service';

class ShortenController {
    createShortUrl ({ longUrl }) {
        return shortenService.generateShortUrl(longUrl)
    }
}

export const shortenController = new ShortenController();
