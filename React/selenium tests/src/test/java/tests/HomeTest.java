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

import pages.HomePage;



public class HomeTest {
	
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
	public void clickPosters() {
		driver.manage().timeouts().implicitlyWait(4000, TimeUnit.MILLISECONDS);
		home.getPoster1().click();
		assertEquals("Knives out",home.getMovieTitle().getText());
		home.getPoster2().click();
		assertEquals("Ready or Not",home.getMovieTitle().getText());
		home.getPoster3().click();
		assertEquals("Game Night",home.getMovieTitle().getText());
		home.getPoster4().click();
		assertEquals("About Time",home.getMovieTitle().getText());
		home.getPoster5().click();
		assertEquals("The Wolf of Wall Street",home.getMovieTitle().getText());
	}
	
	@After
	public void tearDown() {
		driver.quit();
	}

}
