import { test, chromium, devices } from '@playwright/test';

const PORT = 3000;

test('Review home page responsiveness', async ({ page }) => {
	await page.goto(`http://localhost:${PORT}/`);
	await page.pause();
});
