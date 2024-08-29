import { Container, Card, Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRegisterValidation } from './hooks/useRegisterValidation';
import { Controller } from 'react-hook-form';
import { API } from '../../libs/axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const { control, handleSubmit } = useRegisterValidation();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    try {
      const response = await API.post('/auth/register', { ...data });
      console.log(response.data);
      toast.success('Register success');
      navigate('/login');
    } catch (error){
      console.log(error);
      toast.error('response.data.errors');
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <Card style={{ width: '100%', maxWidth: '500px' }} className="p-4 shadow-sm">
        <Card.Body>
          <div className="text-center mb-4">
            <h2 className="mt-2">Register</h2>
          </div>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="formFullName">
              <Form.Label>Full Name</Form.Label>
              <Controller
                name="name"
                control={control}
                render={({ field, fieldState }) => (
                  <>
                    <Form.Control
                      type="text"
                      placeholder="Full Name"
                      {...field}
                      isInvalid={!!fieldState.error}
                    />
                    <Form.Control.Feedback type="invalid">
                      {fieldState.error?.message}
                    </Form.Control.Feedback>
                  </>
                )}
              />
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Controller
                name="email"
                control={control}
                render={({ field, fieldState }) => (
                  <>
                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                      {...field}
                      isInvalid={!!fieldState.error}
                    />
                    <Form.Control.Feedback type="invalid">
                      {fieldState.error?.message}
                    </Form.Control.Feedback>
                  </>
                )}
              />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Controller
                name="password"
                control={control}
                render={({ field, fieldState }) => (
                  <>
                    <Form.Control
                      type="password"
                      placeholder="Enter your password"
                      {...field}
                      isInvalid={!!fieldState.error}
                    />
                    <Form.Control.Feedback type="invalid">
                      {fieldState.error?.message}
                    </Form.Control.Feedback>
                  </>
                )}
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 mt-3">
              Register
            </Button>
          </Form>
          <div className="text-center mt-4">
            <small>Already have an account? <a href="/login">Login here</a></small>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Register;
