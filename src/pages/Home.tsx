import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Login from '../components/Login'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { useNavigate } from 'react-router'

const Home:React.FC = () => {
  const user= useSelector((state:RootState) => state.auth.userInfo);
  console.log("hello ")
  const navigate= useNavigate();
  useEffect(()=> {
     if (user?.email) {
      navigate("/dashboard");
     }
      
  }, [user]);
  return (    
    <Container>
        <Row>
            <Col xs={12} sm={6}>
              <Login/>
            </Col>
            <Col xs={12} sm={6}/>
        </Row>
    </Container>
  )
}

export default Home