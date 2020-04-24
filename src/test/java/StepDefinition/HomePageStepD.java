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
}
