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
	
	@Then("^I click on \"([^\"]*)\" button$")
	public void clickLoginBtn(String button) {
		lp.clickLoginBtn(button);
	}
	@Then("^I click on \"([^\"]*)\" buttonLink$")
	public void clickLoginbtnlink(String button) {
		lp.clickLogInButtonLink(button);
	}
	
	@Then("I enter phoneNo \"([^\"]*)\"$")
	public void phone(String phone) {
		lp.phoneNo(phone);
	}
	@Then("I enter password \"([^\"]*)\"$")
	public void enterPassword(String password) {
		lp.enterPassword(password);
	}
	
	@Then("I click on continue button")
	public void clickContinueBtn() throws InterruptedException {
		lp.clickContinueButton();
	}
	
	@Then("I enter mobile no \"([^\"]*)\"$")
	public void enterMobileNo(String mobileno) throws InterruptedException {
		  lp.enterMobile(mobileno);
	}
	
	@Then("I select the gender")
	public void selectGender() {
		lp.selectGender("male");
		
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
