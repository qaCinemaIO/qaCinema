package tests;

import static org.junit.Assert.assertEquals;

import java.util.concurrent.TimeUnit;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.PageFactory;

import pages.DiscussionPage;
import pages.HomePage;

public class DiscussTest {
	
	private WebDriver driver;
	private HomePage home;
	private DiscussionPage diss;
	@Before
	public void setup() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "src/test/resources/chromedriver.exe");
		driver = new ChromeDriver();
        driver.manage().window().setSize(new Dimension(1366, 768));
        home = PageFactory.initElements(driver, HomePage.class);
        diss = PageFactory.initElements(driver, DiscussionPage.class);
        driver.manage().timeouts().implicitlyWait(4000, TimeUnit.MILLISECONDS);
        driver.get(this.home.getUrl());
        
	}
	
	@Test
	public void dissTest() {
		home.getDiscuss().click();
		assertEquals("Create a new Post", diss.getMakePostHead().getText());
	}
	
	@After
	public void tearDown() {
		driver.quit();
	}
	

}
