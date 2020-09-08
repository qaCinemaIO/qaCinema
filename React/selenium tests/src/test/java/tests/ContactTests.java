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

import pages.ContactPage;
import pages.HomePage;

public class ContactTests {
	
	private WebDriver driver;
	private HomePage home;
	private ContactPage contact;
	
	@Before
	public void setup() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "src/test/resources/chromedriver.exe");
		driver = new ChromeDriver();
        driver.manage().window().setSize(new Dimension(1366, 768));
        home = PageFactory.initElements(driver, HomePage.class);
        contact = PageFactory.initElements(driver, ContactPage.class);
        driver.manage().timeouts().implicitlyWait(4000, TimeUnit.MILLISECONDS);
        driver.get(this.home.getUrl());
	}
	
	@Test
	public void contactTest() throws InterruptedException {
		driver.manage().timeouts().implicitlyWait(4000, TimeUnit.MILLISECONDS);
		home.getContactLink().click();
		contact.getNameField().sendKeys("Mr Selenium");
		contact.getEmailField().sendKeys("selenium@madeup.com");
		contact.getSubjectField().sendKeys("Test");
		contact.getMessageField().sendKeys("This is an automated test");
		contact.getSubButton().click();
		Thread.sleep(2000);
		driver.switchTo().alert().accept();
		assertEquals("",contact.getNameField().getAttribute("value"));
		contact.getFindLink().click();
		assertEquals("Getting Here:", contact.getFindTitle().getText());
	}
	
	@After
	public void tearDown() {
		driver.quit();
	}

}
