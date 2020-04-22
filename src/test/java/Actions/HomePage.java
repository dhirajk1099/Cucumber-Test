package Actions;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;


public class HomePage extends BaseClass {

	public HomePage(WebDriver driver) {
		super(driver);
	}
	
	public void verifyHeaderMenu(String menuData) {
	boolean bool =	isElementPresent(By.xpath("//div[@class='desktop-navLinks']//a[text()='"+menuData+"']"));
		Assert.assertTrue(bool);
	}

}
