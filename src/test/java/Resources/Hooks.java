package Resources;

import java.io.IOException;

import io.cucumber.java.After;
import io.cucumber.java.Before;

public class Hooks {
	// DriverInitialization init = null;

	@Before
	public void beforeScenario() throws IOException {
		new DriverInitialization();

	}

	@After
	public void afterScenario() throws IOException {
		try {

		} finally {
			new DriverInitialization().tearDown();
		}

	}
}
