package Actions;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import Resources.DriverInitialization;

public class LoginPage extends BaseClass{

	public LoginPage(WebDriver driver) {
		super(driver);
	}

	public void openApplication() {
		driver.get(DriverInitialization.config.getProperty("URL"));
	}

	public void enterUsername(String username) {
		clickElement(By.xpath("//a[@id='nav-link-accountList']"));
		enterText(By.xpath("//input[@name='email']"), username);
		clickElement(By.xpath("//input[@type='submit']"));
	}

	public void enterPassword(String password) {
		enterText(By.xpath("//input[@name='password']"), password);
	}

	public void clickSubmit() {
		clickElement(By.xpath("//input[@id='signInSubmit']"));
	}
}
