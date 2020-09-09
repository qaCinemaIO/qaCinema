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

import pages.AddMovie;
import pages.HomePage;

public class AddMovieTests {
	
	private WebDriver driver;
	private HomePage home;
	private AddMovie add;
	
	@Before
	public void setup() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "src/test/resources/chromedriver.exe");
		driver = new ChromeDriver();
        driver.manage().window().setSize(new Dimension(1366, 768));
        home = PageFactory.initElements(driver, HomePage.class);
        add = PageFactory.initElements(driver, AddMovie.class);
        driver.manage().timeouts().implicitlyWait(4000, TimeUnit.MILLISECONDS);
        driver.get(this.home.getUrl());
	}
	
	@Test
	public void addMovieTest() throws InterruptedException {
		home.getAddMovieLink().click();
		add.getAdminEmail().sendKeys("admin@admin.com");
		add.getAdminPass().sendKeys("admin@admin");
		add.getAdminLogin().click();
		add.getTitleField().sendKeys("My New Movie 2");
		add.getSypField().sendKeys("Some things happen");
		add.getDirField().sendKeys("Mr Director");
		add.getStarField().sendKeys("Tom Cruise, Frankie Howard");
		add.getAgeField().sendKeys("15");
		add.getDateField().sendKeys("12/09/2020");
		add.getDurField().sendKeys("98");
		add.getWriteField().sendKeys("Someone Clever");
		add.getImgField().sendKeys("img.png");
		add.getAltField().sendKeys("a movie poster");
		add.getSubmit().click();
		Thread.sleep(1000);
		assertEquals("",add.getTitleField().getAttribute("value"));
	}
	
	@After
	public void tearDown() {
		driver.quit();
	}

}
