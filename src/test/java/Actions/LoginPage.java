package Actions;

import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import Resources.DriverInitialization;

public class LoginPage extends BaseClass {

	public LoginPage(WebDriver driver) {
		super(driver);
	}

	public void openApplication() throws InterruptedException {
		getUrl(DriverInitialization.config.getProperty("URL"));
		Thread.sleep(3000);
	}

	public void clickProfile() {
		clickElementByLocator(By.xpath("//div[@class='desktop-userIconsContainer']"));
	}

	public void clickSignup(String button) {
		clickElementByLocator(By.xpath("//a[text()='"+button+"']"));
	}

	public void emailAddress(String email) {
		enterText(By.xpath("//input[@name='email']"), email);
	}

	public void enterPassword(String password) {
		enterText(By.xpath("//input[@name='password']"), password);
	}

	public void enterMobile(String mobile) throws InterruptedException {
		enterText(By.xpath("//input[@name='mobile']"), mobile);
		Thread.sleep(5000);
	}

	public void selectGender(String text) {
		List<WebElement> element = driver.findElements(By.xpath("//label[@class='register-gender-label']"));
		for (int i = 0; i < element.size(); i++) {
			WebElement gender = element.get(i);
			String gendertext = element.get(i).getText();
			if (gendertext.equalsIgnoreCase(text)) {

				clickElement(gender);
			}

			else {
				System.out.println("gender not found");
			}

		}
	}

	public void clickSubmit() {
		clickElementByLocator(By.xpath("//button[@class='register-register-button']"));
	}
	
	public void clickButton(String button) throws InterruptedException {
		clickElementByLocator(By.xpath("//button[text()='"+button+"']"));
		Thread.sleep(5000);
	}
	
	public void verifyLoginEmail(String text) {
		String email = getText(By.xpath("//div[@class='desktop-infoEmail']"));
	Assert.assertEquals(text, email);
	}
}
