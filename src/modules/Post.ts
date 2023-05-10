import { Router, Request, Response, NextFunction } from 'express'
import createError from 'http-errors';
import {
	LIST_OF_POST,
	GET_POST_BY_ID
} from '../services';
import { ERROR_MESSAGE } from '../shared';

const router: Router = Router()

router.get('/', async (req: Request, res: Response, next: NextFunction) => {
	try {
		const posts = await LIST_OF_POST();
		res.send({ posts });
	} catch (error) {
		// handle the error here
		next(error);
	}
})

router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
	try {
		if (isNaN(parseInt(req.params.id)) || parseInt(req.params.id) <= 0 || parseInt(req.params.id) > 100) {
			throw createError(400, ERROR_MESSAGE.INVALID_ID)
		}
		const post = await GET_POST_BY_ID(parseInt(req.params.id));
		res.send(post);
	} catch (error) {
		// handle the error here
		next(error);
	}
})

export const POST_PATH = '/post';
export const POST_ROUTER = router;