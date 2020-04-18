package Actions;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class BaseClass {

	WebDriver driver = null;
    WebDriverWait wait = new WebDriverWait(driver,10);
	public BaseClass(WebDriver driver) {
		this.driver = driver;
	}
	
	
	public void clickElement(By locator) {
		wait.until(ExpectedConditions.visibilityOfElementLocated(locator));
		driver.findElement(locator).click();
	}
	
	public void enterText(By locator, String text) {
		driver.findElement(locator).sendKeys(text);
	}
	
}
