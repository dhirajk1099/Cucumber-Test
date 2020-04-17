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
		driver.findElement(By.xpath("//a[@id='nav-link-accountList']")).click();
		driver.findElement(By.xpath("//input[@name='email']")).sendKeys(username);
		driver.findElement(By.xpath("//input[@type='submit']")).click();
	}

	public void enterPassword(String password) {
		driver.findElement(By.xpath("//input[@name='password']")).sendKeys(password);
	}

	public void clickSubmit() {
		driver.findElement(By.xpath("//input[@id='signInSubmit']")).click();
	}
}
