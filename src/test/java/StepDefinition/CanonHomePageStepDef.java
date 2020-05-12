package StepDefinition;

import Actions.CanonHomePage;
import Resources.DriverInitialization;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;

public class CanonHomePageStepDef extends DriverInitialization{
	
	CanonHomePage chp = new CanonHomePage(driver);
	
	@Given("I open my application")
	public void iOpenapplication(){
		chp.openUrl();
	}
	
	@Then("I click on PromoBtn popup")
	public void clickPromoBtn() {
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
	public void i_enter_emailAddress() {
	}

	@Then("^I enter user password \"([^\"]*)\"$")
	public void i_enter_password() {
	}

	@Then("^I click on Login button$")
	public void i_click_on_Login_button() {
	}
	
}
