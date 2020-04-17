package Resources;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class DriverInitialization {

	public static WebDriver driver = null;
	public static Properties config = new Properties();
	public static FileInputStream fis = null;

	public DriverInitialization() {

      try {
		initialize();
	} catch (IOException e) {
		// TODO Auto-generated catch block
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
	
		System.setProperty("webdriver.chrome.driver",
				System.getProperty("user.dir") + "" + "/libraries/chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);	
	}
	
	
	public void tearDown() throws IOException {
		driver.manage().deleteAllCookies();
		fis.close();
		driver.close();
		driver.quit();
		driver=null;
	}

}
