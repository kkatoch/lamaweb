import React from "react";
import {Accordion} from "semantic-ui-react";

const panels = [
    {
        key: "what-is-lama",
        title: "What is a lama?",
        content: ["A lama is a type of "].join(" ")
    },
    {
        key: "kinds-of-lamas",
        title: "What kinds of lamas are there?",
        content: ["There are many breeds of lamas."].join(" ")
    },
    {
        key: "acquire-lama",
        title: "How do you acquire a lama?",
        content: ["There are many breeds of lamas."].join(" ")
    }
];

class FAQ extends React.Component {
    render() {
        return (
            <div className="ui container">
                <div className="ui container grid-holder">
                    <h1 className="header-title">FAQs</h1>
                    <h5 className="static-page-text" style={{fontWeight: "normal"}}>
                        Browse our fine art photography for sale or rent online at Lama
                        Art. We select, you choose. We’re curators – that means we use our
                        expertise to find great art, great artists. Our online selection of
                        photographs features a wide range of colour and black & white
                        photography and photo collages.
                    </h5>
                    <Accordion defaultActiveIndex={0} panels={panels}/>
                </div>
            </div>
        );
    }
}

export default FAQ;