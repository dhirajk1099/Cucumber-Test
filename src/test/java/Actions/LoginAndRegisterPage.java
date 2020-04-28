package Actions;

import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import Resources.DriverInitialization;

public class LoginAndRegisterPage extends BaseClass {

	public LoginAndRegisterPage(WebDriver driver) {
		super(driver);
	}

	public void openApplication() throws InterruptedException {
		getUrl(DriverInitialization.config.getProperty("URL"));
		Thread.sleep(3000);
		System.out.println("Dhiraj");
	}

	public void clickProfile() {
		clickElementByLocator(By.xpath("//div[@class='desktop-userIconsContainer']"));
	}

	public void clickSignup() {
		clickElementByLocator(By.xpath("//a[@data-track='signup']"));
	}

	public void clickLogInButtonLink(String button) {
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

	public boolean selectGender(String text) {
		List<WebElement> element = driver.findElements(By.xpath("//label[@class='register-gender-label']"));
		for (int i = 0; i < element.size(); i++) {
			WebElement gender = element.get(i);
			String gendertext = element.get(i).getText();
			if (gendertext.equalsIgnoreCase(text)) {

				clickElement(gender);
				return true;

			}

		}

		return false;
	}


	public void clickButton(String button) throws InterruptedException {
		clickElementByLocator(By.xpath("//button[text()='" + button + "']"));
		Thread.sleep(5000);
	}

	public void verifyLoginEmail(String text) {
		String email = getText(By.xpath("//div[@class='desktop-infoEmail']"));
		Assert.assertEquals(text, email);
	}
	
	public void clickRegister() {
		clickElementByLocator(By.xpath("//button[@class='register-register-button']"));
		
}
	public void verifyUserExist() {
		clickElementByLocator(By.xpath("//div[@class='desktop-userIconsContainer']"));
		boolean bool = isElementPresent(By.xpath("//a[text()='Sign up']"));
		Assert.assertTrue(bool);
		
		
	}
}