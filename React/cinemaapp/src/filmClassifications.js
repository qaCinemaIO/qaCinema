import React from 'react';

class FilmClass extends React.Component {

    render() {
        return(
            <div class="container">
                <br></br>
                <h1>Film Classifications</h1>
                <p >Film classisfication guidelines are published and regularly updated by the British Board of Film Classification (BBFC). All classisfication decisions are based to BBFC guidelines. For more information please visit <a href="https://www.bbfc.co.uk/about-classification/classification-guidelines">the BBFC's classification guidelines webpage.</a>.</p>
                <table class="table table-dark">
                  <thead>
                    <tr>
                      <th scope="col" width="25%">Rating</th>
                      <th scope="col">What it means</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><img src={require('./images/tbc100px.jpg')} width="150px" alt="TBC: a red triangle with the letters T,B,C inside."></img></td>
                      <td>To be confirmed: in some instances the website is updated before a film is certified. Refunds are available if a classification decision prevents any customers from seeing a film after a booking is made.</td>
                    </tr>
                    <tr>
                        <td><img src={require('./images/U100PX.jpg')} width="150px" alt="U: a green triangle with the letter U inside"></img></td>
                        <td>Universal: suitable for audiences aged 4 and over. Check with consumer advice before allowing children under 4 to see this film.</td>
                    </tr>
                    <tr>
                        <td><img src={require('./images/PG100PX.jpg')} width="150px" alt="PG: a yellow traingle with the letters P,G inside"></img></td>
                        <td>Parental Guidance: General viewing, but some scenesmay be unsuitable for young children.</td>
                    </tr>
                    <tr>
                        <td><img src={require('./images/12A100PX.jpg')} width="150px" alt="12A: an orange circle with the characters 12, A inside"></img></td>
                        <td>12A with Parental Guidance - 12A means that the BBFC have classified the film unsuitable for children under 12. However, they may still watch the film, as long as they are accompanied by someone over 18 at all times during the showing. Advice is given regarding the content of the film and the ADULT must decide if it is appropriate for the accompanying under 12. Proof of age may be required.</td>
                    </tr>
                    <tr>
                        <td><img src={require('./images/15100PX.jpg')} width="150px" alt="15: a light red circle with the number 15 inside"></img></td>
                        <td>15 - Suitable only for persons of 15 years and older. Proof of age may be required.</td>
                    </tr>
                    <tr>
                        <td><img src={require('./images/18100PX.jpg')} width="150px" alt="18: a dark red circle with the number 18 inside"></img></td>
                        <td>18 - Suitable only for persons of 18 years and older. Proof of age may be required.</td>
                    </tr>
                  </tbody>
                </table>
            </div>
        )
    }
}


export default FilmClass;