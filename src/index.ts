import express, { Application, Request, Response, NextFunction } from 'express'
import createHttpError, { HttpError } from 'http-errors';
import { graphqlHTTP } from 'express-graphql';

import { ERROR_MESSAGE } from './shared';
import { ROOT_QUERY_LIST } from './root_queries';

const app: Application = express()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

ROOT_QUERY_LIST.map((rootQuery) => { app.use(rootQuery.path, graphqlHTTP({ schema: rootQuery.schema, graphiql: rootQuery.graphiql })) })

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

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server up at port ${PORT}.`))