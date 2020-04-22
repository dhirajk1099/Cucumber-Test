Feature: Testing HomePage Functionality

Scenario: Verify Header Menu

    Given I open the application
    Then I click on Profile button
    Then I click on "log in" buttonLink
 		Then I enter email address "dhirajshuklalk@gmail.com"
 		Then I enter password "Intel@1234"
 		And I click on "Log in" button
 		And Verify header menu "Men" on homepage
 	  And Verify header menu "Women" on homepage
 	  And Verify header menu "Kids" on homepage
 	  And Verify header menu "Home & Living" on homepage
    And Verify header menu "Discover" on homepage