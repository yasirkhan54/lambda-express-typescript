import { Router, Request, Response, NextFunction } from 'express'
import createError from 'http-errors';
import {
    GET_PROFILECRITERIAS,
    GET_PROFILECRITERIA_BY_ID,
    CREATE_PROFILECRITERIA_BY_ID,
    EDIT_PROFILECRITERIA_BY_ID,
    DELETE_PROFILECRITERIA_BY_ID
} from '../services';

const router: Router = Router()

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const users = await GET_PROFILECRITERIAS();
        res.send({ users });
    } catch (error) {
        // handle the error here
        next(error);
    }
})

router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await GET_PROFILECRITERIA_BY_ID(req.params.id ? req.params.id : '0');
        res.send(user);
    } catch (error) {
        // handle the error here
        next(error);
    }
})

router.post('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await CREATE_PROFILECRITERIA_BY_ID(req.body);
        res.send(user);
    } catch (error) {
        // handle the error here
        next(error);
    }
})

router.put('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await EDIT_PROFILECRITERIA_BY_ID(req.params.id ? req.params.id : '0', req.body);
        res.send(user);
    } catch (error) {
        // handle the error here
        next(error);
    }
})

router.delete('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await DELETE_PROFILECRITERIA_BY_ID(req.params.id ? req.params.id : '0');
        res.send(user);
    } catch (error) {
        // handle the error here
        next(error);
    }
})

export const PROFILECRITERIA_PATH = '/profile-criteria';
export const PROFILECRITERIA_ROUTER = router;