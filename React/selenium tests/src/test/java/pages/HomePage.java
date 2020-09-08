package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class HomePage {
	
	private String url;
	
	public HomePage() {
		this.url="http://localhost:3000/";
	}
	
	@FindBy(xpath = "//*[@id=\"Poster0\"]")
	private WebElement poster1;
	
	@FindBy(xpath = "//*[@id=\"Poster1\"]")
	private WebElement poster2;
	
	@FindBy(xpath = "//*[@id=\"Poster2\"]")
	private WebElement poster3;
	
	@FindBy(xpath = "//*[@id=\"Poster3\"]")
	private WebElement poster4;
	
	@FindBy(xpath = "//*[@id=\"Poster4\"]")
	private WebElement poster5;
	
	@FindBy(xpath = "//*[@id=\"movieTitle\"]")
	private WebElement movieTitle;
	
	@FindBy(xpath = "//*[@id=\"root\"]/div/nav/ul/li[4]/a")
	private WebElement classGuideLink;
	
	@FindBy(xpath = "//*[@id=\"root\"]/div/nav/ul/li[6]/a")
	private WebElement aboutLink;
	
	@FindBy(xpath = "//*[@id=\"root\"]/div/nav/ul/li[2]/a")
	private WebElement contactLink;
	
	@FindBy(xpath = "//*[@id=\"root\"]/div/nav/ul/li[7]/a")
	private WebElement addMovieLink;
	
	@FindBy(xpath = "//*[@id=\"root\"]/div/nav/ul/li[3]/a")
	private WebElement findUs;

	public WebElement getContactLink() {
		return contactLink;
	}

	public WebElement getAboutLink() {
		return aboutLink;
	}

	public WebElement getClassGuideLink() {
		return classGuideLink;
	}

	public String getUrl() {
		return url;
	}

	public WebElement getPoster1() {
		return poster1;
	}

	public WebElement getPoster2() {
		return poster2;
	}

	public WebElement getPoster3() {
		return poster3;
	}

	public WebElement getPoster4() {
		return poster4;
	}

	public WebElement getPoster5() {
		return poster5;
	}

	public WebElement getMovieTitle() {
		return movieTitle;
	}

	public WebElement getAddMovieLink() {
		return addMovieLink;
	}

	public WebElement getFindUs() {
		return findUs;
	}

}
