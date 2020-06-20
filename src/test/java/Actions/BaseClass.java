package Actions;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Set;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.StaleElementReferenceException;
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
		wait = new WebDriverWait(driver, 60);
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
		WebElement target = driver.findElement(locator);
		action.moveToElement(target).build().perform();
	}

	public void switchNewWindow() throws InterruptedException {
		Thread.sleep(2000);
		String parentWindow = driver.getWindowHandle();
		Set<String> win = driver.getWindowHandles();
		for (String s : win) {
			if (!s.equals(parentWindow)) {
				driver.switchTo().window(s);
			}
		}
	}

	public void switchToParentWindow() {
		String parentWindow = driver.getWindowHandle();
		Set<String> win = driver.getWindowHandles();
		driver.close();
		for (String s : win) {
			if (!s.equals(parentWindow)) {
				driver.switchTo().window(s);

			}

		}
	}

	public String getTitelOfPage() {
		return driver.getTitle();
	}

	public void safeJavaScriptClick(WebElement element) throws Exception {
		try {
			if (element.isEnabled() && element.isDisplayed()) {
				System.out.println("Clicking on element with using java script click");

				((JavascriptExecutor) driver).executeScript("arguments[0].click();", element);
			} else {
				System.out.println("Unable to click on element");
			}
		} catch (StaleElementReferenceException e) {
			System.out.println("Element is not attached to the page document " + e.getStackTrace());
		} catch (NoSuchElementException e) {
			System.out.println("Element was not found in DOM " + e.getStackTrace());
		} catch (Exception e) {
			System.out.println("Unable to click on element " + e.getStackTrace());
		}
	}



}
