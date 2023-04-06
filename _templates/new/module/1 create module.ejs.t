---
to: src/modules/<%= name %>.ts
unless_exists: true
---
import { Router, Request, Response, NextFunction } from 'express'
import createError from 'http-errors';
import {
    LIST_OF_<%= name.toUpperCase() %>,
    GET_<%= name.toUpperCase() %>_BY_ID,
    CREATE_<%= name.toUpperCase() %>,
    EDIT_<%= name.toUpperCase() %>_BY_ID,
    DELETE_<%= name.toUpperCase() %>_BY_ID
} from '../services';

const router: Router = Router()

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const users = await LIST_OF_<%= name.toUpperCase() %>();
        res.send({ users });
    } catch (error) {
        // handle the error here
        next(error);
    }
})

router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await GET_<%= name.toUpperCase() %>_BY_ID(req.params.id ? req.params.id : '0');
        res.send(user);
    } catch (error) {
        // handle the error here
        next(error);
    }
})

router.post('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await CREATE_<%= name.toUpperCase() %>(req.body);
        res.send(user);
    } catch (error) {
        // handle the error here
        next(error);
    }
})

router.put('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await EDIT_<%= name.toUpperCase() %>_BY_ID(req.params.id ? req.params.id : '0', req.body);
        res.send(user);
    } catch (error) {
        // handle the error here
        next(error);
    }
})

router.delete('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await DELETE_<%= name.toUpperCase() %>_BY_ID(req.params.id ? req.params.id : '0');
        res.send(user);
    } catch (error) {
        // handle the error here
        next(error);
    }
})

export const <%= name.toUpperCase() %>_PATH = '/<%= path %>';
export const <%= name.toUpperCase() %>_ROUTER = router;