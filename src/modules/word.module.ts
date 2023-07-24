import { Router, Request, Response, NextFunction } from 'express'
import fs from 'fs';
import Docxtemplater from 'docxtemplater';
import * as htmlText from 'html-to-text';

const router: Router = Router()

router.post('/html-to-word', async (req: Request, res: Response, next: NextFunction) => {
	const { html } = req.body;

	if (!html) {
		return res.status(400).json({ error: 'HTML content not provided in the request body.' });
	}

	try {
		console.log(htmlText.htmlToText)
		// Convert HTML to plain text
		const contentText = htmlText.htmlToText.fromString(html, {
			wordwrap: 130 // Adjust the word wrap as needed
		});

		console.log('Step 1')
		// Load the Word template
		const doc = new Docxtemplater();
		doc.loadZip(contentText);

		console.log('Step 2')
		// Data to replace placeholders in the HTML template
		// In this example, we use hardcoded data, but you can customize it based on your requirements
		const data = {
			title: 'My HTML to Word Conversion',
			content: html
		};

		console.log('Step 3')
		// Set the data to fill the placeholders in the template
		doc.setData(data);

		console.log('Step 4')
		// Render the document
		doc.render();

		console.log('Step 5')
		// Get the output as a Buffer
		const buffer = doc.getZip().generate({ type: 'nodebuffer' });

		console.log('Step 6')
		// Set response headers for the Word document download
		res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
		res.setHeader('Content-Disposition', 'attachment; filename="generated_word.docx"');

		console.log('Step 7')
		// Send the generated Word document in the response
		res.send(buffer);
	} catch (error) {
		console.error('Error generating Word document:', error);
		res.status(500).json({ error: 'An error occurred while generating the Word document.' });
	}
});

export const WORD_PATH = '/word';
export const WORD_ROUTER = router;
