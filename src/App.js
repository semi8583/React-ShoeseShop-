/*eslint-disable*/
import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
// import 작명 from "./data.js"; //변수 하나일 때
// import { name, name2 } from "./data.js"; //변수 2개이상일땐 작명 불가
import Data from "./data.js";
import Detail from "./Detail.js";

import { Link, Route, Switch } from "react-router-dom";

function App() {
  let [shoes, shoes변경] = useState(Data); // 상위 컴포넌트에서 하위컴포넌트로 전달하는 형식이 좋음

  return (
    <div className="App">
      {/* {작명}
      {name}
      {name2} */}
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/Detail">Detail</Link>
              </Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Switch>
        {/* 스위치: 라우트들이 하나씩만 보임 경로가 겹쳐도 하나만 보임 */}
        <Route exact path="/">
          <div className="background">
            <h1>20% Season off</h1>
            <p>현재 할일 행사중</p>
            <p>
              <button variant="primary">Learn more</button>
            </p>
          </div>
        </Route>
        <Route exact path="/detail">
          <Detail shoes={shoes} />
        </Route>

        <Route exact path="/detail/:id">
          <Detail shoes={shoes} />
        </Route>

        <Route exact path="/:id">
          <div>아무거나 적었을때 이거 보여줘</div>
        </Route>
      </Switch>
      {/* <Route path="/어쩌구" component={Modal}></Route> */}
    </div>
  );
}

function SHOP(prop) {
  //component
  return (
    <div className="col-md-4">
      <img src={prop.url} width="100%" />
      <h4> {prop.title}</h4>
      <p>
        {prop.content} {prop.price}
      </p>
    </div>
  );
}

export default App;
