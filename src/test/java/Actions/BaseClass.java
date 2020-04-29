package Actions;

import java.util.List;
import java.util.Set;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class BaseClass {

	public WebDriver driver = null;
	public WebDriverWait wait = null;
	public Actions action = null;

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
		String locatortext = driver.findElement(locator).getText();
		return locatortext;
	}

	public boolean isElementPresent(By locator) {
		boolean bol = true;
		try {
			driver.findElement(locator);
		} catch (Exception e) {
			bol = false;
		}
		return bol;

	}

	public boolean isElementPresentInList(By locator, String text) {

		List<WebElement> element = driver.findElements(locator);
		for (int i = 0; i < element.size(); i++) {
			if (element.get(i).getText().trim().equals(text)) {

				return true;
			}

		}
		return false;
	}
	
	public void hoverOnElement(By locator) {
		action = new Actions(driver);
		WebElement target=driver.findElement(locator);
		action.moveToElement(target).build().perform();
	}

	public void switchNewWindow() throws InterruptedException {
		Thread.sleep(2000);
		String parentWindow = driver.getWindowHandle();
		Set<String> win = driver.getWindowHandles();
		for(String s:win) {
			if(!s.equals(parentWindow)) {
				driver.switchTo().window(s);
			}
		}
	}
	
	public void switchToParentWindow() {
		String parentWindow = driver.getWindowHandle();
		Set<String> win = driver.getWindowHandles();
		driver.close();
		for(String s:win) {
			if(!s.equals(parentWindow)) {
				driver.switchTo().window(s);
				
			}
			
		}
	}
}
