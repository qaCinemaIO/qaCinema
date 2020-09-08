package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class DiscussionPage {
	
	private String url;
	
	public DiscussionPage() {
		this.url="http://localhost:3000/discussions";
	}
	
	@FindBy(xpath="//*[@id=\"root\"]/div/div/div/div[1]/div/div[1]/h4")
	private WebElement makePostHead;

	public String getUrl() {
		return url;
	}

	public WebElement getMakePostHead() {
		return makePostHead;
	}

}
