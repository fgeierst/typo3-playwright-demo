# TYPO3 Playwright Demo

End-to-End Testing for TYPO3 CMS with [Playwright](https://playwright.dev/docs/).


## Local installation guide

	git clone https://github.com/fgeierst/...
	cd typo3-playwright-demo
	ddev start
	ddev composer install
	ddev snapshot restore --latest
	
Login via [typo3-playwright-demo.ddev.site/](https://typo3-playwright-demo.ddev.site/) using these credentials:

- Username: `admin`
- Password: `password`


## End-to-end testing

Due to an [incompatibility with Alpine Linux](https://playwright.dev/docs/docker#alpine), we run Playwright outside the DDEV container. This requires [Node](https://nodejs.org/en/download/) to be installed on your machine. 

Editor extensions for [Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright) and [IntelliJ editors](https://plugins.jetbrains.com/plugin/18100-maestro) are recommended.

Install headless browsers
```shell
npx playwright install
```

Run test suite
```shell
npm run test
```