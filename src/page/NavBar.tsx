import React from 'react'
import SearchButton from '../components/navbar/SearchButton'
import { SearchButtonProps } from '../models/Interfaces'
import { Col, Container, Navbar } from 'react-bootstrap'
import "../styles/NavBar.css";
import OptionButtons from '../components/navbar/OptionButtons';

const NavBar: React.FC<SearchButtonProps> = ({onSearch}) => {
    return (
        <Navbar className='navbar-color' expand="lg">
            <Navbar.Brand style={{color:'#fff'}}>AlquilameSta</Navbar.Brand>
            <Container> 
                <Navbar.Collapse id="basic-navbar-nav">
                    <Col md={12}>
                    <SearchButton onSearch={onSearch}/>
                    </Col>
                    <OptionButtons/>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar