
Feature: Verify Login Page functionality


  Scenario: Verify login functionlity
    Given I open the application
    Then I click on Profile button
    Then I click on "log in" buttonLink
 		Then I enter email address "dhirajshuklalk@gmail.com"
 		Then I enter password "Intel@1234"
 		And I click on "Log in" button
 		Then I click on Profile button
 		And I verify "dhirajshuklalk@gmail.com" text on profile section
 		