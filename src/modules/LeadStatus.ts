import { Router, Request, Response, NextFunction } from 'express'
import createError from 'http-errors';
import {
    LIST_OF_LEADSTATUS,
    GET_LEADSTATUS_BY_ID,
    CREATE_LEADSTATUS,
    EDIT_LEADSTATUS_BY_ID,
    DELETE_LEADSTATUS_BY_ID
} from '../services';

const router: Router = Router()

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const leadStatuses = await LIST_OF_LEADSTATUS();
        res.send({ leadStatuses });
    } catch (error) {
        // handle the error here
        next(error);
    }
})

router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const leadStatus = await GET_LEADSTATUS_BY_ID(req.params.id ? req.params.id : '0');
        res.send(leadStatus);
    } catch (error) {
        // handle the error here
        next(error);
    }
})

router.post('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const leadStatus = await CREATE_LEADSTATUS(req.body);
        res.send(leadStatus);
    } catch (error) {
        // handle the error here
        next(error);
    }
})

router.put('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const leadStatus = await EDIT_LEADSTATUS_BY_ID(req.params.id ? req.params.id : '0', req.body);
        res.send(leadStatus);
    } catch (error) {
        // handle the error here
        next(error);
    }
})

router.delete('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const leadStatus = await DELETE_LEADSTATUS_BY_ID(req.params.id ? req.params.id : '0');
        res.send(leadStatus);
    } catch (error) {
        // handle the error here
        next(error);
    }
})

export const LEADSTATUS_PATH = '/lead-status';
export const LEADSTATUS_ROUTER = router;