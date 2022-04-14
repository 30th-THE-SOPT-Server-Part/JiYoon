import express, { Request, Response, NextFunction } from 'express';

const app = express(); //express 객체 받아옴

app.use(express.json()); //req body를 json형식으로

app.use('/api', require('./api'));

app.listen('8000', () => {
  console.log(`
        #############################################
            🛡️ Server listening on port: 8000 🛡️
        #############################################
    `);
});
