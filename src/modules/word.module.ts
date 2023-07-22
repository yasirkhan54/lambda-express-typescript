import { Router, Request, Response, NextFunction } from 'express'
import createError from 'http-errors'
import { ERROR_MESSAGE } from '../shared'
import puppeteer from 'puppeteer-core'

const router: Router = Router()

// Function to generate PDF from HTML using Puppeteer
async function generatePdfFromHtml(htmlContent) {
	console.log('generating pdf from html');

	const browser = await puppeteer.launch({
		executablePath: process.env.GOOGLE_CHROME_BIN,
		args: ['--no-sandbox', '--disable-setuid-sandbox'],
		headless: true
	});
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
