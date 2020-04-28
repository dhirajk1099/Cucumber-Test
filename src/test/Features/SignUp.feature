
Feature: Verify Sign Up Functionality

  Scenario Outline: Sign Up
    Given I open the application
    Then I click on Profile button
    Then I click on Sign up button
    Then I enter email address "<email>"
    Then I enter password "<password>"
    Then I enter mobile no "<mobileNo>"
    Then I select the gender
    And I click on register button
    And Verify user already exist

    Examples: 
      | email                    | password  | mobileNo   |
      | dhirajshuklalk@gmail.com | aB@123456 | 9004962149 |
 