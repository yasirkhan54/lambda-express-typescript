import { Router, Request, Response, NextFunction } from 'express'
import createError from 'http-errors';
import {
    LIST_OF_THIRDPARTYTOKEN,
    GET_THIRDPARTYTOKEN_BY_ID,
    CREATE_THIRDPARTYTOKEN,
    EDIT_THIRDPARTYTOKEN_BY_ID,
    DELETE_THIRDPARTYTOKEN_BY_ID
} from '../services';

const router: Router = Router()

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const users = await LIST_OF_THIRDPARTYTOKEN();
        res.send({ users });
    } catch (error) {
        // handle the error here
        next(error);
    }
})

router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await GET_THIRDPARTYTOKEN_BY_ID(req.params.id ? req.params.id : '0');
        res.send(user);
    } catch (error) {
        // handle the error here
        next(error);
    }
})

router.post('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await CREATE_THIRDPARTYTOKEN(req.body);
        res.send(user);
    } catch (error) {
        // handle the error here
        next(error);
    }
})

router.put('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await EDIT_THIRDPARTYTOKEN_BY_ID(req.params.id ? req.params.id : '0', req.body);
        res.send(user);
    } catch (error) {
        // handle the error here
        next(error);
    }
})

router.delete('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await DELETE_THIRDPARTYTOKEN_BY_ID(req.params.id ? req.params.id : '0');
        res.send(user);
    } catch (error) {
        // handle the error here
        next(error);
    }
})

export const THIRDPARTYTOKEN_PATH = '/third-party-token';
export const THIRDPARTYTOKEN_ROUTER = router;