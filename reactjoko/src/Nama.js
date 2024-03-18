import React from "react";

class Nama extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "Title Pertama",
            subTitle: "subtitle pertama"
        };
    }

    changeTitle = () => {
        this.setState({
            title: "Title baru"
        });
    };

    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <h3>{this.state.subTitle}</h3>
                <button onClick={this.changeTitle}>Change Title</button>
            </div>
        );
    }
}

export default Nama;
