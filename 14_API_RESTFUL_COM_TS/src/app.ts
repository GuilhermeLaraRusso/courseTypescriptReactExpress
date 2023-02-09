// ENV variables
// eslint-disable-next-line
require('dotenv').config();

import express from 'express';
import config from 'config';

import db from '../config/db';

// Routes
import router from './router';

// logger

import logger from '../config/logger';

// Middlewares
import morganMiddleware from './middleware/morganMiddleware';

const app = express();

// JSON middleware
app.use(express.json());

app.use(morganMiddleware);

app.use('/api/', router);

// app port;

const port = config.get<number>('port');

app.listen(port, async () => {
  await db();

  logger.info(`Aplicação está funcionando na porta: ${port}`);
});
