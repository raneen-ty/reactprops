import React from "react";
import GreetingMessage from "./GreetingMessage";
import DynamicButton from "./DynamicButton";
import ProductCard from "./Card";
import UserInfo from "./UserInfo";
import User from "./User";
import Header from "./Header";
import Button from "./Button";

function App() {
   const handleClick = () => {
    alert("You clicked the button!");
  };

  return (
    <div>
      <div><GreetingMessage name="Amro" /></div>
      <div><DynamicButton label="Click Me" /></div>
    <div style={{ display: "flex",   flexDirection: "column", 
      alignItems: "left",   
      gap: "20px",           
      padding: "20px"  }}>
      <h1>Product Details</h1>
      <ProductCard 
        productName="Laptop" 
        price={999} 
        description="A powerful laptop for work and play." 
      />
    </div>
     <div style={{alignItems: "left",}}>
      <UserInfo username="Amro" email="amro@orange.com" age={27} />
    </div>
     <div>
      <User 
        avatar="https://randomuser.me/api/portraits/men/75.jpg"
        name="Amro"
        email="amro@orange.com"
      />
</div>
    <div>
      <Header 
        title="My Website" 
        hLink="#home" 
        aLink="#about" 
        ctLink="#contact" 
      />
    </div>
      <div>
      <Button label="Click Me" onClick={handleClick} />
    </div>
</div>
  );
}

export default App;



