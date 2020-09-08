package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class ContactPage {
	
private String url;
	
	public ContactPage() {
		this.url="http://localhost:3000/contact";
	}
	
	@FindBy(xpath = "//*[@id=\"root\"]/div/div/div/div[2]/h2")
	private WebElement msgTitle;

	@FindBy(xpath = "//*[@id=\"contact-form\"]/div[1]/input")
	private WebElement nameField;
	
	@FindBy(xpath = "//*[@id=\"contact-form\"]/div[2]/input")
	private WebElement emailField;
	
	@FindBy(xpath = "//*[@id=\"contact-form\"]/div[3]/input")
	private WebElement subjectField;
	
	@FindBy(xpath = "//*[@id=\"contact-form\"]/div[4]/textarea")
	private WebElement messageField;
	
	@FindBy(xpath = "//*[@id=\"contact-form\"]/button")
	private WebElement subButton;
	
	@FindBy(xpath = "//*[@id=\"root\"]/div/div/div/div[1]/a")
	private WebElement findLink;
	
	@FindBy(xpath = "//*[@id=\"root\"]/div/div/div/div[1]/h5")
	private WebElement findTitle;
	
	public WebElement getFindLink() {
		return findLink;
	}

	public WebElement getFindTitle() {
		return findTitle;
	}

	public String getUrl() {
		return url;
	}

	public WebElement getMsgTitle() {
		return msgTitle;
	}

	public WebElement getNameField() {
		return nameField;
	}

	public WebElement getEmailField() {
		return emailField;
	}

	public WebElement getSubjectField() {
		return subjectField;
	}

	public WebElement getMessageField() {
		return messageField;
	}

	public WebElement getSubButton() {
		return subButton;
	}

}
