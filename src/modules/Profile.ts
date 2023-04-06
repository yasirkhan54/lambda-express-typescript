import { Router, Request, Response, NextFunction } from 'express'
import createError from 'http-errors';
import {
    LIST_OF_PROFILE,
    GET_PROFILE_BY_ID,
    CREATE_PROFILE,
    EDIT_PROFILE_BY_ID,
    DELETE_PROFILE_BY_ID
} from '../services';

const router: Router = Router()

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const profiles = await LIST_OF_PROFILE();
        res.send({ profiles });
    } catch (error) {
        // handle the error here
        next(error);
    }
})

router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const profile = await GET_PROFILE_BY_ID(req.params.id ? req.params.id : '0');
        res.send(profile);
    } catch (error) {
        // handle the error here
        next(error);
    }
})

router.post('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const profile = await CREATE_PROFILE(req.body);
        res.send(profile);
    } catch (error) {
        // handle the error here
        next(error);
    }
})

router.put('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const profile = await EDIT_PROFILE_BY_ID(req.params.id ? req.params.id : '0', req.body);
        res.send(profile);
    } catch (error) {
        // handle the error here
        next(error);
    }
})

router.delete('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const profile = await DELETE_PROFILE_BY_ID(req.params.id ? req.params.id : '0');
        res.send(profile);
    } catch (error) {
        // handle the error here
        next(error);
    }
})

export const PROFILE_PATH = '/profile';
export const PROFILE_ROUTER = router;