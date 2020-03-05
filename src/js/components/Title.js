import React, { Component } from "react";
import style from "../../style.scss";

const titleStyle = {
  textAlign: "center"
};

const signatureStyle = {
  marginTop: 0,
  marginBottom: 0
};

const buttonStyle = {
  borderRadius: 6,
  backgroundColor: "#ffffff"
};

export default class Title extends Component {
  state = {
    user: [],
    error: null,
    showMessage: false,
    author: {
      name: "Rahul Ruparel",
      date: "03/05/2020"
    }
  };

  fetchUsers() {
    fetch(`https://jsonplaceholder.typicode.com/posts/1`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          user: data
        })
      )
      .catch(error => this.setState({ error }));
  }

  componentDidMount() {
    this.fetchUsers();
  }

  onButtonClickHandler = () => {
    this.setState({ showMessage: !this.state.showMessage });
  };

  render() {
    const { user, error, author } = this.state;
    return (
      <div className={style.titleText}>
        <div style={titleStyle}>
          {error ? <p>{error.message}</p> : null}
          <div>USER ID: {user.id}</div>
          <div>TITLE: {user.title}</div>
        </div>
        <div>
          <button style={buttonStyle} onClick={this.onButtonClickHandler}>
            Click Me
          </button>
          {this.state.showMessage && (
            <p style={signatureStyle}>
              MAP CREATED BY: {author.name} on {author.date}
            </p>
          )}
        </div>
      </div>
    );
  }
}
