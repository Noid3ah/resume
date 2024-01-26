import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Assuming your content is in index.astro, adjust this path accordingly
  await page.goto('src/pages/index.astro', { waitUntil: 'networkidle0' });

  // Save the generated PDF in the same directory as the script
  await page.pdf({ path: 'src/resume.pdf', format: 'A4' });

  await browser.close();
})();
