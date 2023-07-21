import { Router, Request, Response, NextFunction } from 'express'
import createError from 'http-errors';
import { ERROR_MESSAGE } from '../shared';
import PDF from 'html-pdf'

const router: Router = Router()

router.post('/', async (req: Request, res: Response, next: NextFunction) => {
	try {
		PDF.create(req.body.html, { format: 'a4' }).toBuffer((err, buffer) => {
			if (err) {
				next(createError(500, ERROR_MESSAGE.INTERNAL_SERVER_ERROR));
			} else {
				res.writeHead(200, {
					'Content-Type': 'application/pdf',
					'Content-Disposition': 'attachment; filename=filename.pdf',
					'Content-Length': buffer.length
				});
				res.end(buffer);
			}
		});
	} catch (error) {
		// handle the error here
		next(error);
	}
})

export const PDF_PATH = '/pdf';
export const PDF_ROUTER = router;
