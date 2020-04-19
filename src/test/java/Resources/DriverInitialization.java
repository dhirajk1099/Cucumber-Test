package Resources;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class DriverInitialization {

	protected static WebDriver driver = null;
	public static Properties config = new Properties();
	public static FileInputStream fis = null;
	public DriverInitialization() {

		try {
			initialize();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	public void initialize() throws IOException {

		fis = new FileInputStream(System.getProperty("user.dir") + "\\src\\test\\java\\Resources\\config.properties");
		config.load(fis);
		if (driver == null) {

			driverInstance();
		}

	}

	public void driverInstance() {
		String br = config.getProperty("Browser");
		if (br.equalsIgnoreCase("Chrome")) {
			System.setProperty("webdriver.chrome.driver",
					System.getProperty("user.dir") + "" + "/libraries/chromedriver.exe");
			driver = new ChromeDriver();
			driver.manage().window().maximize();
			driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
			

		} else if (br.equalsIgnoreCase("firefox")) {
			System.setProperty("webdriver.gecko.driver",
					System.getProperty("user.dir") + "" + "/libraries/geckodriver.exe");
			driver = new FirefoxDriver();
			driver.manage().window().maximize();
			driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);

		} else {
			System.out.println("Browser Not found");
		}

	}

	public void tearDown() throws IOException {
		driver.manage().deleteAllCookies();
		fis.close();
		driver.close();
		driver.quit();
		driver = null;
	}

}
