import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <Navbar expand="md" className='fixed-top bg-body-tertiary shadow'>
            <Container>
                <Navbar.Brand>
                    <Link to="/" className='navbar-brand text-success fw-semibold'>
                        React Restaurant
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='me-auto justify-content-end w-100'>
                        <Nav.Link href='/' className='active text-uppercase'>Home</Nav.Link>
                        <Nav.Link href='/menu' className=' text-uppercase'>Menu</Nav.Link>
                        <Nav.Link href='/about' className=' text-uppercase'>About</Nav.Link>
                        <Nav.Link href='/contact' className=' text-uppercase'>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar