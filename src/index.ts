import express, { Application, Request, Response, NextFunction } from 'express'
import createHttpError, { HttpError } from 'http-errors';
import { auth } from 'express-oauth2-jwt-bearer';
import serverless from 'serverless-http';

import dotenv from 'dotenv';
dotenv.config();

import { ERROR_MESSAGE } from './shared';
import { MODULES_LIST } from './modules';

const app: Application = express()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/health', (req: Request, res: Response) => {
    res.send({ message: 'Server is up and running.' })
})

app.use(auth({
    issuerBaseURL: process.env.ISSUER,
    audience: process.env.AUDIENCE,
    tokenSigningAlg: process.env.TOKEN_SIGNING_ALG
}));

MODULES_LIST.forEach((module) => app.use(module.PATH, module.ROUTER))

// catch 404 and forward to error handler
app.use((req: Request, res: Response, next: NextFunction) => {
    next(createHttpError[404](ERROR_MESSAGE.INVALID_RESOURCE_URL))
})

// error handler
app.use(function (err: HttpError, req: Request, res: Response, next: NextFunction) {
    res.send({
        name: err.name,
        message: err.message,
        statusCode: err.statusCode
    });
});

if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 3000
    app.listen(PORT, () => console.log(`Server up at port ${PORT}.`))
} else {
    module.exports.handler = serverless(app);
}
