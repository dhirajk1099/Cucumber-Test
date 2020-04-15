Feature: Cucumber Automation

  Scenario: First Scenario
    Given I open the application
    Then I enter username "ab"
    And I enter password ba
    And I click on submit button

  #Scenario Outline: First Scenario
    #Given I open the application
    #Then I enter username "<Username>"
    #And I enter password <Password>
    #And I click on submit button
#
    #Examples: 
      #| Username | Password |
      #| ab       | ba       |
      #| ab       | ba       |
      #| ab       | ba       |
      #| ab       | ba       |
      #| ab       | ba       |
