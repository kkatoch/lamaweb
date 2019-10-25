import React from "react";
import {Button, Form, Radio, TextArea} from "semantic-ui-react";
import {Link} from "react-router-dom";

class Contact extends React.Component {
    state = {};

    handleChange = (e, {value}) => this.setState({value});

    render() {
        const {value} = this.state;
        return (
            <div className="ui container">
                <div className="ui container grid-holder">
                    <h1 className="header-title">Contact Us</h1>
                    <h5 className="header-details" style={{textAlign: "center"}}>
                        Browse our fine art photography for sale or rent online at Lama
                        Art. We select, you choose. We’re curators – that means we use our
                        expertise to find great art, great artists. Our online selection of
                        photographs features a wide range of colour and black & white
                        photography and photo collages.
                    </h5>
                    <Form>
                        <Form.Field>
                            <label>First Name</label>
                            <input placeholder="First Name"/>
                        </Form.Field>
                        <Form.Field>
                            <label>Last Name</label>
                            <input placeholder="Last Name"/>
                        </Form.Field>
                        <Form.Input label="Email" placeholder="jane.doe@example.com"/>
                        <Form.Group inline>
                            <Form.Field
                                control={Radio}
                                label="Corporate"
                                value="1"
                                checked={value === "1"}
                                onChange={this.handleChange}
                            />
                            <Form.Field
                                control={Radio}
                                label="Artist"
                                value="2"
                                checked={value === "2"}
                                onChange={this.handleChange}
                            />
                            <Form.Field
                                control={Radio}
                                label="Other"
                                value="3"
                                checked={value === "3"}
                                onChange={this.handleChange}
                            />
                        </Form.Group>
                        <Form.Field
                            id="form-textarea-control-opinion"
                            control={TextArea}
                            placeholder="Message"
                        />
                        <Form.Field>
                            <div className="ui checkbox">
                                <input
                                    type="checkbox"
                                    className="hidden"
                                    readOnly=""
                                    tabIndex="0"
                                />
                                <label>I agree to the <Link to={`/toc`}>Terms and Conditions</Link></label>
                            </div>
                        </Form.Field>
                        <Button type="submit">Submit</Button>
                    </Form>
                </div>
            </div>
        );
    }
}

export default Contact;