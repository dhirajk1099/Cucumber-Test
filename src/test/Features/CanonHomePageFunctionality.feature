Feature: Search product Feature

  Background: Repeated Steps
    Given I open my application
    Then I click on PromoBtn popup
    Then I click on MyAccountLogo button
    Then I click on the "Login" buttonLink
    Then I enter emailAddress "dhiraj.shukla@adapty.com"
    Then I enter user password "Intel@1234"
    Then I click on Login button

  #Then I verify user is loggedIn
  Scenario Outline: Verfiy search product and add to cart functionality
    Given I am on homepage
    Then I enter the product Sku in searchBox "<Sku>"
    Then I click on suggested "<SuggestedTitel>" title
    Then I verify the "<Titel>" of the Product on PDP page
    Then I verify the status on PDP page
    And Add the product in to cart

    Examples: 
      | Sku      | SuggestedTitel         | Titel                  |
      | 1073C001 | PowerShot SX620 HS Red | PowerShot SX620 HS Red |
      | 3075C002 | EOS R Body             | EOS R Body             |

  Scenario Outline: Verfiy add to cart functionality for Hardwar+Carepak product
    Given I am on homepage
    Then I enter the product Sku in searchBox "<Sku>"
    Then I click on suggested "<SuggestedTitel>" title
    Then I verify the "<Titel>" of the Product on PDP page
    Then I verify the status on PDP page
    And Add the product in to cart

  Scenario Outline: Verfiy add to cart functionality for Hardwar+ Associated Carepak product
    Given I am on homepage
    Then I enter the product Sku in searchBox "<Sku>"
    Then I click on suggested "<SuggestedTitel>" title
    Then I verify the "<Titel>" of the Product on PDP page
    Then I verify the status on PDP page
    And Add the product in to cart

  Scenario Outline: Verfiy add to cart functionality for only Carepak product
    Given I am on homepage
    Then I click on the 
    Then I click on suggested "<SuggestedTitel>" title
    Then I verify the "<Titel>" of the Product on PDP page
    Then I verify the status on PDP page
    And Add the product in to cart
