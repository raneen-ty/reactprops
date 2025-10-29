import React, { Component } from "react";

class User extends Component {
  render() {
    const { avatar, name, email } = this.props;

    return (
      <div style={{
        border: "1px solid #ccc",
        borderRadius: "12px",
        padding: "20px",
        width: "300px",
        margin: "20px",
        textAlign: "left",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        backgroundColor:"lightblue"
      }}>
        <img 
          src={avatar} 
          alt={name} 
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            objectFit: "cover",
            marginBottom: "16px"
          }}
        />
        <h2 style={{ margin: "8px 0" }}>{name}</h2>
        <p style={{ color: "#555" }}>{email}</p>
      </div>
    );
  }
}

export default User;
