package Actions;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;

public class HomePage extends BaseClass {

	public HomePage(WebDriver driver) {
		super(driver);
	}

	public void verifyHeaderMenu(String menuData) {
		boolean bool = isElementPresent(By.xpath("//div[@class='desktop-navLink']/a[text()='" + menuData + "']"));
		Assert.assertTrue(bool);
	}

	public void verifyOptionsUnderProfile(String text) {
		boolean bool = isElementPresentInList(By.xpath("//div[contains(@class,'desktop-info')]"), text);
		Assert.assertTrue(bool);
	}

	public void hoverOnHeaderMenuHomePage(String headerData) {
		hoverOnElement(By.xpath("//div[@class='desktop-navLink']//a[text()='" + headerData + "']"));

	}

	public void clickLinkUnderHeaderMenuHomePage(String text) {
		clickElementByLocator(By.xpath("//a[text()='" + text + "']"));
	}

	public void clickonProductOnPlpPage() {
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//li[@class='product-base'][1]")));
		clickElementByLocator(By.xpath("//li[@class='product-base'][1]"));
	}

	public void switchToNewWindow() throws InterruptedException {
		switchNewWindow();

	}

	public void switchBackToParentWindow() throws InterruptedException {
		switchToParentWindow();
	}

	public void clickOnWishlist() throws InterruptedException {
		
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//span[contains(text(),'WISHLIST NOW')]")));
		clickElementByLocator(By.xpath("//span[contains(text(),'WISHLIST NOW')]"));
		Thread.sleep(3000);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//span[contains(text(),'WISHLISTED')]")));
	}
}
