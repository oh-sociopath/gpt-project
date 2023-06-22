import { redirectService } from '../services/redirect.service';

class RedirectController {
    redirectShortUrl({shortUrl}) {
        return redirectService.getOriginalUrl(shortUrl)
    }
}

export const redirectController = new RedirectController();
