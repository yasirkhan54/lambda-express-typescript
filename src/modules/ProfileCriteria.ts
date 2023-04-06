import { Router, Request, Response, NextFunction } from 'express'
import createError from 'http-errors';
import {
    LIST_OF_PROFILECRITERIA,
    GET_PROFILECRITERIA_BY_ID,
    CREATE_PROFILECRITERIA,
    EDIT_PROFILECRITERIA_BY_ID,
    DELETE_PROFILECRITERIA_BY_ID
} from '../services';

const router: Router = Router()

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const profileCriterias = await LIST_OF_PROFILECRITERIA();
        res.send({ profileCriterias });
    } catch (error) {
        // handle the error here
        next(error);
    }
})

router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const profileCriteria = await GET_PROFILECRITERIA_BY_ID(req.params.id ? req.params.id : '0');
        res.send(profileCriteria);
    } catch (error) {
        // handle the error here
        next(error);
    }
})

router.post('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const profileCriteria = await CREATE_PROFILECRITERIA(req.body);
        res.send(profileCriteria);
    } catch (error) {
        // handle the error here
        next(error);
    }
})

router.put('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const profileCriteria = await EDIT_PROFILECRITERIA_BY_ID(req.params.id ? req.params.id : '0', req.body);
        res.send(profileCriteria);
    } catch (error) {
        // handle the error here
        next(error);
    }
})

router.delete('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const profileCriteria = await DELETE_PROFILECRITERIA_BY_ID(req.params.id ? req.params.id : '0');
        res.send(profileCriteria);
    } catch (error) {
        // handle the error here
        next(error);
    }
})

export const PROFILECRITERIA_PATH = '/profile-criteria';
export const PROFILECRITERIA_ROUTER = router;