$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/Features/HomePageFunctionality.feature");
formatter.feature({
  "name": "Testing HomePage Functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify Header Menu",
  "description": "",
  "keyword": "Scenario"
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
  "name": "I click on \"log in\" buttonLink",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.LoginPageStepDefinition.clickSignpbtn(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter email address \"dhirajshuklalk@gmail.com\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.LoginPageStepDefinition.enterEmail(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter password \"Intel@1234\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.LoginPageStepDefinition.enterPassword(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"Log in\" button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.LoginPageStepDefinition.iClickOnButton(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify header menu \"Men\" on homepage",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.HomePageStepD.iVerifyHeaderMenu(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify header menu \"Women\" on homepage",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.HomePageStepD.iVerifyHeaderMenu(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify header menu \"Kid\" on homepage",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.HomePageStepD.iVerifyHeaderMenu(java.lang.String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat org.junit.Assert.assertTrue(Assert.java:53)\r\n\tat Actions.HomePage.verifyHeaderMenu(HomePage.java:16)\r\n\tat StepDefinition.HomePageStepD.iVerifyHeaderMenu(HomePageStepD.java:14)\r\n\tat ✽.Verify header menu \"Kid\" on homepage(file:///C:/Users/JJPL-212/eclipse-workspace/New/Cucumber-Tests/src/test/Features/HomePageFunctionality.feature:13)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Verify header menu \"Home \u0026 Living\" on homepage",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.HomePageStepD.iVerifyHeaderMenu(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Verify header menu \"Discover\" on homepage",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.HomePageStepD.iVerifyHeaderMenu(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});