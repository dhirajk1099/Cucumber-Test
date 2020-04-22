package Actions;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class BaseClass {

	public WebDriver driver = null;
	public WebDriverWait wait = null;

	public BaseClass(WebDriver driver) {
		this.driver = driver;
		wait = new WebDriverWait(driver, 10);
	}

	public void getUrl(String Url) {
		driver.get(Url);
	}

	public void clickElementByLocator(By locator) {
		wait.until(ExpectedConditions.visibilityOfElementLocated(locator));
		driver.findElement(locator).click();
	}

	public void clickElement(WebElement element) {
		wait.until(ExpectedConditions.visibilityOf(element));
		element.click();
	}
	public void enterText(By locator, String text) {
		driver.findElement(locator).sendKeys(text);
	}
    
	public String getText(By locator) {
		String locatortext= driver.findElement(locator).getText();
		return locatortext;
	}
	
	public boolean isElementPresent(By locator) {
		boolean bol = true;
		try {
		driver.findElement(locator);
		} catch(Exception e) {
			bol = false;
		}
		return bol;
			
	}
		
	
}
