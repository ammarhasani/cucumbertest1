package com.cucumber.stepDefination;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Upwork {
	WebDriver driver;
	
    @Given("^open url and launch the application$")
	public void open_url_and_launch_the_application() throws Throwable {
    	System.setProperty("webdriver.chrome.driver", "C:\\Users\\ammars\\eclipse-workspace\\chromedriver.exe");
		driver=new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("https://stage.upwork.com/ab/account-security/login");
	}

	@When("^I enter valid credentials & password$")
	public void i_enter_valid_credentials_password() throws Throwable {
		Thread.sleep(5000);
		driver.findElement(By.id("username")).sendKeys("vgupta@360logica.com");
		driver.findElement(By.id("password")).sendKeys("Strange!");
	}

	@Then("^user should be able to login$")
	public void user_should_be_able_to_login() throws Throwable {
		driver.findElement(By.id("submit")).click();
		Thread.sleep(5000);

	}

	@Then("^Close the browser$")
	public void close_the_browser() throws Throwable {
	 
		driver.close();

	}


}