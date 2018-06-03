import * as express from 'express';
import * as next from 'next';
import * as path from 'path';
import i18nextExpressMiddleware, { LanguageDetector } from 'i18next-express-middleware';
import * as i18nextNodeFsBackend from 'i18next-node-fs-backend';
import { i18nInstance } from '../i18n';

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

i18nInstance
  .use(i18nextNodeFsBackend)
  .use(LanguageDetector)
  .init({
    fallbackLng: 'en',
    preload: ['en', 'hr'], // preload all langages
    ns: ['common', 'home', 'pageA', 'pageB'], // need to preload all the namespaces
    backend: {
      loadPath: path.join(__dirname, '../locales/{{lng}}/{{ns}}.json'),
      addPath: path.join(__dirname, '../locales/{{lng}}/{{ns}}.missing.json')
    }
  }, () => {
    // loaded translations we can bootstrap our routes
    app.prepare()
      .then(() => {
        const server = express();

        // enable middleware for i18next
        server.use(i18nextExpressMiddleware.handle(i18nInstance));

        // serve locales for client
        server.use('/locales', express.static(path.join(__dirname, '../locales')));

        // missing keys
        server.post('/locales/add/:lng/:ns', i18nextExpressMiddleware.missingKeyHandler(i18nInstance));

        // use next.js
        server.get('/interpolation', (req, res) => handle(req, res));
        server.get('/formating', (req, res) => handle(req, res));
        server.get('/nesting', (req, res) => handle(req, res));
        server.get('/plurals', (req, res) => handle(req, res));
        server.get('/context', (req, res) => handle(req, res));
        server.get('/trans', (req, res) => handle(req, res));
        server.get('*', (req, res) => handle(req, res));

        server.listen(port, (err) => {
          if (err) throw err
          console.log(`> Ready on http://localhost:${port}`)
        })
      });
  })
