Feature: Testing HomePage Functionality


  Background: Repeated Steps
    Given I open the application
    Then I click on Profile button
    Then I click on "login / Signup" buttonLink
    Then I enter phoneNo "9004962149"
    Then I click on continue button
    Then I enter password "Intel@1234"
    And I click on "LOGIN" button
    
  Scenario: Verify Header Menu 
    And Verify header menu "Men" on homepage
    And Verify header menu "Women" on homepage
    And Verify header menu "Kids" on homepage
    And Verify header menu "Home & Living" on homepage
    And Verify header menu "Essentials" on homepage

  Scenario: Verify the links Present on Profile Icon
    Then I click on Profile button
    Then I verify "Hello dhiraj" option under Profile dropdown
    Then I verify "9004962149" option under Profile dropdown
    Then I verify "Orders" option under Profile dropdown	
    Then I verify "Wishlist" option under Profile dropdown
    Then I verify "Gift Cards" option under Profile dropdown
    Then I verify "Contact Us" option under Profile dropdown
    Then I verify "Myntra Insider New" option under Profile dropdown
    Then I verify "Myntra Credit" option under Profile dropdown
    Then I verify "Coupons" option under Profile dropdown
    Then I verify "Saved Cards" option under Profile dropdown
    Then I verify "Saved Addresses" option under Profile dropdown
    Then I verify "Logout" option under Profile dropdown

  @SmokeTests
  Scenario Outline: Add to cart
    Then I hover on "<Header>" on header menu on homepage
    Then I click on "<Menu>" on homepage under header menu
    Then I click on First Product on PLP page
    Then I switch to New Window
    Then I click on WishlistNow on PDP
    Then I switch back to Parent Window

    Examples: 
      | Header        | Menu           |
      | Men           | T-Shirts       |
      | Women         | Ethnic Dresses |
      | Home & Living | Beach Towels   |
