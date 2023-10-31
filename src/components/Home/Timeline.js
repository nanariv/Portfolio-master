import React from "react";
import Card from "react-bootstrap/Card";
import "./home.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function Timeline() {
    return (
        <div className="timeline">
            <div className="timeline-wrap left">
            <div className="date d-xs-none d-lg-block">Aug 2023 - Present</div>
                <div className="date d-sm-block d-lg-none">2023</div>
                <i className="icon fa fa-home"></i>
                <div className="content">
                    <h2>Software Engineering Intern</h2>
                    <ul className="details">
                        <li>Ashtel LLC</li>
                        <li className="smaller">Raleigh, NC</li>
                    </ul>
                </div>
            </div>
            <div className="timeline-wrap right">
            <div className="date d-xs-none d-lg-block">Aug 2021 - April 2023</div>
                <div className="date d-sm-block d-lg-none">2021</div>
                <i className="icon fa fa-gift"></i>
                <div className="content flip-card">
                    <div className="flip-card-inner">
                        <span className="flip-card-front">
                        </span>
                        <div className="flip-card-back">
                            <ul className="details">
                                <li>MS in Information Science</li>
                                <li className="smaller">Pittsburgh, PA</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="timeline-wrap left">
            <div className="date d-xs-none d-lg-block">Feb 2021 - Aug 2021</div>
                <div className="date d-sm-block d-lg-none">2021</div>
                <i className="icon fa fa-user"></i>
                <div className="content">
                    <h2>Independent Contract</h2>
                    <ul className="details">
                        <li className="smaller">TN, India</li>
                    </ul>
                </div>
            </div>
            <div className="timeline-wrap right">
            <div className="date d-xs-none d-lg-block">Oct 2019 - Feb 2021</div>
                <div className="date d-sm-block d-lg-none">2019</div>
                <i className="icon fa fa-running"></i>
                <div className="content">
                    <h2>Senior Frontend Developer</h2>
                    <ul className="details">
                        <li>IBM Corp</li>
                        <li className="smaller">KA, India</li>
                    </ul>
                </div>
            </div>
            <div className="timeline-wrap left">
            <div className="date d-xs-none d-lg-block">Feb 2017 - Oct 2019</div>
                <div className="date d-sm-block d-lg-none">2017</div>
                <i className="icon fa fa-cog"></i>
                <div className="content">
                    <h2>UI Engineer</h2>
                    <ul className="details">
                        <li>Tavant Technologies</li>
                        <li className="smaller">KA, India</li>
                    </ul>
                </div>
            </div>
            <div className="timeline-wrap right">
            <div className="date d-xs-none d-lg-block">Aug 2016 - Feb 2017</div>
                <div className="date d-sm-block d-lg-none">2016</div>
                <i className="icon fa fa-certificate"></i>
                <div className="content">
                    <h2>UI Intern</h2>
                    <ul className="details">
                        <li>Tavant Technologies</li>
                        <li className="smaller">KA, India</li>
                    </ul>
                </div>
            </div>
        </div >
    );
}

export default Timeline;

