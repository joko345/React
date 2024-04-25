import React, { Component } from "react"; // Mengubah sintaks import untuk Component
import ParticlesBg from "particle-bg";
import { fade } from "react-awesome-reveal"; // Menggunakan kurung kurawal untuk import fade

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
                    
                </nav>
            </header>
        );
    }
}

export default Header; // Menambahkan eksport default untuk komponen Header
