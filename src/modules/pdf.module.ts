import { Router, Request, Response, NextFunction } from 'express'
import createError from 'http-errors'
import { ERROR_MESSAGE } from '../shared'
import pdf from 'html-pdf';

const router: Router = Router()

router.post('/html-to-pdf', async (req: Request, res: Response, next: NextFunction) => {
	const { html } = req.body;

  if (!html) {
    return res.status(400).json({ error: 'HTML content not provided in the request body.' });
  }

  // Configuration options for the PDF
  const pdfOptions = { format: 'Letter' };

  // Convert HTML to PDF
  pdf.create(html, pdfOptions).toBuffer((err, buffer) => {
    if (err) {
      console.error('Error converting HTML to PDF:', err);
      return res.status(500).json({ error: 'An error occurred while converting HTML to PDF.' });
    }

    // Set response headers for the PDF download
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename="converted.pdf"');

    // Send the PDF buffer in the response
    res.send(buffer);
  });
});

export const PDF_PATH = '/pdf';
export const PDF_ROUTER = router;
