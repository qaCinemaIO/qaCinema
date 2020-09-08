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
	
	@FindBy(xpath = "//*[@id=\"root\"]/div/nav/ul/li[3]/a")
	private WebElement classGuideLink;
	
	@FindBy(xpath = "//*[@id=\"root\"]/div/nav/ul/li[5]/a")
	private WebElement aboutLink;
	
	@FindBy(xpath = "//*[@id=\"root\"]/div/nav/ul/li[1]/a")
	private WebElement contactLink;
	
	@FindBy(xpath = "//*[@id=\"root\"]/div/nav/ul/li[6]/a")
	private WebElement addMovieLink;
	
	@FindBy(xpath = "//*[@id=\"root\"]/div/nav/ul/li[2]/a")
	private WebElement findUs;
	
	@FindBy(xpath = "//*[@id=\"root\"]/div/nav/ul/li[7]/a")
	private WebElement discuss;
	
	public WebElement getDiscuss() {
		return discuss;
	}

	@FindBy(xpath= "//*[@id=\"root\"]/div/div[2]/div/button")
	private WebElement seatSelect;
	
	@FindBy(xpath = "/html/body/div[2]/div/div[1]/div/div/div[2]/div/table/tbody/tr[1]/td[1]/div/button")
	private WebElement seat1;
	
	@FindBy(xpath = "/html/body/div[2]/div/div[1]/div/div/div[2]/div/table/tbody/tr[1]/td[2]/div/button")
	private WebElement seat2;
	
	@FindBy(xpath ="/html/body/div[2]/div/div[1]/div/div/div[2]/div/table/tbody/tr[1]/td[1]/div/div/button[1]")
	private WebElement child1;
	
	@FindBy(xpath= "/html/body/div[2]/div/div[1]/div/div/div[2]/div/table/tbody/tr[1]/td[2]/div/div/button[2]")
	private WebElement adult2;
	
	@FindBy(xpath = "/html/body/div[2]/div/div[1]/div/div/div[3]/button")
	private WebElement buyTicks;
	
	@FindBy(xpath = "/html/body/div[2]/div/div[1]/div/div/button/span")
	private WebElement cardPay;
	
	@FindBy(xpath= "/html/body/iframe")
	private WebElement stripeModal;
	
	public WebElement getStripeModal() {
		return stripeModal;
	}

	@FindBy(css = "input[autocomplete='email']")
	private WebElement emailIn;
	
	@FindBy(css = "input[placeholder='Name']")
	private WebElement nameIn;
	
	@FindBy(css = "input[placeholder='Street']")
	private WebElement streetIn;
	
	@FindBy(css = "input[placeholder='City']")
	private WebElement cityIn;
	
	@FindBy(css = "input[autocomplete='postal-code']")
	private WebElement postIn;
	
	@FindBy(xpath = "//*[@id=\"container\"]/section/span[2]/div/div/main/form/nav/div/div/div/button")
	private WebElement payInfo;
	
	@FindBy(css = "input[placeholder='Card number']")
	private WebElement cardNoIn;
	
	@FindBy(css = "input[placeholder='MM / YY']")
	private WebElement expIn;
	
	@FindBy(css = "input[placeholder='CVC']")
	private WebElement codeIn;
	
	@FindBy(xpath = "//*[@id=\"container\"]/section/span[2]/div/div/main/form/nav/div/div/div/button")
	private WebElement payButt;
	
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

	public WebElement getSeatSelect() {
		return seatSelect;
	}

	public WebElement getSeat1() {
		return seat1;
	}

	public WebElement getSeat2() {
		return seat2;
	}

	public WebElement getChild1() {
		return child1;
	}

	public WebElement getAdult2() {
		return adult2;
	}

	public WebElement getBuyTicks() {
		return buyTicks;
	}

	public WebElement getCardPay() {
		return cardPay;
	}

	public WebElement getEmailIn() {
		return emailIn;
	}

	public WebElement getNameIn() {
		return nameIn;
	}

	public WebElement getStreetIn() {
		return streetIn;
	}

	public WebElement getCityIn() {
		return cityIn;
	}

	public WebElement getPostIn() {
		return postIn;
	}

	public WebElement getPayInfo() {
		return payInfo;
	}

	public WebElement getCardNoIn() {
		return cardNoIn;
	}

	public WebElement getExpIn() {
		return expIn;
	}

	public WebElement getCodeIn() {
		return codeIn;
	}

	public WebElement getPayButt() {
		return payButt;
	}
	
	

}
