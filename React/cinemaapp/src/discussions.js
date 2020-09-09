import React,{Component} from 'react';
// import { toast } from "react-toastify";
// import { Alert } from 'reactstrap';
import {Alert, Card, Button, InputGroup,FormControl, Row, Col, Badge} from 'react-bootstrap';
// import "react-toastify/dist/ReactToastify.css";
import {Link} from 'react-router-dom';
export default class Discussions extends Component {



    constructor(props){
        super(props);
        this.state={
            date: new Date(),
            text: "",
            boolForShould: true,
            movieDropdown: "Select a movie",
            ratingDropdown: "Select a rating",
            posts: null,
            moviesDb: [],
            postsObj: [],
            rating: 0,
            receivedRating: "",
            movie: "",
            postContent: "",
        }
        this.insertPost = this.insertPost.bind(this);
        this.start = this.start.bind(this);
        // this.norm = this.norm.bind(this);


    }

    // stateHandle = (int) => {
    //     // console.log("stateHandle sets the time as :" + this.state.date);
    //     this.setState({
    //         ratingDropdown: "int"
    //     });
    // };


    async componentDidMount() {

        // console.log("asdasdasd");
        const response = await fetch('http://localhost:9007/allMoviesPosts')
        const json = await response.json();
        this.setState({ moviesDb: json });
        console.log(json);

        const response2 = await fetch('http://localhost:9007/allPosts')
        const json2 = await response2.json();
        this.setState({ postsObj: json2 });
        console.log(json2);
    }

    async insertPost(){
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            // body: JSON.stringify({ title: 'React POST Request Example' })
        };
        console.log(this.state.movie);
        console.log(this.state.rating);
        console.log(this.state.postContent);
        const response = await fetch(`http://localhost:9007/createPost?userId=2&username=temp&movie=${this.state.movie}&rating=${this.state.rating}&post=${this.state.postContent}`, requestOptions);
        // console.log(response.status);
        if (response.status === 200){

            alert("Post Created")
        }else{
            alert("Post Not Created")

        }


    }



    start(int){
        switch (int) {
            case "1":
                return "★";


            case "2":
                return "★★";


            case "3":
                return "★★★";

            case "4":
                return "★★★★";

            case "5":
                return "★★★★★";

        }
    }



    render() {
        return (

            <div  style={{
                backgroundColor: '#303030',
                width: "auto",
                height: "auto"
            }}>
                <h1 style={{ color: 'white' }}>Discussions</h1>
                <br/>


                <div className={'container'}>
                <Alert variant={'primary'}>

                    <Card>
                        <Card.Header ><h4>Create a new Post</h4></Card.Header>
                        <Card.Body>

                            <Row>
                                <Col>
                                    <select onChange={(a) => this.setState({ movie: a.target.value })}>

                                        <option selected value="no movie selected">Select a Movie</option>
                                        {this.state.moviesDb.map(function(object, i){
                                            return <option  value={object.title}>{object.title}</option>;
                                            // <ObjectRow obj={object} key={i} />;
                                        })}
                                        {/*<option  value="grapefruit">Movie1</option>*/}
                                        {/*<option value="lime">Movie2</option>*/}
                                        {/*<option value="coconut">Movie333</option>*/}
                                    </select>
                                    <select onChange={(e) => this.setState({ rating: e.target.value })}>
                                        <option selected value="0">Select a Rating</option>
                                        <option  value="1">★</option>
                                        <option value="2">★★</option>
                                        <option value="3">★★★</option>
                                        <option value="4">★★★★</option>
                                        <option value="5">★★★★★</option>
                                    </select>
                                </Col>



                            </Row>
                            <br />

                            <Card.Text>
                                <InputGroup>
                                    <FormControl onChange={(s) => this.setState({ postContent: s.target.value })} as="textarea" aria-label="With textarea" placeholder={"Write something here..."}/>
                                    <InputGroup.Append>
                                        <InputGroup.Text> <Button onClick={this.insertPost} variant="info" block>Share</Button></InputGroup.Text>
                                    </InputGroup.Append>

                                </InputGroup>
                            </Card.Text>
                            {/*<Button variant="primary">Go somewhere</Button>*/}
                        </Card.Body>
                    </Card>
                </Alert>
                    <br />
                    <br />
                    <br />
                    <br />


                    {this.state.postsObj.map(function(object, i){
                        return  <><Card>
                            <Card.Header><b style={{color: 'black'}}>{object.postTitle}, Rating:</b> <Badge variant="success">{object.postRating}</Badge>  <p className="float-right"><b style={{color: 'black'}}>Posted by: {object.postedByName}</b></p></Card.Header>
                            <Card.Body>
                                <blockquote className="blockquote mb-0">
                                    {/*<h5>Post Title</h5>*/}
                                    <h6 style={{color: 'black'}}>
                                        {object.postContent}
                                    </h6>

                                </blockquote>
                                <hr />
                                <footer className="blockquote-footer">
                                    {object.postedByName}: <cite title="Source Title">Comment content</cite>
                                </footer>
                                <hr />
                                <InputGroup>
                                    <FormControl as="textarea" aria-label="With textarea" placeholder={"Write your Comment here..."}/>
                                    <InputGroup.Append>
                                        <InputGroup.Text> <Button  variant="success" block>Post</Button></InputGroup.Text>
                                    </InputGroup.Append>
                                </InputGroup>
                            </Card.Body>

                        </Card>
                            <br />
                        </>


                    })}
                    <br />
                    <br />
                    <br />
                    <br />
            </div>
                <br/>
                <br/>
                <br/>
                <footer class="blockquote-footer">
                &copy; Team iO 2020 &middot; <Link to="/">Home</Link> &middot; <Link to="/aboutTeam">About Our Team</Link> &middot; <Link to="/contact">Contact Us</Link>
                </footer>

            </div>
        );
    }



}
