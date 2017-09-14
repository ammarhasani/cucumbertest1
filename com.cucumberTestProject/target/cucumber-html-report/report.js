$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("FacebookSmoke.feature");
formatter.feature({
  "line": 1,
  "name": "Facebook smoke test",
  "description": "",
  "id": "facebook-smoke-test",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Test facebook login functionality",
  "description": "",
  "id": "facebook-smoke-test;test-facebook-login-functionality",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@facebook"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "open browser and launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter valid username and valid password",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "FacebookTest.open_browser_and_launch_the_application()"
});
formatter.result({
  "duration": 27528250260,
  "status": "passed"
});
formatter.match({
  "location": "FacebookTest.i_enter_valid_username_and_valid_password()"
});
formatter.result({
  "duration": 427429224,
  "status": "passed"
});
formatter.match({
  "location": "FacebookTest.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 7297007645,
  "status": "passed"
});
formatter.match({
  "location": "FacebookTest.quit_the_browser()"
});
formatter.result({
  "duration": 302358058,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Test upwork login functionality",
  "description": "",
  "id": "facebook-smoke-test;test-upwork-login-functionality",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@upwork"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "open url and launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I enter valid credentials \u0026 password",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "user should be able to login",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Upwork.open_url_and_launch_the_application()"
});
formatter.result({
  "duration": 30519699382,
  "status": "passed"
});
formatter.match({
  "location": "Upwork.i_enter_valid_credentials_password()"
});
formatter.result({
  "duration": 5530749172,
  "status": "passed"
});
formatter.match({
  "location": "Upwork.user_should_be_able_to_login()"
});
formatter.result({
  "duration": 5157046853,
  "status": "passed"
});
formatter.match({
  "location": "Upwork.close_the_browser()"
});
formatter.result({
  "duration": 348663696,
  "status": "passed"
});
});