import React from 'react';

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
            </div>
        )
    }
} export default TheTeam