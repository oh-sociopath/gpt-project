import * as crypto from 'crypto';

class ShortenService {
    generateShortUrl(longUrl) {
        const hash = crypto.createHash('SHA-256').update(longUrl).digest('hex');
        const shortUrl = hash.slice(0, 8);

        return `http://localhost:3008/${shortUrl}`
    }
}

export const shortenService = new ShortenService()
