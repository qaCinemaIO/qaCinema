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

import pages.ClassGuide;
import pages.HomePage;

public class ClassGuideTest {
	
	private WebDriver driver;
	private HomePage home;
	private ClassGuide cGuide;
	
	@Before
	public void setup() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "src/test/resources/chromedriver.exe");
		driver = new ChromeDriver();
        driver.manage().window().setSize(new Dimension(1366, 768));
        home = PageFactory.initElements(driver, HomePage.class);
        cGuide = PageFactory.initElements(driver, ClassGuide.class);
        driver.manage().timeouts().implicitlyWait(4000, TimeUnit.MILLISECONDS);
        driver.get(this.home.getUrl());
	}
	
	@Test
	public void guideTest() throws Exception {
		driver.manage().timeouts().implicitlyWait(4000, TimeUnit.MILLISECONDS);
		home.getClassGuideLink().click();
		assertEquals("Film Classifications", cGuide.getTitle().getText());
		cGuide.getBbfcLink().click();
		assertEquals("https://www.bbfc.co.uk/about-classification/classification-guidelines",driver.getCurrentUrl());
	}

	@After
	public void tearDown() {
		driver.quit();
	}
}
