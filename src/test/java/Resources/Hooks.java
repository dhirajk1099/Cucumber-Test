package Resources;

import java.io.IOException;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.Scenario;
import io.cucumber.plugin.Plugin;

public class Hooks {
	// DriverInitialization init = null;
	public static WebDriver driver;

	@Before
	public void beforeScenario() throws IOException {
		driver= new DriverInitialization().getDriver();
		
		

	}

	@After
	public void afterScenario(Scenario scenario) throws IOException {
		try {

			if(scenario.isFailed()) {
			byte[] screenShots = ((TakesScreenshot)driver).getScreenshotAs(OutputType.BYTES);
			scenario.embed(screenShots, "image/png");
			}
		} finally {
			new DriverInitialization().tearDown();
		}

	}
}
