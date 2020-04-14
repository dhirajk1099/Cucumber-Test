package StepDefinition;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;

public class LoginPageStepDefinition {

	WebDriver driver = null;

	@Before
	public void beforeScenario() {
		System.setProperty("webdriver.chrome.driver",
				System.getProperty("user.dir") + "" + "/libraries/chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	}
	
	@After
	public void afterScenario() {
		driver.manage().deleteAllCookies();
		driver.close();
		driver.quit();
	}

	@Given("I open the application")
	public void openApplication() {

		driver.get("https://www.amazon.com/");
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
