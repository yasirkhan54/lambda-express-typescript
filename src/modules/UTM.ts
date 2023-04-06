import { Router, Request, Response, NextFunction } from 'express'
import createError from 'http-errors';
import {
    LIST_OF_UTM,
    GET_UTM_BY_ID,
    CREATE_UTM,
    EDIT_UTM_BY_ID,
    DELETE_UTM_BY_ID
} from '../services';

const router: Router = Router()

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const utms = await LIST_OF_UTM();
        res.send({ utms });
    } catch (error) {
        // handle the error here
        next(error);
    }
})

router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const utm = await GET_UTM_BY_ID(req.params.id ? req.params.id : '0');
        res.send(utm);
    } catch (error) {
        // handle the error here
        next(error);
    }
})

router.post('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const utm = await CREATE_UTM(req.body);
        res.send(utm);
    } catch (error) {
        // handle the error here
        next(error);
    }
})

router.put('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const utm = await EDIT_UTM_BY_ID(req.params.id ? req.params.id : '0', req.body);
        res.send(utm);
    } catch (error) {
        // handle the error here
        next(error);
    }
})

router.delete('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const utm = await DELETE_UTM_BY_ID(req.params.id ? req.params.id : '0');
        res.send(utm);
    } catch (error) {
        // handle the error here
        next(error);
    }
})

export const UTM_PATH = '/utm';
export const UTM_ROUTER = router;