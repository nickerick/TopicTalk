import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
	webServer: {
		command: 'bash build.sh && node server/server.js',
		url: 'http://localhost:3000'
	},
	testDir: 'tests',
	testMatch: /(.+\.)?(test|spec)\.[jt]s/,
	fullyParallel: true,
	use: {
		baseURL: 'http://localhost:3000'
	}
};

export default config;
