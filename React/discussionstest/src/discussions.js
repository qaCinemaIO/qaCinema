import React,{Component} from 'react';
// import { Alert } from 'reactstrap';
import {Alert, Card, Button, InputGroup,FormControl, Dropdown, Row, Col, Badge} from 'react-bootstrap';

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
            rating: 0,
            movie: "",
            postContent: "",
        }
        this.insertPost = this.insertPost.bind(this);


    }

    // stateHandle = (int) => {
    //     // console.log("stateHandle sets the time as :" + this.state.date);
    //     this.setState({
    //         ratingDropdown: "int"
    //     });
    // };


    async componentDidMount() {
        const response = await fetch('http://localhost:8081/allMoviesPosts')
        const json = await response.json();
        this.setState({ moviesDb: json });
    }

    async insertPost(){
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: 'React POST Request Example' })
        };
        console.log(this.state.movie);
        console.log(this.state.rating);
        console.log(this.state.postContent);
        const response = await fetch(`http://localhost:8081/createPost?userId=2&username=temp&movie=tempMov&rating=${this.state.rating}&post=${this.state.postContent}`, requestOptions);
        // const json = await response.json();

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

                                        <option selected value="grapefruit">Select a Movie</option>
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


                    <Card>
                        <Card.Header><b>Movie Title, Rating:</b> <Badge variant="success">★★★★</Badge>  <p className="float-right"><b>Posted by: default user, date-time</b></p></Card.Header>
                        <Card.Body>
                            <blockquote className="blockquote mb-0">
                                {/*<h5>Post Title</h5>*/}
                                <h6>
                                    Post Content
                                </h6>

                            </blockquote>
                            <hr />
                            <footer className="blockquote-footer">
                               default user: <cite title="Source Title">Comment content</cite>
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
                    <br />
                    <br />
                    <br />
            </div>
                <br/>
                <br/>
                <br/>
            </div>
        );
    }



}
