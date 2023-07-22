import { Router, Request, Response, NextFunction } from 'express'
import fs from 'fs';
import Docxtemplater from 'docxtemplater';
import htmlToText from 'html-to-text';

const router: Router = Router()

router.post('/html-to-word', async (req: Request, res: Response, next: NextFunction) => {
	const { html } = req.body;

	if (!html) {
		return res.status(400).json({ error: 'HTML content not provided in the request body.' });
	}

	try {
		// Convert HTML to plain text
		const contentText = htmlToText.fromString(html, {
			wordwrap: 130 // Adjust the word wrap as needed
		});

		// Load the Word template
		const doc: any = new Docxtemplater();
		doc.loadFromString(contentText);

		// Data to replace placeholders in the HTML template
		// In this example, we use hardcoded data, but you can customize it based on your requirements
		const data = {
			title: 'My HTML to Word Conversion',
			content: html
		};

		// Set the data to fill the placeholders in the template
		doc.setData(data);

		// Render the document
		doc.render();

		// Get the output as a Buffer
		const buffer = doc.getZip().generate({ type: 'nodebuffer' });

		// Set response headers for the Word document download
		res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
		res.setHeader('Content-Disposition', 'attachment; filename="generated_word.docx"');

		// Send the generated Word document in the response
		res.send(buffer);
	} catch (error) {
		console.error('Error generating Word document:', error);
		res.status(500).json({ error: 'An error occurred while generating the Word document.' });
	}
});

export const PDF_PATH = '/word';
export const PDF_ROUTER = router;
