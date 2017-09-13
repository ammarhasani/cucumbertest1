$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("FacebookSmoke.feature");
formatter.feature({
  "line": 1,
  "name": "Facebook smoke test",
  "description": "",
  "id": "facebook-smoke-test",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Test facebook login functionality",
  "description": "",
  "id": "facebook-smoke-test;test-facebook-login-functionality",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "open browser and launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter valid username and valid password",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Quit the browser",
  "keyword": "And "
});
formatter.match({
  "location": "FacebookTest.open_browser_and_launch_the_application()"
});
formatter.result({
  "duration": 31436808444,
  "status": "passed"
});
formatter.match({
  "location": "FacebookTest.i_enter_valid_username_and_valid_password()"
});
formatter.result({
  "duration": 499294521,
  "status": "passed"
});
formatter.match({
  "location": "FacebookTest.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 8314199965,
  "status": "passed"
});
formatter.match({
  "location": "FacebookTest.quit_the_browser()"
});
formatter.result({
  "duration": 249300709,
  "status": "passed"
});
});NG: The server did not provide any stacktrace information)\nCommand duration or timeout: 18 milliseconds\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027360NDCLP017\u0027, ip: \u0027172.27.249.240\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.32.498550 (9dec58e66c31bcc53a9ce3c7226f0c1c5810906a), userDataDir\u003dC:\\Users\\ammars\\AppData\\Local\\Temp\\scoped_dir8152_25263}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d60.0.3112.113, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 3794e3dfdd6770e262849b4c899fb56a\n*** Element info: {Using\u003did, value\u003demail}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:410)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:453)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:402)\r\n\tat com.cucumber.stepDefination.FacebookTest.i_enter_valid_username_and_valid_password(FacebookTest.java:27)\r\n\tat ✽.When I enter valid username and valid password(FacebookSmoke.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "FacebookTest.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "FacebookTest.quit_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});