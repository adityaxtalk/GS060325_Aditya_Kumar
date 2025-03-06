import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useNavigate } from "react-router";
import { logout } from "../store/authSlice";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import logo from "./../../assets/logo.svg";
import { FaRegUserCircle } from "react-icons/fa";
const Header: React.FC = () => {
  const user = useSelector((state: RootState) => state.auth.userInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <Navbar bg="white" variant="light" expand="lg" className="shadow-sm">
      <Container fluid>
        <Navbar.Brand className="me-auto" href="/" style={{maxWidth: "150px"}}>
          <img src={logo} className="w-100" alt="" />
        </Navbar.Brand>
        <Nav.Item as="h2" className="mx-auto">Data Viewer App</Nav.Item>
        <Nav className="ms-auto">
          {user?.email && (
            <>
              <NavDropdown
                title={<FaRegUserCircle size={20} />}
                align="end"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item className="text-dark pointer">
                  {user.email}
                </NavDropdown.Item>

                <NavDropdown.Divider />
                <NavDropdown.Item
                  className="text-dark pointer"
                  onClick={handleLogout}
                >
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
