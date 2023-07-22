import { Router, Request, Response, NextFunction } from 'express'
import createError from 'http-errors'
import { ERROR_MESSAGE } from '../shared'
import puppeteer from 'puppeteer'

const router: Router = Router()

// Function to generate PDF from HTML using Puppeteer
async function generatePdfFromHtml(htmlContent) {
	console.log('Generating PDF...');					
	console.log('htmlContent: ', htmlContent);
	console.log('process.env.CHROME_BIN: ', process.env.CHROME_BIN);
	console.log('/usr/bin/google-chrome-stable');

	const browser = await puppeteer.launch();
	console.log('browser launched');

	const page = await browser.newPage();
	console.log('page created');

	await page.setContent(htmlContent);
	console.log('page content set');

	const pdfBuffer = await page.pdf();
	console.log('pdf generated');

	await browser.close();
	console.log('browser closed');

	return pdfBuffer;
}

router.post('/html-to-pdf', async (req: Request, res: Response, next: NextFunction) => {
	const { html } = req.body;

	try {
		const pdfBuffer = await generatePdfFromHtml(html);
		res.setHeader('Content-Type', 'application/pdf');
		res.setHeader('Content-Disposition', 'attachment; filename=generated_pdf.pdf');
		res.send(pdfBuffer);
	} catch (err) {
		res.status(500).json({ error: `PDF generation failed: ${err.message}` });
	}
});

export const PDF_PATH = '/pdf';
export const PDF_ROUTER = router;
