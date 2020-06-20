$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/Features/CanonHomePageFunctionality.feature");
formatter.feature({
  "name": "Search product Feature",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verfiy heroImage functionality on Homepage",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "name": "I verify the all \"\u003cheroImagesText\u003e\" on Homepage",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "heroImagesText"
      ]
    },
    {
      "cells": [
        "CANON"
      ]
    },
    {
      "cells": [
        "BECOME A CANON"
      ]
    },
    {
      "cells": [
        "EXPERIENCE"
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
  "name": "Verfiy heroImage functionality on Homepage",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
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
  "name": "I verify the all \"CANON\" on Homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.CanonHomePageStepDef.verifyheroImae(java.lang.String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003cCANON[]\u003e but was:\u003cCANON[ SEE\nIMPOSSIBLE]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat Actions.CanonHomePage.verifyHeroImagesOnHomePage(CanonHomePage.java:101)\r\n\tat StepDefinition.CanonHomePageStepDef.verifyheroImae(CanonHomePageStepDef.java:80)\r\n\tat ✽.I verify the all \"CANON\" on Homepage(file:///C:/Users/JJPL-212/eclipse-workspace/New/Cucumber-Tests/src/test/Features/CanonHomePageFunctionality.feature:29)\r\n",
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
  "name": "Verfiy heroImage functionality on Homepage",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
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
  "name": "I verify the all \"BECOME A CANON\" on Homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.CanonHomePageStepDef.verifyheroImae(java.lang.String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[BECOME A CANON]\u003e but was:\u003c[CANON SEE\nIMPOSSIBLE]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat Actions.CanonHomePage.verifyHeroImagesOnHomePage(CanonHomePage.java:101)\r\n\tat StepDefinition.CanonHomePageStepDef.verifyheroImae(CanonHomePageStepDef.java:80)\r\n\tat ✽.I verify the all \"BECOME A CANON\" on Homepage(file:///C:/Users/JJPL-212/eclipse-workspace/New/Cucumber-Tests/src/test/Features/CanonHomePageFunctionality.feature:29)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded1.png", null);
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
  "name": "Verfiy heroImage functionality on Homepage",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
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
  "name": "I verify the all \"EXPERIENCE\" on Homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.CanonHomePageStepDef.verifyheroImae(java.lang.String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[EXPERIENC]E\u003e but was:\u003c[CANON SEE\nIMPOSSIBL]E\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat Actions.CanonHomePage.verifyHeroImagesOnHomePage(CanonHomePage.java:101)\r\n\tat StepDefinition.CanonHomePageStepDef.verifyheroImae(CanonHomePageStepDef.java:80)\r\n\tat ✽.I verify the all \"EXPERIENCE\" on Homepage(file:///C:/Users/JJPL-212/eclipse-workspace/New/Cucumber-Tests/src/test/Features/CanonHomePageFunctionality.feature:29)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded2.png", null);
formatter.after({
  "status": "passed"
});
});