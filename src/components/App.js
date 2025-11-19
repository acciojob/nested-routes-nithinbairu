
import React, { useState } from "react";
import './../styles/App.css';
import { BrowserRouter,Switch,Route,Link } from "react-router-dom";
import Home from "./Home";
import Women from "./Women";
import Items from "./Items";
const items=[{id:1,item:"Grooming"},{id:2,item:"Shirt"},{id:3,item:"Trouser"},{id:4,item:"Jewellery"}];
const App = () => {
  const [women,setWomen]=useState(false);
  console.log(women);
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li><Link to="/" onClick={()=>setWomen(false)}>Home</Link></li>
        <li><Link to="/women" onClick={()=>setWomen(true)}>Women</Link></li>          
        </ul>
      </nav>
      <Switch>
  <Route path="/women/:id" component={() => <Items items={items} />} />
  <Route exact path="/women" component={() => <Women items={items} />} />
  <Route exact path="/" component={Home} />
</Switch>
    </BrowserRouter>
  )
}

export default App
