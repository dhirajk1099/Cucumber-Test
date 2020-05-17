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
  "name": "I verify the \"\u003cstock\u003e\" status on PDP page",
  "keyword": "Then "
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
        "Titel",
        "stock"
      ]
    },
    {
      "cells": [
        "1073C001",
        "PowerShot SX620 HS Red",
        "PowerShot SX620 HS Red",
        "In stock"
      ]
    },
    {
      "cells": [
        "3075C002",
        "EOS R Body",
        "EOS R Body",
        "In stock"
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
  "name": "I verify the \"In stock\" status on PDP page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.CanonHomePageStepDef.verifyStockStatus(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
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
  "name": "I verify the \"In stock\" status on PDP page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.CanonHomePageStepDef.verifyStockStatus(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});