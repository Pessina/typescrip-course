import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import express from 'express';
import router from './router';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['lfksjdflkjds'] }));
app.use(router);

app.listen(port);
