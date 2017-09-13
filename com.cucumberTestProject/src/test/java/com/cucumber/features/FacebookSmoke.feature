Feature: Facebook smoke test

@facebook
Scenario: Test facebook login functionality

Given open browser and launch the application
When I enter valid username and valid password
Then user should be able to login successfully
And Quit the browser

@upwork
Scenario: Test upwork login functionality

Given open url and launch the application
When I enter valid credentials & password
Then user should be able to login
And Close the browser