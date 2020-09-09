import React from 'react';
import {Link} from 'react-router-dom';


class TheTeam extends React.Component {

    render() {
        return(

            <div className="container">
              <center><h1>About the Team</h1></center>
              <br></br>
                <div className="row">
                  <div className="col-3">
                    <img src={require('./images/JamesAbtpagepic.jpg')} width="90%" alt="Dr. James Monks"></img>
                  </div>
                  <div className="col">
                    <h5 className="text-left">Dr. James Monks</h5>
                    <p>Dr James Monks graduated from the University of Nottingham in 2020 with a PhD in Chemistry and Materials engineering, which was spent researching thin film organic solar cells. He first got into programming during his research and joined the QA academy in summer 2020, with a few to puruing a career in IT.
                        His hobbies include: LARP, board games and playing the guitar.</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <h5 className="text-right">Chynna Brown</h5>
                    <p className="text-right" >Hi i'm Chynna and I am part of team iO! I helped create this website along with my amazing team. I took the picture of our establishment that can be seen on our about page as I have a passion for photography. Another one of my passions is Movies which I based my previous project on. I was able to take what I learnt from the previous project and improve upon things with my team to help create this cinema website. </p>
                  </div>
                  <div className="col-3">
                    <img src={require('./images/chy.png')} width="90%" alt="Dr. James Monks"></img>
                  </div>
                </div>
                <div className="row">
                  <div className="col-3">
                    <img src={require('./images/Luca.jpg')} width="90%" alt="Gianluca Fernandez"></img>
                  </div>
                  <div className="col">
                    <h5 className="text-left">Gianluca Fernandez</h5>
                    <p>Gianluca Fernandez primarily worked on the Seat Selector functionality and assisted with other pages in the site.
                      He got into to programming in college and after three years of chef work, decided to go professional. His hobbies include reading, Dungeons and dragons and playing games.</p>
                  </div>
                </div>

                <div className="row">
                    <div className="col">
                        <h5 className="text-right">Arbab Ahmed</h5>
                        <p className="text-right" >Arbab Ahmed focused on the Stripe payment system and the discussions page.
                            He chose Software Engineering (BSc) in the university and from there decided to pursue programming as a profession. His hobbies are playing piano, games and photography </p>
                    </div>
                    <div className="col-3">
                        <img src={require('./images/arbab.jpg')} width="90%" alt="Arbab Ahmed"></img>
                    </div>
                </div>

                <div className="row">
                  <div className="col-3">
                    <img src={require('./images/Sufyaanpic.JPG')} width="90%" alt="Sufyaan Aziz"></img>
                  </div>
                  <div className="col">
                    <h5 className="text-left">Sufyaan Aziz</h5>
                    <p>Hi I'm Sufyaan a recent graduate in the field of Computing with Management, coming from a technology background I have been thrilled to use my coding skills to develope
                      a cinema web application, from creating most of the CRUD functionality to making sure the designs are user freindly and the site is safe. Along side developing my knowldege in technology
                      i enjoy cycling, reading comics and trying different cuisines from around the world. enjoy browsing our webite and as always feedback would be appreciated !
                    </p>
                  </div>
                </div>
                <footer class="blockquote-footer">
                &copy; Team iO 2020 &middot; <Link to="/">Home</Link> &middot; <Link to="/aboutTeam">About Our Team</Link> &middot; <Link to="/contact">Contact Us</Link>
                </footer>




            </div>
        )
    }
} export default TheTeam
