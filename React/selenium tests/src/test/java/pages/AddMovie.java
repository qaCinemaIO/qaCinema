package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class AddMovie {
	
private String url;
	
	public AddMovie() {
		this.url="http://localhost:3000/admin";
	}
	
	@FindBy(xpath="//*[@id=\"EmailInput\"]")
	private WebElement adminEmail;
	
	@FindBy(xpath="//*[@id=\"PasswordInput\"]")
	private WebElement adminPass;
	
	@FindBy(xpath="/html/body/div[3]/div/div/div[2]/div/form/button")
	private WebElement adminLogin;

	@FindBy(xpath = "//*[@id=\"newmovie\"]/div[1]/input")
	private WebElement titleField;
	
	@FindBy(xpath = "//*[@id=\"newmovie\"]/div[2]/textarea")
	private WebElement sypField;
	
	@FindBy(xpath = "//*[@id=\"newmovie\"]/div[3]/input")
	private WebElement dirField;
	
	@FindBy(xpath = "//*[@id=\"newmovie\"]/div[4]/input")
	private WebElement ageField;
	
	@FindBy(xpath = "//*[@id=\"newmovie\"]/div[5]/input")
	private WebElement starField;
	
	@FindBy(xpath = "//*[@id=\"newmovie\"]/div[6]/input")
	private WebElement dateField;
	
	@FindBy(xpath = "//*[@id=\"newmovie\"]/div[7]/input")
	private WebElement durField;
	
	@FindBy(xpath = "//*[@id=\"newmovie\"]/div[8]/input")
	private WebElement writeField;
	
	@FindBy(xpath = "//*[@id=\"newmovie\"]/div[10]/input")
	private WebElement imgField;
	
	@FindBy(xpath = "//*[@id=\"newmovie\"]/div[11]/input")
	private WebElement altField;
	
	@FindBy(xpath = "//*[@id=\"newmovie\"]/button")
	private WebElement submit;

	public WebElement getSubmit() {
		return submit;
	}

	public String getUrl() {
		return url;
	}

	public WebElement getTitleField() {
		return titleField;
	}

	public WebElement getSypField() {
		return sypField;
	}

	public WebElement getDirField() {
		return dirField;
	}

	public WebElement getAgeField() {
		return ageField;
	}

	public WebElement getStarField() {
		return starField;
	}

	public WebElement getDateField() {
		return dateField;
	}

	public WebElement getDurField() {
		return durField;
	}

	public WebElement getWriteField() {
		return writeField;
	}

	public WebElement getImgField() {
		return imgField;
	}

	public WebElement getAltField() {
		return altField;
	}
	
	public WebElement getAdminEmail() {
		return adminEmail;
	}

	public WebElement getAdminPass() {
		return adminPass;
	}

	public WebElement getAdminLogin() {
		return adminLogin;
	}

}
