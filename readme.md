# QA cinemas - Team Io Group Project

This project includes a back and front end for web application for a cinema, linking to a gcp instance of mySql.
All application code was written in javascript; the front end was built with React and the backend was built with node/express.
Selenium/junit was used for automated testing. Version control was managed with git, using GitHub as host.

Folder containing documentation includes presentation, site map and Risk assessment.
* [Jira](https://jmonks.atlassian.net/secure/RapidBoard.jspa?rapidView=7&projectKey=IQC&view=planning&issueLimit=100) - Scrum Board

## Deploying the program

1) clone the repository to your machine
2) using two separate command windows, run the command 'npm start' in the project's 'express' and 'react/cinemaapp' folders.
3) you can now connect with and use the web application at http://localhost:3000, accessible from your favoured web browser.

### Prerequisites

To use the application you will need to have, react, node and express installed on your machine.

## Testing the application

A suite of automated selenium tests are provided. To use these you will need to use n IDE such as eclipse to open the maven project 'CinemaTests',
located inside 'react/selenium tests'. In your IDE open the class 'TestSuite'. Ensure the application is running as per the instructions above, then right 
click inside the class and click 'coverage as > 1 junit test.

### Prerequisites

To run the test suite you will need to have java installed on your machine, and an IDE such as eclipse.

## Using the application

The application will initially load on the home page, where you will see several movie posters, which you can click to see more information about those features.
The navbar at the top of the page will allow you to access the other pages and features of the application. Note - there are several pages which can only be accessed through links
on the about page, reached by the 'AboutiO' link in the navbar.

## Built With

* [React](https://reactjs.org/) - Front end framework
* [Node](https://nodejs.org/en/) - Back end runtime
* [Visual Studio Code](https://code.visualstudio.com/) - JS IDE
* [mysql](https://www.mysql.com/) - database lanuage
* [GCP](https://cloud.google.com/) - database host
* [Git](https://git-scm.com/) - version control system
* [GitHub](https://github.com/) - version control system host
* [jira](https://www.atlassian.com/software/jira) - planning, scrum
* [bootstrap](https://getbootstrap.com/) -front end formatting
* [Maven](https://maven.apache.org/) - Testing Dependency Management
* [Eclipse](https://www.eclipse.org/downloads/) - Testing IDE
* [JUnit](https://junit.org/junit4/) - Testing
* [Selenium](https://www.selenium.dev/) -Testing
* [Stripe](https://stripe.com/gb) - Payment system

## Authors
* **Dr James Monks** -[JMonks14](https://github.com/JMonks14)
* **Gianluca Fernandez** -[Gianluca Fernandez](https://https://github.com/Gianluca-Fernandez-QA)

## License

This Project is licensed under the MIT license - see the [LICENSE.md](LICENSE.md) file for details

# QA Cinemas
