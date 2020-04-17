package StepDefinition;

import java.io.IOException;
import org.openqa.selenium.By;

import Actions.LoginPage;
import Resources.DriverInitialization;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;

public class LoginPageStepDefinition extends DriverInitialization {

	LoginPage lp = new LoginPage(driver);

	@Given("I open the application")
	public void openApplication() throws IOException {
		lp.openApplication();
	}

	@Then("^I enter username \"([^\"]*)\"$")
	public void enterUsername(String username) {
		lp.enterUsername(username);
	}

	@And("^I enter password ([^\"]*)$")
	public void enterPassword(String password) {
		lp.enterPassword(password);
	}

	@Then("I click on submit button")
	public void clcikSubmitBtn() {
		lp.clickSubmit();
	}
}
