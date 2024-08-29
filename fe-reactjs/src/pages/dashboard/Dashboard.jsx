import Layout from '../../layout';
import useDashboard from './hooks/useDashboard';
import { Form, Button, Container } from 'react-bootstrap';

const DashboardPage = () => {
    const { formData, handleChange, handleSubmit, doctors, treatments } = useDashboard();

    return (
        <Layout>
            <Container>
                <h1>Dashboard</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="doctor_id">
                        <Form.Label>Doctor</Form.Label>
                        <Form.Control
                            as="select"
                            name="doctor_id"
                            value={formData.doctor_id}
                            onChange={handleChange}
                        >
                            <option value="">Select Doctor</option>
                            {doctors.map((doctor) => (
                                <option key={doctor.id} value={doctor.id}>
                                    {doctor.name}
                                </option>
                            ))}
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="treatment_id">
                        <Form.Label>Treatment</Form.Label>
                        <Form.Control
                            as="select"
                            name="treatment_id"
                            value={formData.treatment_id}
                            onChange={handleChange}
                        >
                            <option value="">Select Treatment</option>
                            {treatments.map((treatment) => (
                                <option key={treatment.id} value={treatment.id}>
                                    {treatment.name}
                                </option>
                            ))}
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="appointment_date">
                        <Form.Label>Appointment Date</Form.Label>
                        <Form.Control
                            type="datetime-local"
                            name="appointment_date"
                            value={formData.appointment_date}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit" className="mt-3">
                        Submit
                    </Button>
                </Form>
            </Container>
        </Layout>
    );
};

export default DashboardPage;
