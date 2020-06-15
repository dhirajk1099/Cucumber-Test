package Actions;

import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;

import Resources.DriverInitialization;
import Resources.ReadExcelData;
import io.cucumber.messages.internal.com.google.common.base.Verify;

public class CanonHomePage extends BaseClass {
	ReadExcelData readExcel = new ReadExcelData();

	public CanonHomePage(WebDriver driver) {
		super(driver);
	}

	public void openUrl() throws InterruptedException {
		getUrl(DriverInitialization.config.getProperty("URL"));
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

	}

	public void clickPromoBtn() throws InterruptedException {
		try {
			clickElementByLocator(By.xpath("//button[@class='action-close']"));
		} catch (Exception e) {
		}

	}

	public void clickMyAccountLogo() {
		WebElement myaccountBtn = driver.findElement(By.xpath("//li[@class='canon-header-user minicart-wrapper']"));
		wait.until(ExpectedConditions.elementToBeClickable(myaccountBtn));
		clickElementByLocator(By.xpath("//li[@class='canon-header-user minicart-wrapper']"));
	}

	public void clickCanonLoginLink(String text) {
		clickElementByLocator(By.xpath("//a[text()='" + text + "']"));
	}

	public void enterEmailAddress(String text) {
		enterText(By.xpath("//input[@placeholder='Email Address']"), text);
	}

	public void enterPassword(String text) {
		enterText(By.xpath("//input[@name='password']"), text);
	}

	public void clickLoginButtonOfCanon() {
		clickElementByLocator(By.xpath("//b[text()='Log In']//parent::button"));
	}

	public void verifyUserOnHomePage() {
		String title = getTitelOfPage();
		System.out.println("Title of the page is:" + title);
	}

	public void searchProductSku(String sku) throws Exception {
		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
		WebElement searchBox = driver.findElement(By.xpath("//input[@name='q']"));
		safeJavaScriptClick(searchBox);
		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
		enterText(By.xpath("//input[@placeholder='Enter Keyword or Item']"), sku);

	}

	public void clickOnSuggestionList(String title) {
		driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
		clickElementByLocator(By.xpath("//div[@class='amsearch-autocomplete-information']//a[@title='" + title + "']"));
	}

	public void verifySkuOnPdpPage(String productName) {
		String product = getText(By.xpath("//span[text()='" + productName + "']"));
		product.equalsIgnoreCase(productName);
		Assert.assertEquals(productName, product);
	}

	public void verifyStock() {
		String status = getText(By.xpath("//div[@class='product-info-stock-sku']//span[text()='In stock']"));
		System.out.println(status);

	}

	public void addProductInCart() {
		clickElementByLocator(By.xpath("//span[text()='Add to Cart']"));
		System.out.println("Button Is clicked");
		clickElementByLocator(By.xpath("//span[text()='Proceed to cart']"));

	}

	public void getSku() throws IOException {

	}
}
