import { Router, Request, Response, NextFunction } from 'express'
import createError from 'http-errors';
import {
    LIST_OF_ADDRESS,
    GET_ADDRESS_BY_ID,
    CREATE_ADDRESS,
    EDIT_ADDRESS_BY_ID,
    DELETE_ADDRESS_BY_ID
} from '../services';

const router: Router = Router()

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const addresses = await LIST_OF_ADDRESS();
        res.send({ addresses });
    } catch (error) {
        // handle the error here
        next(error);
    }
})

router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const address = await GET_ADDRESS_BY_ID(req.params.id ? req.params.id : '0');
        res.send(address);
    } catch (error) {
        // handle the error here
        next(error);
    }
})

router.post('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const address = await CREATE_ADDRESS(req.body);
        res.send(address);
    } catch (error) {
        // handle the error here
        next(error);
    }
})

router.put('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const address = await EDIT_ADDRESS_BY_ID(req.params.id ? req.params.id : '0', req.body);
        res.send(address);
    } catch (error) {
        // handle the error here
        next(error);
    }
})

router.delete('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const address = await DELETE_ADDRESS_BY_ID(req.params.id ? req.params.id : '0');
        res.send(address);
    } catch (error) {
        // handle the error here
        next(error);
    }
})

export const ADDRESS_PATH = '/address';
export const ADDRESS_ROUTER = router;