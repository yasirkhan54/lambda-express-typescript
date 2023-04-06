import { Router, Request, Response, NextFunction } from 'express'
import createError from 'http-errors';
import {
    LIST_OF_QUALIFICATION,
    GET_QUALIFICATION_BY_ID,
    CREATE_QUALIFICATION,
    EDIT_QUALIFICATION_BY_ID,
    DELETE_QUALIFICATION_BY_ID
} from '../services';

const router: Router = Router()

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const Qualifications = await LIST_OF_QUALIFICATION();
        res.send({ Qualifications });
    } catch (error) {
        // handle the error here
        next(error);
    }
})

router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const Qualification = await GET_QUALIFICATION_BY_ID(req.params.id ? req.params.id : '0');
        res.send(Qualification);
    } catch (error) {
        // handle the error here
        next(error);
    }
})

router.post('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const Qualification = await CREATE_QUALIFICATION(req.body);
        res.send(Qualification);
    } catch (error) {
        // handle the error here
        next(error);
    }
})

router.put('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const Qualification = await EDIT_QUALIFICATION_BY_ID(req.params.id ? req.params.id : '0', req.body);
        res.send(Qualification);
    } catch (error) {
        // handle the error here
        next(error);
    }
})

router.delete('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const Qualification = await DELETE_QUALIFICATION_BY_ID(req.params.id ? req.params.id : '0');
        res.send(Qualification);
    } catch (error) {
        // handle the error here
        next(error);
    }
})

export const QUALIFICATION_PATH = '/qualification';
export const QUALIFICATION_ROUTER = router;