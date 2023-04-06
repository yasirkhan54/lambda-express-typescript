import { Router, Request, Response, NextFunction } from 'express'
import createError from 'http-errors';
import {
    LIST_OF_SESSION,
    GET_SESSION_BY_ID,
    CREATE_SESSION,
    EDIT_SESSION_BY_ID,
    DELETE_SESSION_BY_ID
} from '../services';

const router: Router = Router()

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const sessions = await LIST_OF_SESSION();
        res.send({ sessions });
    } catch (error) {
        // handle the error here
        next(error);
    }
})

router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const session = await GET_SESSION_BY_ID(req.params.id ? req.params.id : '0');
        res.send(session);
    } catch (error) {
        // handle the error here
        next(error);
    }
})

router.post('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const session = await CREATE_SESSION(req.body);
        res.send(session);
    } catch (error) {
        // handle the error here
        next(error);
    }
})

router.put('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const session = await EDIT_SESSION_BY_ID(req.params.id ? req.params.id : '0', req.body);
        res.send(session);
    } catch (error) {
        // handle the error here
        next(error);
    }
})

router.delete('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const session = await DELETE_SESSION_BY_ID(req.params.id ? req.params.id : '0');
        res.send(session);
    } catch (error) {
        // handle the error here
        next(error);
    }
})

export const SESSION_PATH = '/session';
export const SESSION_ROUTER = router;