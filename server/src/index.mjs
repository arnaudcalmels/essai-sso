import path from 'path';
import express from 'express';

import db, { find } from '../db/index.mjs';

const __dirname = path.resolve();

const app = express();

app.set('view engine', 'pug');
app.set('views', './src/views');

app.use('/public/stylesheets', express.static(__dirname + '/public/stylesheets'));

app.use(express.urlencoded());

app.get('/', function(req, res) {
    res.render('login');
});

app.post('/api/session/login', (req, res) => {
    const { email, password } = req.body;
    const user = find(db, email);
    if (user && user.password === password) {
        res.send(`Bonjour ${user.firstname}`);
    }

    res.render('login', {error: 'Invalid credentials'});
});

app.listen(3000);
