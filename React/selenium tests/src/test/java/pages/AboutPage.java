package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class AboutPage {
	
	private String url;
	
	public AboutPage() {
		this.url="http://localhost:3000/about";
	}
	
	@FindBy(xpath="//*[@id=\"root\"]/div/div/div/div/h1")
	private WebElement title;
	
	@FindBy(xpath="//*[@id=\"root\"]/div/div/div/div/p/a[1]")
	private WebElement nearbyLink;
	
	@FindBy(xpath="//*[@id=\"root\"]/div/div/div/div/p/a[2]")
	private WebElement aboutTeamLink;
	
	@FindBy(xpath="//*[@id=\"root\"]/div/div/div/div/p/a[3]")
	private WebElement contactLink;
	
	@FindBy(xpath="//*[@id=\"root\"]/div/div/center/h1")
	private WebElement teamTitle;
	
	@FindBy(xpath = "//*[@id=\"root\"]/div/div/center/h1")
	private WebElement nearbyTitle;

	public WebElement getNearbyTitle() {
		return nearbyTitle;
	}

	public WebElement getTeamTitle() {
		return teamTitle;
	}

	public String getUrl() {
		return url;
	}

	public WebElement getTitle() {
		return title;
	}

	public WebElement getNearbyLink() {
		return nearbyLink;
	}

	public WebElement getAboutTeamLink() {
		return aboutTeamLink;
	}

	public WebElement getContactLink() {
		return contactLink;
	}

}
