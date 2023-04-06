import { Router, Request, Response, NextFunction } from 'express'
import createError from 'http-errors';
import {
    GET_SESSIONS,
    GET_SESSION_BY_ID,
    CREATE_SESSION_BY_ID,
    EDIT_SESSION_BY_ID,
    DELETE_SESSION_BY_ID
} from '../services';

const router: Router = Router()

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const users = await GET_SESSIONS();
        res.send({ users });
    } catch (error) {
        // handle the error here
        next(error);
    }
})

router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await GET_SESSION_BY_ID(req.params.id ? req.params.id : '0');
        res.send(user);
    } catch (error) {
        // handle the error here
        next(error);
    }
})

router.post('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await CREATE_SESSION_BY_ID(req.body);
        res.send(user);
    } catch (error) {
        // handle the error here
        next(error);
    }
})

router.put('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await EDIT_SESSION_BY_ID(req.params.id ? req.params.id : '0', req.body);
        res.send(user);
    } catch (error) {
        // handle the error here
        next(error);
    }
})

router.delete('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await DELETE_SESSION_BY_ID(req.params.id ? req.params.id : '0');
        res.send(user);
    } catch (error) {
        // handle the error here
        next(error);
    }
})

export const SESSION_PATH = '/session';
export const SESSION_ROUTER = router;