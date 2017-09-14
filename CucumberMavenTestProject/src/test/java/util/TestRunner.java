package util;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)

@CucumberOptions(
		features={"src/test/java/features"},
		glue={"src/test/java/stepDefination"},
		plugin= {"html:target/cucumber-html-report",
				"json:target/Destination/cucumber.json",
				"junit:target/cucumber-results.xml"
				}
		)
public class TestRunner {

	
	
}
