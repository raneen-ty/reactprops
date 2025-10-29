import React from "react";

function UserInfo({ username, email, age }) {
  return (
<div>
      <h2>User Information</h2>
      <p><strong>Name:</strong> {username}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Age:</strong> {age}</p>
    </div>
  );
}

export default UserInfo;
