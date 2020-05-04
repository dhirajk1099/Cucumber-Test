$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/Features/HomePageFunctionality.feature");
formatter.feature({
  "name": "Testing HomePage Functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Add to cart",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeTests"
    }
  ]
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
  "name": "I click on \"log in\" buttonLink",
  "keyword": "Then "
});
formatter.step({
  "name": "I enter email address \"dhirajshuklalk@gmail.com\"",
  "keyword": "Then "
});
formatter.step({
  "name": "I enter password \"Intel@1234\"",
  "keyword": "Then "
});
formatter.step({
  "name": "I click on \"Log in\" button",
  "keyword": "And "
});
formatter.step({
  "name": "I hover on \"\u003cHeader\u003e\" on header menu on homepage",
  "keyword": "Then "
});
formatter.step({
  "name": "I click on \"\u003cMenu\u003e\" on homepage under header menu",
  "keyword": "Then "
});
formatter.step({
  "name": "I click on First Product on PLP page",
  "keyword": "Then "
});
formatter.step({
  "name": "I switch to New Window",
  "keyword": "Then "
});
formatter.step({
  "name": "I click on WishlistNow on PDP",
  "keyword": "Then "
});
formatter.step({
  "name": "I switch back to Parent Window",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Header",
        "Menu"
      ]
    },
    {
      "cells": [
        "Men",
        "T-Shirts"
      ]
    },
    {
      "cells": [
        "Women",
        "Ethnic Dresses"
      ]
    },
    {
      "cells": [
        "Home \u0026 Living",
        "Beach Towels"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Add to cart",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeTests"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open the application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.LoginAndRegisterPageStepDefinition.openApplication()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Profile button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.LoginAndRegisterPageStepDefinition.clickProfilebtn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"log in\" buttonLink",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.LoginAndRegisterPageStepDefinition.clickLoginbtnlink(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of element located by By.xpath: //a[text()\u003d\u0027log in\u0027] (tried for 10 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat Actions.BaseClass.clickElementByLocator(BaseClass.java:29)\r\n\tat Actions.LoginAndRegisterPage.clickLogInButtonLink(LoginAndRegisterPage.java:33)\r\n\tat StepDefinition.LoginAndRegisterPageStepDefinition.clickLoginbtnlink(LoginAndRegisterPageStepDefinition.java:36)\r\n\tat ✽.I click on \"log in\" buttonLink(file:///C:/Users/JJPL-212/eclipse-workspace/New/Cucumber-Tests/src/test/Features/HomePageFunctionality.feature:41)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[text()\u003d\u0027log in\u0027]\"}\n  (Session info: chrome\u003d81.0.4044.129)\n  (Driver info: chromedriver\u003d2.41.578737 (49da6702b16031c40d63e5618de03a32ff6c197e),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027JJPL-212-PC\u0027, ip: \u0027192.168.0.103\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.41.578737 (49da6702b16031..., userDataDir: C:\\Users\\JJPL-212\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:54363}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 81.0.4044.129, webStorageEnabled: true}\nSession ID: 04fe2d0a4c86d2da1958ce878e9b150f\n*** Element info: {Using\u003dxpath, value\u003d//a[text()\u003d\u0027log in\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:205)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:201)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat Actions.BaseClass.clickElementByLocator(BaseClass.java:29)\r\n\tat Actions.LoginAndRegisterPage.clickLogInButtonLink(LoginAndRegisterPage.java:33)\r\n\tat StepDefinition.LoginAndRegisterPageStepDefinition.clickLoginbtnlink(LoginAndRegisterPageStepDefinition.java:36)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:542)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:770)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:464)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I enter email address \"dhirajshuklalk@gmail.com\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.LoginAndRegisterPageStepDefinition.enterEmail(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I enter password \"Intel@1234\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.LoginAndRegisterPageStepDefinition.enterPassword(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on \"Log in\" button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.LoginAndRegisterPageStepDefinition.iClickOnLoginButton(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I hover on \"Men\" on header menu on homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.HomePageStepD.hoverOnHeaderMenuHomepage(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on \"T-Shirts\" on homepage under header menu",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.HomePageStepD.clickLinkUnderMenuHomepage(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on First Product on PLP page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.HomePageStepD.clickOnProductOnPlpPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I switch to New Window",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.HomePageStepD.switchToNewWindow()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on WishlistNow on PDP",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.HomePageStepD.clickOnWishlist()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I switch back to Parent Window",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.HomePageStepD.switchToParentWindow()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Add to cart",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeTests"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open the application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.LoginAndRegisterPageStepDefinition.openApplication()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Profile button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.LoginAndRegisterPageStepDefinition.clickProfilebtn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"log in\" buttonLink",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.LoginAndRegisterPageStepDefinition.clickLoginbtnlink(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of element located by By.xpath: //a[text()\u003d\u0027log in\u0027] (tried for 10 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat Actions.BaseClass.clickElementByLocator(BaseClass.java:29)\r\n\tat Actions.LoginAndRegisterPage.clickLogInButtonLink(LoginAndRegisterPage.java:33)\r\n\tat StepDefinition.LoginAndRegisterPageStepDefinition.clickLoginbtnlink(LoginAndRegisterPageStepDefinition.java:36)\r\n\tat ✽.I click on \"log in\" buttonLink(file:///C:/Users/JJPL-212/eclipse-workspace/New/Cucumber-Tests/src/test/Features/HomePageFunctionality.feature:41)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[text()\u003d\u0027log in\u0027]\"}\n  (Session info: chrome\u003d81.0.4044.129)\n  (Driver info: chromedriver\u003d2.41.578737 (49da6702b16031c40d63e5618de03a32ff6c197e),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027JJPL-212-PC\u0027, ip: \u0027192.168.0.103\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.41.578737 (49da6702b16031..., userDataDir: C:\\Users\\JJPL-212\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:54415}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 81.0.4044.129, webStorageEnabled: true}\nSession ID: c7523db1bfdcaaaa2b7705b23602bce6\n*** Element info: {Using\u003dxpath, value\u003d//a[text()\u003d\u0027log in\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:205)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:201)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat Actions.BaseClass.clickElementByLocator(BaseClass.java:29)\r\n\tat Actions.LoginAndRegisterPage.clickLogInButtonLink(LoginAndRegisterPage.java:33)\r\n\tat StepDefinition.LoginAndRegisterPageStepDefinition.clickLoginbtnlink(LoginAndRegisterPageStepDefinition.java:36)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:542)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:770)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:464)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I enter email address \"dhirajshuklalk@gmail.com\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.LoginAndRegisterPageStepDefinition.enterEmail(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I enter password \"Intel@1234\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.LoginAndRegisterPageStepDefinition.enterPassword(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on \"Log in\" button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.LoginAndRegisterPageStepDefinition.iClickOnLoginButton(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I hover on \"Women\" on header menu on homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.HomePageStepD.hoverOnHeaderMenuHomepage(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on \"Ethnic Dresses\" on homepage under header menu",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.HomePageStepD.clickLinkUnderMenuHomepage(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on First Product on PLP page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.HomePageStepD.clickOnProductOnPlpPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I switch to New Window",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.HomePageStepD.switchToNewWindow()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on WishlistNow on PDP",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.HomePageStepD.clickOnWishlist()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I switch back to Parent Window",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.HomePageStepD.switchToParentWindow()"
});
formatter.result({
  "status": "skipped"
});
