import { Router, Request, Response, NextFunction } from 'express'
import createError from 'http-errors';
import {
    LIST_OF_CONSENT,
    GET_CONSENT_BY_ID,
    CREATE_CONSENT,
    EDIT_CONSENT_BY_ID,
    DELETE_CONSENT_BY_ID
} from '../services';

const router: Router = Router()

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const consents = await LIST_OF_CONSENT();
        res.send({ consents });
    } catch (error) {
        // handle the error here
        next(error);
    }
})

router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const consent = await GET_CONSENT_BY_ID(req.params.id ? req.params.id : '0');
        res.send(consent);
    } catch (error) {
        // handle the error here
        next(error);
    }
})

router.post('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const consent = await CREATE_CONSENT(req.body);
        res.send(consent);
    } catch (error) {
        // handle the error here
        next(error);
    }
})

router.put('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const consent = await EDIT_CONSENT_BY_ID(req.params.id ? req.params.id : '0', req.body);
        res.send(consent);
    } catch (error) {
        // handle the error here
        next(error);
    }
})

router.delete('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const consent = await DELETE_CONSENT_BY_ID(req.params.id ? req.params.id : '0');
        res.send(consent);
    } catch (error) {
        // handle the error here
        next(error);
    }
})

export const CONSENT_PATH = '/consent';
export const CONSENT_ROUTER = router;