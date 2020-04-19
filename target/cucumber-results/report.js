$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/Features/Test.feature");
formatter.feature({
  "name": "Cucumber Automation",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Sign Up",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I open the application",
  "keyword": "Given "
});
formatter.step({
  "name": "I click on Profile button",
  "keyword": "Then "
});
formatter.step({
  "name": "I click on Signup button",
  "keyword": "Then "
});
formatter.step({
  "name": "I enter email address \u003cemail\u003e",
  "keyword": "Then "
});
formatter.step({
  "name": "I enter in choose password \u003cpassword\u003e",
  "keyword": "Then "
});
formatter.step({
  "name": "I enter mobile no \u003cmobileNo\u003e",
  "keyword": "Then "
});
formatter.step({
  "name": "I select the gender",
  "keyword": "Then "
});
formatter.step({
  "name": "I click on submit button",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password",
        "mobileNo"
      ]
    },
    {
      "cells": [
        "dhirajshuklalk@gmail.com",
        "ab@123456",
        "9004962149"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Sign Up",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open the application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.LoginPageStepDefinition.openApplication()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Profile button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.LoginPageStepDefinition.clickProfilebtn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Signup button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.LoginPageStepDefinition.clickSignpbtn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter email address dhirajshuklalk@gmail.com",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.LoginPageStepDefinition.enterEmail(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter in choose password ab@123456",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.LoginPageStepDefinition.enterPassword(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter mobile no 9004962149",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.LoginPageStepDefinition.enterMobileNo(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I select the gender",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.LoginPageStepDefinition.selectGender()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.LoginPageStepDefinition.clcikSubmitBtn()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchSessionException: Tried to run command without establishing a connection\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027JJPL-212-PC\u0027, ip: \u0027192.168.0.103\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 75.0, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20200403170909, moz:geckodriverVersion: 0.26.0, moz:headless: false, moz:processID: 9868, moz:profile: C:\\Users\\JJPL-212\\AppData\\L..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 6.1, rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: f5c72289-4239-4bd1-afa4-cf59e1d3e57c\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.quit(RemoteWebDriver.java:452)\r\n\tat Resources.DriverInitialization.tearDown(DriverInitialization.java:64)\r\n\tat Resources.Hooks.afterScenario(Hooks.java:22)\r\n",
  "status": "failed"
});
});