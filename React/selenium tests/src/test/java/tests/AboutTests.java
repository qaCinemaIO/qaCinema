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

import pages.AboutPage;
import pages.ContactPage;
import pages.HomePage;

public class AboutTests {
	
	private WebDriver driver;
	private HomePage home;
	private AboutPage about;
	private ContactPage contact;
	
	@Before
	public void setup() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "src/test/resources/chromedriver.exe");
		driver = new ChromeDriver();
        driver.manage().window().setSize(new Dimension(1366, 768));
        home = PageFactory.initElements(driver, HomePage.class);
        about = PageFactory.initElements(driver, AboutPage.class);
        contact = PageFactory.initElements(driver, ContactPage.class);
        driver.manage().timeouts().implicitlyWait(4000, TimeUnit.MILLISECONDS);
        driver.get(this.home.getUrl());
	}
	
	@Test
	public void aboutTest() {
		home.getAboutLink().click();
		assertEquals("About iO", this.about.getTitle().getText());
		about.getAboutTeamLink().click();
		assertEquals("About the Team", about.getTeamTitle().getText());
		home.getAboutLink().click();
		about.getNearbyLink().click();
		assertEquals("Things to do nearby", about.getNearbyTitle().getText());
		home.getAboutLink().click();
		about.getContactLink().click();
		assertEquals("Send us a message", contact.getMsgTitle().getText());
	}
	
	@After
	public void tearDown() {
		driver.quit();
	}

}
