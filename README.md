# Todoist Test Automation Framework - Using WebdriverIo

This repository contains a test automation framework for automating tasks on the Todoist website and android mobile application using WebdriverIO and JavaScript.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running Tests](#running-tests)

## Prerequisites

To use this framework, you need to have the following software installed on your machine:

- [Node.js](https://nodejs.org)
- [WebdriverIO](https://webdriver.io/)

## Installation

1. Clone this repository: `git clone https://github.com/karimelkomy/lodgify-webdriverio.git`
2. Navigate to the project directory: `cd lodgify-webdriver-io`
3. Install dependencies: `npm install`
4. Create an account on https://todoist.com/app/settings/integrations/developer
5. Change .env.at to .env and fill EMAIL, PASSWORD and API_TOKEN
6. Prepare android emulator with android version `12` and name the emulator device as `emulator-5554`

## Configuration

Before running the tests, make sure to configure the necessary settings. The configuration file can be found at `./wdio.conf.js`. Open this file in a text editor and modify the configuration options according to your requirements.

The configuration file includes options such as browser capabilities, test specs, test reporters, and more. Customize these options based on your needs.

## Running Tests

To execute the automated tests, use the following command:

```
yarn at
```

This command will run the tests using the configuration specified in `wdio.conf.js`. The test results will be displayed in the console, and any failures or errors will be reported.

## Video

Video Recording for the test scenarios can be found [Here](https://drive.google.com/file/d/1SLBaETONI5m9Yv5sgySwEsVwLZkZskfk/view?usp=sharing)
