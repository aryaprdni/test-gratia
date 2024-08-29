import { Table, Container } from 'react-bootstrap';
import useMySchedule from './hooks/useMyShedule';
import Layout from '../../layout';

const MySchedulePage = () => {
  const { schedules, isLoading, error } = useMySchedule();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading schedules: {error.message}</p>;

  return (
    <Layout>
        <Container>
        <h1>My Schedule</h1>
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>Doctor</th>
                <th>Treatment</th>
                <th>Date</th>
                <th>Status</th>
            </tr>
            </thead>
            <tbody>
            {schedules.map(schedule => (
                <tr key={schedule.id}>
                <td>{schedule.doctor.name}</td>
                <td>{schedule.treatment.name}</td>
                <td>{new Date(schedule.appointment_date).toLocaleString()}</td>
                <td>{schedule.status}</td>
                </tr>
            ))}
            </tbody>
        </Table>
        </Container>
    </Layout>
  );
};

export default MySchedulePage;
