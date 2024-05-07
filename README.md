# Lorem Ipsum F.C.

### A Bootstrap Website, hosted on Google Firebase. Tested using Playwright with Typescript.

[Link to Website](https://lorem-ipsum-fc.web.app)

****
### How to set-up Playwright:
1. Download and install [Node.js](https://nodejs.org/en)
2. Navigate to [playwright](https://github.com/jasonthorne/LoremIpsumFC/tree/main/playwright) folder
3. Update Playwright to the latest version:
>  ```diff
>  npm install -D @playwright/test@latest
>  ```
4. Download new browser binaries and their dependencies:
>  ```diff
>  npx playwright install --with-deps
>  ```
****
### Pre-made commands for running tests:
|  Command  | Description |         
| ---------- | -------- | 
| npm run all-tests:chromium | Run all tests with Chromium |
| npm run all-tests:firefox | Run all tests with Firefox |
| npm run all-tests:webkit | Run all tests with Webkit |
| npm run all-tests:all-browsers | Run all tests with Chromium, Firefox and Webkit |
| npm run title:all-browsers | Run all page title tests with Chromium, Firefox and Webkit |
| npm run navbar:all-browsers | Run all navbar tests with Chromium, Firefox and Webkit |
| npm run hero:all-browsers | Run all hero tests with Chromium, Firefox and Webkit |
| npm run news-updates:all-browsers | Run all 'news & update' section tests with Chromium, Firefox and Webkit |
| npm run fixtures-results:all-browsers | Run all 'fixtures & results' section tests with Chromium, Firefox and Webkit |
| npm run admin:all-browsers | Run all 'admin' section tests with Chromium, Firefox and Webkit |
| npm run comments:all-browsers | Run all 'comments' section tests with Chromium, Firefox and Webkit |
| npm run footer:all-browsers | Run all footer tests with Chromium, Firefox and Webkit |
