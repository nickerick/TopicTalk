import { test, expect } from '@playwright/test';

test('home page modal fully appears', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator('body')).toContainText('What do you want to talk about?');
	await expect(page.locator('body')).toContainText(
		'Enter a topic you are interested in. TopicTalk will connect you to a chat room with others who share the same interest.'
	);
	await expect(page.locator('#join-btn')).toContainText("Let's Talk!");
	await expect(page.getByPlaceholder('Enter topic here...')).toBeVisible();
});

test('navbar buttons bring to correct locations', async ({ page }) => {
	await page.goto('/');
	await expect(page.url()).toEqual('http://localhost:3000/');
	await page.getByRole('link', { name: 'New Topic!' }).click();
	await expect(page.url()).toEqual('http://localhost:3000/');
	await page.getByRole('link', { name: 'About' }).click();
	await expect(page.url()).toEqual('http://localhost:3000/about');
	await page.getByRole('link', { name: 'topic-talk-logo' }).click();
	await expect(page.url()).toEqual('http://localhost:3000/');
});

test('unimplemented route brings to error page', async ({ page }) => {
	await page.goto('/');
	await page.goto('/unknown');
	await expect(page.getByRole('heading')).toContainText('404 Not Found');
});

test('inputting topic brings to correct chatroom page', async ({ page }) => {
	await page.goto('/');

	// Enter 'test' into topic input
	await page.getByPlaceholder('Enter topic here...').click();
	await page.getByPlaceholder('Enter topic here...').fill('test');
	await page.getByRole('button', { name: "Let's Talk!" }).click();

	await expect(page.url()).toEqual('http://localhost:3000/topic/test');
	await expect(page.locator('body')).toContainText('Test');
});
