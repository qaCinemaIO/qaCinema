package tests;

import java.util.concurrent.TimeUnit;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.PageFactory;

import pages.HomePage;

public class BuyTicketTest {
	
	private WebDriver driver;
	private HomePage home;
	
	@Before
	public void setup() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "src/test/resources/chromedriver.exe");
		driver = new ChromeDriver();
        driver.manage().window().setSize(new Dimension(1366, 768));
        home = PageFactory.initElements(driver, HomePage.class);
        driver.manage().timeouts().implicitlyWait(4000, TimeUnit.MILLISECONDS);
        driver.get(this.home.getUrl());
	}
	
	@Test
	public void buyTicket() throws InterruptedException {
		driver.manage().timeouts().implicitlyWait(4000, TimeUnit.MILLISECONDS);
		Thread.sleep(1000);
		home.getPoster3().click();
		home.getSeatSelect().click();
		home.getSeat1().click();
		home.getChild1().click();
		home.getSeat2().click();
		home.getAdult2().click();
		home.getBuyTicks().click();
		home.getCardPay().click();
		Thread.sleep(2000);
		driver.switchTo().frame(home.getStripeModal());
		home.getEmailIn().sendKeys("selenium@test.co.uk");
		home.getNameIn().sendKeys("Mr Selenium");
		home.getStreetIn().sendKeys("54 test drive");
		home.getCityIn().sendKeys("Testton");
		home.getPostIn().sendKeys("TE51 0NE");
		home.getPayInfo().click();
		home.getCardNoIn().sendKeys("4242424242424242");
		home.getExpIn().sendKeys("1220");
		home.getCodeIn().sendKeys("666");
		home.getPayButt().click();
	}
	
	@After
	public void tearDown() {
		driver.quit();
	}


}
