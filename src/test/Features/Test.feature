Feature: Cucumber Automation

  Scenario Outline: Sign Up
    Given I open the application
    Then I click on Profile button
    Then I click on Signup button
    Then I enter email address <email>
    Then I enter in choose password <password>
    Then I enter mobile no <mobileNo>
    Then I select the gender
    And I click on submit button

    Examples: 
      | email                    | password  | mobileNo   |
      | dhirajshuklalk@gmail.com | ab@123456 | 9004962149 |
 