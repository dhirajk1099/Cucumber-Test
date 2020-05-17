Feature: Login Feature

  Scenario Outline: Verfiy Login Funvtionality
    Given I open my application
    Then I click on PromoBtn popup
    Then I click on MyAccountLogo button
    Then I click on the "Login" buttonLink
    Then I enter emailAddress "<EamilId>"
    Then I enter user password "<Password>"
    Then I click on Login button
    Then I verify user is loggedIn

    Examples: 
      | EamilId                  | Password   |
      | dhiraj.shukla@adapty.com | Intel@1234 |
      
