[![This project is using Percy.io for visual regression testing.](https://percy.io/static/images/percy-badge.svg)](https://percy.io/05e59f07/ritain)

# Ritain QA challenge

The challenge consists of the following steps:
Specification of success scenario in BDD
Automation of the specified scenarios
 
For this challenge, the e-commerce page <https://www.saucedemo.com/> should be considered.
 
You can develop this challenge in the programming language that is most comfortable for you. The developed code must be sent, as well as a video (if possible) with its explanation and execution.

## Decision log

### Programing language

Since other challenges were demanding JavaScript and Cypress, I choose them to this one, because I already have a boillerplate for this.

### Specification of success scenario in BDD

I believe it means use Gherkin. I chose not to use Cucumber, but [Cypress Steps plugin](https://github.com/filiphric/cypress-plugin-steps), in order to write scenario in Gherkin.

### Scenario

I chose to write just one scenario, but doing more verifications than usual.

The chosen scenario was to buy the backpack and, on each screen, verify together the accessibility with [Cypress Axe](https://github.com/mwmcode/cypress-axe-core) and do visual tests using [Percy for Cypress](https://github.com/percy/percy-cypress).

Percy report can be viewed at url <https://percy.io/05e59f07/ritain>

### Observations

I tried to enter directly on `inventory.html` page by setting the cookie `session-username` with the current `username`. This works manually but with Cypress the page respond with `404 Not Found` withing the automation, but working if I click on the url. I didn't find out why.

## How to run this project

### Locally

1. Clone this repository
1. inside the root directory, type `npm i`

For headless mode, type `npx cypress run`.

To use the GUI, type `npx cypress open`

### GitHub Actions

This is the easiest way because you can run the project basically with only one click.

1. Go to the Actions tab
1. Click on `Ritain QA Challenge` on the left menu
1. Click on `Run workflow` button on the right in the blue bar
1. Click on the `Run workflow` green button.

After the workflow finishes, an zip file will be generated containing the Cypress run videos. You can download it at the button of the chosen run.
