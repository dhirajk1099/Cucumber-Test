package StepDefinition;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;

public class LoginPageStepDefinition {

	WebDriver driver = null;
@Given("I open the application")
public void openApplication() {
	
	
	System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir")+""+"/libraries/chromedriver.exe");
	driver = new ChromeDriver();
	driver.manage().window().maximize();
	driver.get("https://www.myntra.com/");
}
	
@Then("I enter username")
public void enterUsername() {
	System.out.println("Enter username");
}

@And("I enter password")
public void enterPassword() {
	System.out.println("Enter password");
}

@Then("I click on submit button")
public void clcikSubmitBtn() {
	System.out.println("Click submit button");
	driver.close();
	driver.quit();
	
}
}
