package Resources;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
		features= {"src/test/Features/HomePageFunctionality.feature"},
		glue= {""},
		tags= {""},
		plugin= {"html:target/cucumber-results", "usage:target/cucumber-results/cucumber-usage.json",                 
		"junit:target/cucumber-results/cucumber-results.xml", "json:target/cucumber-results/cucumber.json"}
		
		)
public class TestRunner {
	
}
