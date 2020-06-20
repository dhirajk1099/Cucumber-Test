package StepDefinition;

import Actions.HomePage;
import Resources.DriverInitialization;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;

public class HomePageStepD  extends DriverInitialization {

	HomePage hmp = new HomePage(driver);
	

	@And("^Verify header menu \"([^\"]*)\" on homepage$")
		public void iVerifyHeaderMenu(String menuData) {
		hmp.verifyHeaderMenu(menuData);
	}
	
	@Then("^I verify \"([^\"]*)\" option under Profile dropdown$")
	    public void iVerifyOptionsUnderProfile(String optionData) {
		hmp.verifyOptionsUnderProfile(optionData);
		
	}
	
	@And("^I hover on \"([^\"]*)\" on header menu on homepage$")
		public void hoverOnHeaderMenuHomepage(String headerData) {
		hmp.hoverOnHeaderMenuHomePage(headerData);
	}
	
	@Then("^I click on \"([^\"]*)\" on homepage under header menu$")
		public void clickLinkUnderMenuHomepage(String menu) {
		hmp.clickLinkUnderHeaderMenuHomePage(menu);
		
	}
	
	@Then("^I click on First Product on PLP page$")
	    public void clickOnProductOnPlpPage() {
		hmp.clickonProductOnPlpPage();
	}
	
	@Then("^I switch to New Window$")
		public void switchToNewWindow() throws InterruptedException {
		hmp.switchToNewWindow();
		
	}
	
	@Then("^I switch back to Parent Window$")
	public void switchToParentWindow() throws InterruptedException {
	hmp.switchBackToParentWindow();
	
}
	@Then("^I click on WishlistNow on PDP$")
	public void clickOnWishlist() {
		
	}
}
