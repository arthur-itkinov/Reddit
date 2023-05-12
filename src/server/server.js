import express from 'express';
import ReactDOM from 'react-dom/server';
import { App } from '../App';
import { indexHTMLTemplate } from './indexTemplate';
import axios from 'axios';
const app = express();

app.use('/static', express.static('./dist/client'));

app.get('/', (req, res) => {
  res.send(indexHTMLTemplate(ReactDOM.renderToString(App())));
});

app.get('/auth', (req, res) => {
  axios
    .post(
      'https://www.reddit.com/api/v1/access_token',
      `grant_type=authorization_code&code=${req.query.code}&redirect_uri=http://localhost:3000/auth`,
      {
        auth: { username: process.env.CLIENT_ID, password: 'om8v3lY579A3RqRVIU3duJahtO0iHQ' },
        header: { 'Content-Type': 'application/x-www-form-urlencoded' },
      },
    )
    .then(({ data }) => {
      res.send(indexHTMLTemplate(ReactDOM.renderToString(App()), data['access_token']));
    })
    .catch(console.log);
});

app.listen(3000, () => {
  console.log('server started on port http://localhost:3000');
});
