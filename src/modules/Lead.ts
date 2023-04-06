import { Router, Request, Response, NextFunction } from 'express'
import createError from 'http-errors';
import {
    LIST_OF_LEAD,
    GET_LEAD_BY_ID,
    CREATE_LEAD,
    EDIT_LEAD_BY_ID,
    DELETE_LEAD_BY_ID
} from '../services';

const router: Router = Router()

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const leads = await LIST_OF_LEAD();
        res.send({ leads });
    } catch (error) {
        // handle the error here
        next(error);
    }
})

router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const lead = await GET_LEAD_BY_ID(req.params.id ? req.params.id : '0');
        res.send(lead);
    } catch (error) {
        // handle the error here
        next(error);
    }
})

router.post('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const lead = await CREATE_LEAD(req.body);
        res.send(lead);
    } catch (error) {
        // handle the error here
        next(error);
    }
})

router.put('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const lead = await EDIT_LEAD_BY_ID(req.params.id ? req.params.id : '0', req.body);
        res.send(lead);
    } catch (error) {
        // handle the error here
        next(error);
    }
})

router.delete('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const lead = await DELETE_LEAD_BY_ID(req.params.id ? req.params.id : '0');
        res.send(lead);
    } catch (error) {
        // handle the error here
        next(error);
    }
})

export const LEAD_PATH = '/lead';
export const LEAD_ROUTER = router;