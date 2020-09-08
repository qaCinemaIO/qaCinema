package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class ClassGuide {
	
private String url;
	
	public ClassGuide() {
		this.url="http://localhost:3000/film-classifications";
	}
	
	@FindBy(xpath ="//*[@id=\"root\"]/div/div/h1")
	private WebElement title;
	
	@FindBy(xpath ="//*[@id=\"root\"]/div/div/p/a")
	private WebElement bbfcLink;

	public String getUrl() {
		return url;
	}

	public WebElement getTitle() {
		return title;
	}

	public WebElement getBbfcLink() {
		return bbfcLink;
	}
	
	

}
