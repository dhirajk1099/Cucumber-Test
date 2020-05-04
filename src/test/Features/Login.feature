
Feature: Verify Login Page functionality

@SmokeTest
  Scenario: Verify login functionlity
    Given I open the application
    Then I click on Profile button
    Then I click on "login / Signup" buttonLink
 		Then I enter phoneNo "9004962149"
 		Then I click on continue button
 		Then I enter password "Intel@1234"
 		And I click on "LOGIN" button
 		Then I click on Profile button
 		And I verify "9004962149" text on profile section
 			