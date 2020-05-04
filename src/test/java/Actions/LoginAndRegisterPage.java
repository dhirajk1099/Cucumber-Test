package Actions;

import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;

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

	public void clickLoginBtn(String button) {
		clickElementByLocator(By.xpath("//button[text()='" + button + "']"));
	}

	public void clickLogInButtonLink(String button) {
		clickElementByLocator(By.xpath("//a[text()='" + button + "']"));
	}

	public void phoneNo(String phone) {
		enterText(By.xpath("//input[@class='form-control mobileNumberInput']"), phone);
	}

	public void enterPassword(String password) {
		try {
			  enterText(By.xpath("//span[text()=' Password']/preceding-sibling::input"), password);		
		}
		catch(Exception e) {
			
		}
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

	public void clickContinueButton() throws InterruptedException {
		clickElementByLocator(By.xpath("//div[text()='CONTINUE']"));
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