import React from "react";
import layers from "../img/integ.png";
import cogwheel from "../img/web-dev-jawher.png";
import pen from "../img/pen.png";
import browser from "../img/agille.png";
import myImage from "../img/myImage.jpg";
import PropTypes from "prop-types";

export default class About extends React.Component {
    render() {
        return (
            <div
                id="about-container"
                className="content-containers container text-center mt-5">
                <h1 id="about" className={this.props.bounceLeft}>
                    A propos
                </h1>
                <div className="row mt-5">
                    <div
                        className={
                            "col-6 col-sm-6 col-md-3 " + this.props.fadeInLeft
                        }>
                        <img src={layers} alt=""/>
                        <h4>Intégration Web</h4>
                    </div>
                    <div
                        className={
                            "col-6 col-sm-6 col-md-3 " + this.props.fadeInLeft
                        }>
                        <img src={pen} alt=""/>
                        <h4>Développement Web</h4>
                    </div>
                    <div
                        className={
                            "col-6 col-sm-6 col-md-3 " + this.props.fadeInRight
                        }>
                        <img src={cogwheel} alt=""/>
                        <h4>Développement Mobile</h4>
                    </div>
                    <div
                        className={
                            "col-6 col-sm-6 col-md-3 " + this.props.fadeInRight
                        }>
                        <img src={browser} alt=""/>
                        <h4>Agile</h4>
                    </div>
                </div>

                <div className="row" style={{marginTop: 7 + "rem"}}>
                    <div className="col-12 col-lg-6 hidden">
                        <img
                            className={"img-fluid " + this.props.fadeIn}
                            src={myImage}
                            alt=""
                            style={{
                                borderRadius: 50 + "%",
                                height: 250 + "px",
                                width: 250 + "px"
                            }}
                        />
                        <p className={"mytext pt-3 " + this.props.fadeIn}>
                            J'aime transformer des idées en réalité en utilisant du code. Je suis passionné par
                            l'utilisation de Javascript et des animations pour créer des expériences utilisateur
                            impressionnantes.
                        </p>
                    </div>
                    <div
                        className={
                            "col-12 col-sm-12 col-md-12 col-lg-6 " +
                            this.props.tada
                        }>
                        <div className="progress mb-3">
                            <div
                                className="progress-bar fill-80-bar"
                                role="progressbar"
                                style={{width: 80 + "%"}}
                                aria-valuemin="0"
                                aria-valuemax="100">
                                HTML5
                            </div>
                        </div>
                        <div className="progress mb-3">
                            <div
                                className="progress-bar fill-80-bar"
                                role="progressbar"
                                style={{width: 80 + "%"}}
                                aria-valuemin="0"
                                aria-valuemax="100">
                                CSS3
                            </div>
                        </div>
						<div className="progress mb-3">
							<div
								className="progress-bar fill-80-bar"
								role="progressbar"
								style={{width: 80 + "%"}}
								aria-valuemin="0"
								aria-valuemax="100">
								Bootstrap
							</div>
						</div>
                        <div className="progress mb-3">
                            <div
                                className="progress-bar fill-90-bar"
                                role="progressbar"
                                style={{width: 90 + "%"}}
                                aria-valuemin="0"
                                aria-valuemax="100">
                                Javascript
                            </div>
                        </div>

                        <div className="progress mb-3">
                            <div
                                className="progress-bar fill-80-bar"
                                role="progressbar"
                                style={{width: 85 + "%"}}
                                aria-valuemin="0"
                                aria-valuemax="100">
                                ReactJS
                            </div>
                        </div>
						<div className="progress mb-3">
							<div
								className="progress-bar fill-80-bar"
								role="progressbar"
								style={{width: 85 + "%"}}
								aria-valuemin="0"
								aria-valuemax="100">
								React Native
							</div>
						</div>
                        <div className="progress mb-3">
                            <div
                                className="progress-bar fill-60-bar"
                                role="progressbar"
                                style={{width: 70 + "%"}}
                                aria-valuemin="0"
                                aria-valuemax="100">
                                Angular2+
                            </div>
                        </div>
                        <div className="progress mb-3">
                            <div
                                className="progress-bar fill-60-bar"
                                role="progressbar"
                                style={{width: 60 + "%"}}
                                aria-valuemin="0"
                                aria-valuemax="100">
                                NodeJs
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        );
    }
}

About.propTypes = {
    bounceLeft: PropTypes.string,
    fadeInLeft: PropTypes.string,
    fadeInRight: PropTypes.string,
    fadeIn: PropTypes.string,
    tada: PropTypes.string
};
