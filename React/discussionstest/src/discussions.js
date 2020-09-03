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
        }

    }

    stateHandle = (int) => {
        // console.log("stateHandle sets the time as :" + this.state.date);
        this.setState({
            ratingDropdown: "int"
        });
    };








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


                            {/*<Card.Title>Select a Movie Name</Card.Title>*/}

                            <Row>
                                <Col>
                                    <select >
                                        <option selected value="grapefruit">Select a Movie</option>
                                        <option  value="grapefruit">Movie1</option>
                                        <option value="lime">Movie2</option>
                                        <option value="coconut">Movie333</option>
                                    </select>
                                    <select>
                                        <option selected value="grapefruit">Select a Rating</option>
                                        <option  value="grapefruit">★</option>
                                        <option value="lime">★★</option>
                                        <option value="coconut">★★★</option>
                                        <option value="mango">★★★★</option>
                                        <option value="mango">★★★★★</option>
                                    </select>
                                </Col>



                            </Row>
                            <br />

                            <Card.Text>
                                <InputGroup>
                                    <FormControl as="textarea" aria-label="With textarea" placeholder={"Write something here..."}/>
                                    <InputGroup.Append>
                                        <InputGroup.Text> <Button  variant="info" block>Share</Button></InputGroup.Text>
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
