import React,{Component} from 'react'
import WOW from "wowjs";
import PropTypes from "prop-types";
import Style from '../styles/index.scss'

class Home extends Component{
    componentDidMount() {
        new WOW.WOW().init();
    }
    render() {
        return (
            <div id="my-background" className="background">
                <div id="stars" />
                <div id="stars2" />
                <div id="stars3" />
                <div className="top-container flex">
                    <h1>
                        Salut, je suis Sghaier Jawhar
                        <br />
                        développeur frontend js(ReactJs & React native & Angular+2)
                    </h1>
                    {/* offset can be cahnged in node modules wowjs default file */}
                    <button
                        className={"work-button " + this.props.bounceIn}
                        data-wow-offset="0"
                        onClick={() => {
                            let node = document.getElementById(
                                this.props.aboutRef.current.props.id
                            );
                            window.scrollTo({
                                top: node.offsetTop,
                                behavior: "smooth"
                            });
                        }}>
                        Consulter mon profil
                    </button>
                </div>
            </div>
        );
    }


}
Home.protoType={
    aboutRef: PropTypes.object,
    bounceIn: PropTypes.string
}

export default Home
