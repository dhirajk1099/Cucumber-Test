$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/Features/CanonHomePageFunctionality.feature");
formatter.feature({
  "name": "Search product Feature",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verfiy search product and add to cart functionality",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "name": "I enter the product Sku in searchBox \"\u003cSku\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "I click on suggested \"\u003cSuggestedTitel\u003e\" title",
  "keyword": "Then "
});
formatter.step({
  "name": "I verify the \"\u003cTitel\u003e\" of the Product on PDP page",
  "keyword": "Then "
});
formatter.step({
  "name": "I verify the status on PDP page",
  "keyword": "Then "
});
formatter.step({
  "name": "Add the product in to cart",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Sku",
        "SuggestedTitel",
        "Titel"
      ]
    },
    {
      "cells": [
        "1073C001",
        "PowerShot SX620 HS Red",
        "PowerShot SX620 HS Red"
      ]
    },
    {
      "cells": [
        "3075C002",
        "EOS R Body",
        "EOS R Body"
      ]
    }
  ]
});
formatter.background({
  "name": "Repeated Steps",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open my application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.CanonHomePageStepDef.iOpenapplication()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on PromoBtn popup",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.CanonHomePageStepDef.clickPromoBtn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on MyAccountLogo button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.CanonHomePageStepDef.clickOnMyaccountLogo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the \"Login\" buttonLink",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.CanonHomePageStepDef.clickLoginLinkOfCanonHomePage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter emailAddress \"dhiraj.shukla@adapty.com\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.CanonHomePageStepDef.i_enter_emailAddress(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter user password \"Intel@1234\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.CanonHomePageStepDef.i_enter_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Login button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.CanonHomePageStepDef.i_click_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verfiy search product and add to cart functionality",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.CanonHomePageStepDef.verifyUserIsOnHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the product Sku in searchBox \"1073C001\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.CanonHomePageStepDef.searchProduct(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on suggested \"PowerShot SX620 HS Red\" title",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.CanonHomePageStepDef.clickSuggestedTitle(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"PowerShot SX620 HS Red\" of the Product on PDP page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.CanonHomePageStepDef.verifyProductOnPdp(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the status on PDP page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.CanonHomePageStepDef.verifyStockStatus()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Add the product in to cart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.CanonHomePageStepDef.addProductToCart()"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of element located by By.xpath: //span[text()\u003d\u0027Proceed to cart\u0027] (tried for 60 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat Actions.BaseClass.clickElementByLocator(BaseClass.java:40)\r\n\tat Actions.CanonHomePage.addProductInCart(CanonHomePage.java:94)\r\n\tat StepDefinition.CanonHomePageStepDef.addProductToCart(CanonHomePageStepDef.java:75)\r\n\tat ✽.Add the product in to cart(file:///C:/Users/JJPL-212/eclipse-workspace/New/Cucumber-Tests/src/test/Features/CanonHomePageFunctionality.feature:19)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[text()\u003d\u0027Proceed to cart\u0027]\"}\n  (Session info: chrome\u003d83.0.4103.97)\n  (Driver info: chromedriver\u003d2.41.578737 (49da6702b16031c40d63e5618de03a32ff6c197e),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027JJPL-212-PC\u0027, ip: \u0027192.168.0.100\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.41.578737 (49da6702b16031..., userDataDir: C:\\Users\\JJPL-212\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:61986}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 83.0.4103.97, webStorageEnabled: true}\nSession ID: 3e90f38c6d84010129250bd20198a1c1\n*** Element info: {Using\u003dxpath, value\u003d//span[text()\u003d\u0027Proceed to cart\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:205)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:201)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat Actions.BaseClass.clickElementByLocator(BaseClass.java:40)\r\n\tat Actions.CanonHomePage.addProductInCart(CanonHomePage.java:94)\r\n\tat StepDefinition.CanonHomePageStepDef.addProductToCart(CanonHomePageStepDef.java:75)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:542)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:770)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:464)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Repeated Steps",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I open my application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.CanonHomePageStepDef.iOpenapplication()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on PromoBtn popup",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.CanonHomePageStepDef.clickPromoBtn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on MyAccountLogo button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.CanonHomePageStepDef.clickOnMyaccountLogo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on the \"Login\" buttonLink",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.CanonHomePageStepDef.clickLoginLinkOfCanonHomePage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter emailAddress \"dhiraj.shukla@adapty.com\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.CanonHomePageStepDef.i_enter_emailAddress(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter user password \"Intel@1234\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.CanonHomePageStepDef.i_enter_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on Login button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.CanonHomePageStepDef.i_click_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verfiy search product and add to cart functionality",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.CanonHomePageStepDef.verifyUserIsOnHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter the product Sku in searchBox \"3075C002\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.CanonHomePageStepDef.searchProduct(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on suggested \"EOS R Body\" title",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.CanonHomePageStepDef.clickSuggestedTitle(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the \"EOS R Body\" of the Product on PDP page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.CanonHomePageStepDef.verifyProductOnPdp(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify the status on PDP page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.CanonHomePageStepDef.verifyStockStatus()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Add the product in to cart",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.CanonHomePageStepDef.addProductToCart()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});