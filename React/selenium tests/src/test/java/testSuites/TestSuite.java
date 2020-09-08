package testSuites;

import org.junit.runner.RunWith;
import org.junit.runners.Suite;

import tests.AboutTests;
import tests.AddMovieTests;
import tests.BuyTicketTest;
import tests.ClassGuideTest;
import tests.ContactTests;
import tests.HomeTest;

@RunWith(Suite.class)

@Suite.SuiteClasses({
	HomeTest.class,
	ClassGuideTest.class,
	AboutTests.class,
	ContactTests.class,
	AddMovieTests.class,
	BuyTicketTest.class
	
})

public class TestSuite {

}
