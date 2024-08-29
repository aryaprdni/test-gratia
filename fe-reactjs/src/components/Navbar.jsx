import { Navbar, Nav, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { APIWithToken } from '../libs/axios';
import useAuthStore from '../store/useAuthStore';

const NavbarComponent = () => {
  const navigate = useNavigate();
  const { logout} = useAuthStore();

  const handleLogout = async () => {
    try {
      await APIWithToken.post('/auth/logout');
      logout();
      navigate('/login');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <Navbar bg="light" expand="lg" className='px-5'>
      <Navbar.Brand href="/dashboard">Carolos Hospital</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Item>
            <Nav.Link href="/myschedule">My Schedule</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/dashboard">Choose Schedule Treatment</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Button variant="outline-primary" onClick={handleLogout}>
              Logout
            </Button>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
