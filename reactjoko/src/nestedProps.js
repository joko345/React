import React from "react";
class Pesan extends React.Component{
    render(){
        return(
            <div>
                <small>{this.props.sender}:</small>
                <p>{this.props.content}</p>
            <hr/>
            </div>
        )
    }
}
class Chat extends React.Component{
    render(){
        return(
            <div>
                <Pesan sender="Joko" content="Belajar React"/>
                <Pesan sender="Keno" content="Belajar React"/>
                <Pesan sender="Bagas" content="Belajar React"/>
            </div>
        )
    }}
    export default Chat;
