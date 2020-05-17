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
    Then I verify the "<stock>" status on PDP page

    Examples: 
      | Sku      | SuggestedTitel         | Titel                  | stock    |
      | 1073C001 | PowerShot SX620 HS Red | PowerShot SX620 HS Red | In stock |
      | 3075C002 | EOS R Body             | EOS R Body             | In stock |
