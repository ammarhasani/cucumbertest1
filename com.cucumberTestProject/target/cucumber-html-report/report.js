$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("FacebookSmoke.feature");
formatter.feature({
  "line": 1,
  "name": "Facebook smoke test",
  "description": "",
  "id": "facebook-smoke-test",
  "keyword": "Feature"
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
  "duration": 41670684004,
  "status": "passed"
});
formatter.match({
  "location": "Upwork.i_enter_valid_credentials_password()"
});
formatter.result({
  "duration": 5083594303,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"id\",\"selector\":\"username\"}\n  (Session info: chrome\u003d60.0.3112.113)\n  (Driver info: chromedriver\u003d2.32.498550 (9dec58e66c31bcc53a9ce3c7226f0c1c5810906a),platform\u003dWindows NT 10.0.14393 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 66 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.4.0\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027360NDCLP017\u0027, ip: \u0027172.27.250.249\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.32.498550 (9dec58e66c31bcc53a9ce3c7226f0c1c5810906a), userDataDir\u003dC:\\Users\\ammars\\AppData\\Local\\Temp\\scoped_dir2384_9223}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d60.0.3112.113, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 65ff6a24f08a42e387c20d5db8451e68\n*** Element info: {Using\u003did, value\u003dusername}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:671)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:410)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:453)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:218)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:402)\r\n\tat com.cucumber.stepDefination.Upwork.i_enter_valid_credentials_password(Upwork.java:25)\r\n\tat ✽.When I enter valid credentials \u0026 password(FacebookSmoke.feature:15)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Upwork.user_should_be_able_to_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Upwork.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});