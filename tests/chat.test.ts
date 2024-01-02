import { test, expect } from '@playwright/test';

test('chatroom allows communication between users', async ({ context }) => {
	// User 1
	const page1 = await context.newPage();

	// User 2
	const page2 = await context.newPage();

	// User 1 joins 'test' chatroom
	await page1.goto('/');
	await page1.getByPlaceholder('Enter topic here...').click();
	await page1.getByPlaceholder('Enter topic here...').fill('test');
	await page1.getByPlaceholder('Enter topic here...').press('Enter');

	// User 2 joins 'test' chatroom
	await page2.goto('/');
	await page2.getByPlaceholder('Enter topic here...').click();
	await page2.getByPlaceholder('Enter topic here...').fill('test');
	await page2.getByRole('button', { name: "Let's Talk!" }).click();

	// Expect self join messages
	expect(page1.getByText('System: joined topic as')).toBeDefined();
	expect(page2.getByText('System: joined topic as')).toBeDefined();

	// User 1 should see that User 2 joined
	expect(page1.getByText('has joined the topic')).toBeDefined();

	// User 2 sends message
	await page2.getByPlaceholder('Enter message...').click();
	await page2.getByPlaceholder('Enter message...').fill('hey friend');
	await page2.getByPlaceholder('Enter message...').press('Enter');

	expect(page1.getByText('hey friend')).toBeDefined();
	expect(page2.getByText('hey friend')).toBeDefined();

	// User 1 should see that User 2 left the chatroom
	await page2.getByRole('link', { name: 'New Topic!' }).click();
	expect(page1.getByText('has left the topic')).toBeDefined();
});
