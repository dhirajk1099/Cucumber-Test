package StepDefinition;

import Actions.HomePage;
import Resources.DriverInitialization;
import io.cucumber.java.en.And;

public class HomePageStepD  extends DriverInitialization {

	HomePage hmp = new HomePage(driver);
	

	@And("^Verify header menu \"([^\"]*)\" on homepage$")
		public void iVerifyHeaderMenu(String menuData) {
		hmp.verifyHeaderMenu(menuData);
	}
}
