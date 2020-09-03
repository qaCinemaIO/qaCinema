import React from 'react';

class NearbyPlaces extends React.Component {

    render() {
        return(
            <div className="container">
                <center><h1>Things to do nearby</h1></center>
                <div className="row">
                    <div className = "col-md">
                        <h3>Restaurants</h3>
                        The Salford Quays area has a fantastic variety of delightful restaurants whether you want a light snack before you arrive or fill up while discussing how much you enjoyed the film you just saw!
                        <br></br><br></br>
                        <p><strong>Shahi Masala</strong> - Modern Indian Resaurant<br></br>
                        - Unit 1, Capital Quay, Salford Quays, Salford M50 3WL <br></br>
                          <a href="http://www.myshahimasala.com/">Shahi Masala</a></p>
                        <p><strong>Chiquito</strong> - Mexican restaurant<br></br>
                        3, Capital Quay, Trafford Rd, Manchester M50 3WL <br></br>
                          <a href="https://www.chiquito.co.uk/">Chiquito</a></p>
                        <p><strong>Quay House Beefeater</strong> - Steak house<br></br>
                        3, Capital Quay, Trafford Rd, Manchester M50 3WL <br></br>
                          <a href="https://www.beefeater.co.uk/en-gb/locations/lancashire/quay-house?cid=GLBC_40016345">Quay House Beefeater</a></p>
                        <p><strong>Tandoori Delights</strong> - Indian restaurant<br></br>
                        Salford M50 3AY <br></br>
                          <a href="https://www.quaysidemediacityuk.co.uk/food-and-drink/tandoori-delights&CategoryID=110">Tandoori Delights</a></p>
                    </div>
                    <div className="col-md">
                        <h3>Bars</h3>
                    </div>
                    <div className="col-md">
                        <h3>Others</h3>
                    </div>
                </div>

            </div>
        )
    }
} export default NearbyPlaces