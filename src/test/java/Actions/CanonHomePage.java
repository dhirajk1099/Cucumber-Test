package Actions;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;

import Resources.DriverInitialization;

public class CanonHomePage extends BaseClass {

	public CanonHomePage(WebDriver driver) {
		super(driver);
	}

	public void openUrl() {
		getUrl(DriverInitialization.config.getProperty("URL"));

	}
	
	public void clickPromoBtn() {
		wait.until(ExpectedConditions.invisibilityOfElementLocated(By.xpath("//header[@class='modal-header']//button[@data-role='closeBtn']")));
		clickElementByLocator(By.xpath("//header[@class='modal-header']//button[@data-role='closeBtn']"));
	}
	
	public void clickMyAccountLogo() {
		clickElementByLocator(By.xpath("//li[@class='canon-header-user minicart-wrapper']"));
	}
	
	public void clickCanonLoginLink(String text) {
		clickElementByLocator(By.xpath("//a[text()='"+text+"']"));
	}
}
