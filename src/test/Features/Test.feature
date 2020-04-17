Feature: Cucumber Automation

  Scenario Outline: First Scenario
    Given I open the application
    Then I enter username "<username>"
    And I enter password <password>
    And I click on submit button

    Examples: 
      | username | password |
      | ab       | ab       |
      | abc      | ab       |
      | abcd     | ab       |
      | abcdef   | ab       |
      | abdd     | ab       |
      | abdfd    | ab       |
      | abdf     | ab       |
