package stepDefination;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class FacebookTest {
	
	WebDriver driver;

	
	@Given("^Open browser and start application$")
	public void open_browser_and_start_application() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\ammars\\eclipse-workspace\\chromedriver.exe");
		driver=new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("https://www.facebook.com/");
	    
	}

	@When("^I enter valid username and valid password$")
	public void i_enter_valid_username_and_valid_password() throws Throwable {
		
		driver.findElement(By.id("email")).sendKeys("YourUsername");
		driver.findElement(By.id("pass")).sendKeys("YourPassword");
	   
	   
	}

	@Then("^user should be able to login succesfully$")
	public void user_should_be_able_to_login_succesfully() throws Throwable {
		driver.findElement(By.id("loginbutton")).click();
		Thread.sleep(5000);
	    
	}



}
