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
  "status": "passed"
});
});