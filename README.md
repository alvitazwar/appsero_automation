# Appsero End 2 End Testing using Codeceptjs and Puppeteer
This repo contains the automation scripts for appesero acceptance test & API test using Codeceptjs and puppeteers

## Step 1
### JAVA Installation
```
Go: https://java.com/en/download/
```
```
Click 'Agree and Start Free download' and install java globally
```
## Step 2
### Getting started

Create a test folder and under this run :

```
git clone https://github.com/alvitazwar/appsero_automation.git

```
```
composer install
```
```
composer dumpautoload -o
```
Run
```
npm install codeceptjs puppeteer --save
```
## Step 3
## Configuration
 
Open that test folder on visual studio code or your favourite Code Editor!

```
Create a file named codecept.conf.js & copy code from example.codecept.conf.js
```
```
In codecept.conf.js file 
Give your test Url at line `16` [Must be a complete url eg:https://dashboard.appsero.com]
```
```
In codecept.conf.js file if you want to run the code using chrome in full screen then provide your desired resolution for running
```
```
chrome: {
           args: [
                  "--no-sandbox",
                 "--window-size=height,weight"
                ],
                "defaultViewport": null
            }
```
```
Give your test site Username at line `88` [YourUsername]
```
```
Give your test site Password at line `89` [YourPassword]
```
```
Then rename example.codecept.conf.js file as codecept.conf.js
```
```
cd core-tests/e2e
```
```
Your root will seem like : appsero/core-tests/e2e 
```
```
npm install
```
## Step 4
## Install Dependies 
In order to properly run the scripts user needs to install some dependies such as
```
1. Faker
2. codeceptjs-chai
3. allure
4. crypto js
5. puppeteer
6. slugify
```
## Step 5

## Running Test
Before running tests, user need to create a plugin for this at first run `initialize_test.js` by running `npx codeceptjs run core-tests/e2e/pro-plugin/initialize_test.js`

For explore module run the following command:
`npx codeceptjs run core-tests/e2e/explore/ex_01_analytics_stats_test.js` [Copy any scenario you want to test under explore module]

For Setting module run the following command:
`npx codeceptjs run core-tests/e2e/settings/settings_01_edit_valid_test.js` [Copy any scenario you want to test under settings module]

For Email module run the following command:
`npx codeceptjs run core-tests/e2e/email/email_01_insert_emaildigest_test.js` [Copy any scenario you want to test under Email module]

## Scenario Dependencies
Some scenarios may require some prerequisite in order to validate Such as
```
1. Analytics, Email, Explore, Settings modules will work perfectly if the user account has premium appsero subscription and
a real plugin with some proper data. User need to goto `steps.js` and edit 14 no line. Inside the click button user need to write the plugin name exactly like appeared inside appsero application.

2. Analytics Scenario requires some Real plugin information in order to validate scenarios proerply. It will work perfectly if user used the plugin in real websites
 





