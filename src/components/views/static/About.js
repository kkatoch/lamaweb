import React from "react";
import {List} from "semantic-ui-react";
import "./StaticPages.css";

class About extends React.Component {
    render() {
        return (
            <div className="ui container">
                <div className="ui container grid-holder">
                    <h1 className="header-title">About Us</h1>
                    <h3 className="static-page-text">The meaning of 'lama'</h3>
                    <h5 className="static-page-text" style={{fontWeight: "normal"}}>
                        <p className="text-justify">
                            ‘lama’ is an ancient Tibetan word which means ‘guru’, teacher or
                            spiritual guide. At lamaArt, we feel humbled to bestow the
                            honorary title of ‘lamas’ to our artists in respect for all their
                            achievements. We see them as individuals who have achieved mastery
                            and reached the pinnacle of creative portrayal and
                            self-expression. These ‘gurus’ have the ability to truly inspire
                            people, to invoke varied emotions and successfully tell stories
                            which resonate with each individual differently, such is the power
                            of art.
                        </p>
                        <p className="text-justify">
                            “Art enables us to find ourselves and lose ourselves at the same
                            time”
                            <div
                                className="heading-static text-justify"
                                style={{fontSize: "11px"}}
                            >
                                - Thomas Merton
                            </div>
                        </p>
                        <p className="text-justify">
                            Quite often we find ourselves siloed in our own busy lives, caught
                            up in the monotonous every-day happenings at our workplace, which
                            prevent us from being inventive, productive and innovative. Our
                            founders, having worked in the Corporate environment for a
                            significant amount of time, have firsthand identified the benefits
                            of using art as means to alleviate such issues. Extensive research
                            has also concluded that art at workplace can leave fantastic first
                            impressions. Introduction of colour, context and foreign elements
                            can liven the office environment bringing relief to routine much
                            like petrichor after a long summer’s day. lamaArt aims to offer
                            lucrative selling and renting features for its corporate clients
                            to help promote mental health at work and motivate staff.
                        </p>
                    </h5>
                    <h3 className="static-page-text">Our Mission</h3>
                    <h5 className="static-page-text" style={{fontWeight: "normal"}}>
                        <p className="text-justify">
                            There lies within each of us the innate ability to imagine,
                            envision and create. But to realize this creativity, to master it
                            and portray it in form of an art-piece requires discipline,
                            sacrifice and courage which we at lamaArt believe, deserves to be
                            appreciated.
                        </p>
                        <p className="text-justify">
                            lamaArt is an online e-commerce platform which was established
                            with a dual goal in mind.
                        </p>
                        <List bulleted>
                            <List.Item className="text-justify">
                                to foster creativity by enabling artists from various corners of
                                the world to transcend traditional barriers of location and
                                demand and helping them establish a sustainable business for
                                themselves.
                            </List.Item>
                            <List.Item className="text-justify">
                                to promote appreciation for art by providing an intuitive
                                platform that simplifies the art purchasing and rental process
                                for consumers (both individuals and corporates).
                            </List.Item>
                        </List>
                    </h5>
                    <h3 className="static-page-text">Our Values</h3>
                    <h5 className="static-page-text" style={{fontWeight: "normal"}}>
                        <p className="text-justify">
                            Promoting fair and sustainable business for our customers -
                            lamaArt Loves working with Customers as much as lamaArt Loves
                            working with Artists. While on one-hand we ensure that our artists
                            receive their true value of the artwork, on the other hand, we
                            ensure that our consumers can rent and purchase artwork for
                            competitive prices.
                        </p>
                        <p className="text-justify">We do this by</p>
                        <List bulleted>
                            <List.Item className="text-justify">
                                Keeping a lean business model
                            </List.Item>
                            <List.Item className="text-justify">
                                Providing complete autonomy to the artists to set prices
                            </List.Item>
                            <List.Item className="text-justify">
                                Having no hidden-fees
                            </List.Item>
                            <List.Item className="text-justify">
                                Providing statistics and trends to ensure that both artists and
                                customers make more informed decisions
                            </List.Item>
                        </List>
                        <p className="text-justify">
                            <div className="heading-static">Lead by example -</div>
                            Unlike
                            most businesses and start-ups, LamaArt was established not as a
                            profit hungry business but a business which cares – for both the
                            needs of its customers and its sellers. As a company, we have
                            identified numerous pain points existing in the market, faced by
                            both sellers and buyers alike, and during our development
                            lifecycle, both through technological advancement and establishing
                            sound business concepts, we aim to effect change to alleviate
                            these pain points. We aim to add value and establish trends and
                            structures which can be then be replicated by others in the
                            marketplace as well as those in other industries to solve similar
                            problems.
                        </p>
                        <p className="text-justify">
                            <div className="heading-static">Simplicity -</div>
                            There is Beauty
                            in Simplicity. This is something that is central to how we as a
                            company function and we aim to keep processes as simple as
                            possible for the artists and customers.
                        </p>
                    </h5>
                </div>
            </div>
        );
    }
}

export default About;