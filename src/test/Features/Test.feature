Feature: Cucumber Automation

  Scenario Outline: First Scenario
    Given I open the application
    Then I enter username "<username>"
    And I enter password <password>
    And I click on submit button

    Examples: 
      | username   | password   |
      | 9004962149 | ab |
