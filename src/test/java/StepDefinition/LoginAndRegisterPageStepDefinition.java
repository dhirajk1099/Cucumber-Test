package StepDefinition;

import java.io.IOException;
import Actions.LoginAndRegisterPage;
import Resources.DriverInitialization;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;

public class LoginAndRegisterPageStepDefinition extends DriverInitialization {

	LoginAndRegisterPage lp = new LoginAndRegisterPage(driver);

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
	
	@Then("^I click on Sign up button")
	public void clickSignpbtn() {
		lp.clickSignup();
	}
	
	@Then("^I click on \"([^\"]*)\" buttonLink$")
	public void clickLoginbtnlink(String button) {
		lp.clickLogInButtonLink(button);
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
	
	
	@And("^I click on \"([^\"]*)\" button$")
	public void iClickOnLoginButton(String button) throws InterruptedException {
		lp.clickButton(button);
	}
	
	@And("^I verify \"([^\"]*)\" text on profile section$")
	public void iVerifyLoggedInUser(String email) {
		lp.verifyLoginEmail(email);
	}
	
	@And("I click on register button")
	public void clickRegisterBtn() {
		lp.clickRegister();
		
	}
	
	@And("Verify user already exist")
	public void verifyUserIsRegistered() {
		lp.verifyUserExist();
	}
}
