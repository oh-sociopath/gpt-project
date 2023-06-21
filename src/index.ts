import * as express from 'express';
import * as dotenv from 'dotenv';
import * as cors from 'cors';
import { routerShortenUrl } from './routes/createShortUrlRouter';
import { routerRedirect } from './routes/redirectShortUrlRouter';
import { database } from './config/database';

const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());
app.use('/api', routerShortenUrl);
app.use('/api', routerRedirect);

const PORT = process.env.PORT || 3010

app.get('/', (req, res) => {
    res.end('hello world');
})

database.initialize()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running at http://localhost:${PORT}`);
        });
    })
    .catch(error => console.log('Error during initializing the database', error))
