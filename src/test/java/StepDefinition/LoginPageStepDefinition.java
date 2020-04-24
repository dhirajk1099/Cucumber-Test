package StepDefinition;

import java.io.IOException;
import Actions.LoginPage;
import Resources.DriverInitialization;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;

public class LoginPageStepDefinition extends DriverInitialization {

	LoginPage lp = new LoginPage(driver);

	@Given("I open the application")
	public void openApplication() throws IOException, InterruptedException {
		lp.openApplication();
	}

//	@Then("^I enter username \"([^\"]*)\"$")
//	public void enterUsername(String username) {
//		lp.enterUsername(username);
//	}
//	
	@Then("I click on Profile button")
	public void clickProfilebtn() {
		lp.clickProfile();
	}
	
	@Then("^I click on \"([^\"]*)\" buttonLink$")
	public void clickSignpbtn(String button) {
		lp.clickSignup(button);
	}
	
	@Then("I enter email address \"([^\"]*)\"$")
	public void enterEmail(String email) {
		lp.emailAddress(email);
	}
	@Then("I enter password \"([^\"]*)\"$")
	public void enterPassword(String password) {
		lp.enterPassword(password);
	}
	
	@Then("I enter mobile no \"([^\"]*)\"$")
	public void enterMobileNo(String mobileno) throws InterruptedException {
		  lp.enterMobile(mobileno);
	}
	
	@Then("I select the gender")
	public void selectGender() {
		lp.selectGender("male");
		
	}
	@Then("I click on submit button")
	public void clcikSubmitBtn() {
		lp.clickSubmit();
	}
	
	@And("^I click on \"([^\"]*)\" button$")
	public void iClickOnButton(String button) throws InterruptedException {
		lp.clickButton(button);
	}
	
	@And("^I verify \"([^\"]*)\" text on profile section$")
	public void iVerifyLoggedInUser(String email) {
		lp.verifyLoginEmail(email);
	}
}
