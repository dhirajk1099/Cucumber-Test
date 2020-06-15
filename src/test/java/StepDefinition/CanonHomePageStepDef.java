package StepDefinition;

import Actions.CanonHomePage;
import Resources.DriverInitialization;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;

public class CanonHomePageStepDef extends DriverInitialization{
	
	CanonHomePage chp = new CanonHomePage(driver);
	
	@Given("I open my application")
	public void iOpenapplication() throws InterruptedException{
		chp.openUrl();
		
	}
	
	@Then("I click on PromoBtn popup")
	public void clickPromoBtn() throws InterruptedException {
		chp.clickPromoBtn();
	}
	
	@Then("I click on MyAccountLogo button")
    public void clickOnMyaccountLogo() {
		chp.clickMyAccountLogo();
	}
	
	@Then("^I click on the \"([^\"]*)\" buttonLink$")
	public void clickLoginLinkOfCanonHomePage(String text) {
		chp.clickCanonLoginLink(text);
	}
	@Then("^I enter emailAddress \"([^\"]*)\"$")
	public void i_enter_emailAddress(String text) {
		chp.enterEmailAddress(text);
	}

	@Then("^I enter user password \"([^\"]*)\"$")
	public void i_enter_password(String password) {
		chp.enterPassword(password);
	}

	@Then("^I click on Login button$")
	public void i_click_on_Login_button() {
		chp.clickLoginButtonOfCanon();
		
	}
	
	@Given("^I am on homepage$")
	public void verifyUserIsOnHomePage() {
		chp.verifyUserOnHomePage();
	}
	
	@Then("^I enter the product Sku in searchBox \"([^\"]*)\"$")
	public void searchProduct(String sku) throws Exception {
		chp.searchProductSku(sku);	
	}
	
	@Then("^I click on suggested \"([^\"]*)\" title$")
	public void clickSuggestedTitle(String title) {
		chp.clickOnSuggestionList(title);
		
	}
	@Then("^I verify the \"([^\"]*)\" of the Product on PDP page$")    
	public void verifyProductOnPdp(String productName) {
		  chp.verifySkuOnPdpPage(productName);
	}
	
	@Then("^I verify the status on PDP page$")
	public void verifyStockStatus() {
		chp.verifyStock();
	}
	
	@Then("^Add the product in to cart$")
	public void addProductToCart() {
		chp.addProductInCart();
	}
	
}

