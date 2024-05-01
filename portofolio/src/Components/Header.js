import React, { Component } from "react";
import ParticlesBg from "particles-bg";

class Header extends Component {
    render() {
        if (!this.props.data) return null;
        const project = this.props.data.project;
        const github = this.props.data.github;
        const name = this.props.data.name;
        const description = this.props.data.description;
        
        return (
            <header id="home">
                <ParticlesBg type="circle" bg={true} />
                <nav id="nav-wrap">
                    <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                    <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>
                    <ul id="nav" className="nav">
                        <li className="current">
                            <a className="smoothscroll" href="#home">Home</a>
                        </li>
                        <li>
                            <a className="smoothscroll" href="#about">About</a>
                        </li>
                        <li>
                            <a className="smoothscroll" href="#resume">Resume</a>
                        </li>
                        <li>
                            <a className="smoothscroll" href="#works">Works</a>
                        </li>
                        <li>
                            <a className="smoothscroll" href="#contact">Contact</a>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;
