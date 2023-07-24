import { Router, Request, Response, NextFunction } from 'express'
import createError from 'http-errors'
import { ERROR_MESSAGE } from '../shared'
import puppeteer from 'puppeteer-core'

const router: Router = Router()

// Function to generate the PNG using Puppeteer
const generatePNG = async (data) => {
	const browser = await puppeteer.launch({
		executablePath: process.env.GOOGLE_CHROME_BIN,
		args: ['--no-sandbox', '--disable-setuid-sandbox'],
		headless: true
	});
	const page = await browser.newPage();

	// Load the HTML template and replace placeholders with data
	const template = `
		<!DOCTYPE html>
		<html>
		<head>
			<title>Generated PNG</title>
		</head>
		<body>
			<h1 style="color: red">${data.title}</h1>
			<p>${data.description}</p>
			<!-- Add more placeholders as needed -->
		</body>
		</html>
	`;

	await page.setContent(template, { waitUntil: 'networkidle0' });

	// Generate the PNG and store it as a buffer
	const pngBuffer = await page.screenshot();

	await browser.close();

	return pngBuffer;
};

// POST route to receive JSON data and generate PNG
router.post('/png', async (req, res) => {
  try {
    const jsonData = req.body;

    // Call the function to generate the PNG
    const pngBuffer = await generatePNG(jsonData);

    // Send the generated PNG back to the client
    res.writeHead(200, {
      'Content-Type': 'image/png',
      'Content-Length': pngBuffer.length,
    });
    res.end(pngBuffer);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error generating PNG');
  }
});

export const IMAGE_PATH = '/img';
export const IMAGE_ROUTER = router;
