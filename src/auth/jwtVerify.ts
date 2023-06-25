import * as jwt from 'jsonwebtoken';
import { UnauthorizedException } from '../handlers/UnauthorizedException';

export function jwtVerify(req, res, next) {
    const checkUrl = checkUrlMatching(req.url);

    if (checkUrl) {
        return next()
    }

    const authHeader = req.headers['authorization'] || req.headers['Authorization'];

    if (!authHeader) {
        throw new UnauthorizedException();
    }

    const token = authHeader.split(' ')[1];

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    next();
}

function checkUrlMatching(url: string): boolean {
    const nonTokenizedUrls = ['/login', '/register', '/general'];
    const actualUrl = url.replace('/api', '');
    let hasMatched = false;

    for (const key of nonTokenizedUrls) {
        if (actualUrl === key) {
            hasMatched = true;
            break;
        }
    }

    return hasMatched;
}
