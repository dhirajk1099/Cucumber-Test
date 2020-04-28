package Actions;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;


public class HomePage extends BaseClass {

	public HomePage(WebDriver driver) {
		super(driver);
	}
	
	public void verifyHeaderMenu(String menuData) {
	boolean bool =	isElementPresent(By.xpath("//div[@class='desktop-navLink']/a[text()='"+menuData+"']"));
		Assert.assertTrue(bool);
	}
 
	public void verifyOptionsUnderProfile(String text) {
		boolean bool = isElementPresentInList(By.xpath("//div[contains(@class,'desktop-info')]"), text);
		Assert.assertTrue(bool);	
	}
}
