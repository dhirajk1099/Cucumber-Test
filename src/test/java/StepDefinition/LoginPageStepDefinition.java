package StepDefinition;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import Resources.DriverInitialization;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;

public class LoginPageStepDefinition extends DriverInitialization {

	@Given("I open the application")
	public void openApplication() throws IOException {

		driver.get(config.getProperty("URL"));
	}

	@Then("^I enter username \"([^\"]*)\"$")
	public void enterUsername(String username) {

		driver.findElement(By.xpath("//a[@id='nav-link-accountList']")).click();
		driver.findElement(By.xpath("//input[@name='email']")).sendKeys(username);
		driver.findElement(By.xpath("//input[@type='submit']")).click();
	}

	@And("^I enter password ([^\"]*)$")
	public void enterPassword(String password) {

		driver.findElement(By.xpath("//input[@name='password']")).sendKeys(password);

	}

	@Then("I click on submit button")
	public void clcikSubmitBtn() {
		driver.findElement(By.xpath("//input[@id='signInSubmit']")).click();

	}
}
