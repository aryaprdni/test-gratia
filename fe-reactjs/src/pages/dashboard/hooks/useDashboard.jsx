import { useState, useEffect } from 'react';
import { APIWithToken } from "../../../libs/axios";
import { toast } from 'react-toastify';

const useDashboard = () => {
    const [formData, setFormData] = useState({
        doctor_id: "",
        treatment_id: "",
        appointment_date: "",
    });

    const [doctors, setDoctors] = useState([]);
    const [treatments, setTreatments] = useState([]);

    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                const response = await APIWithToken.get('/doctors');
                setDoctors(response.data.data);
                // console.log(response);
            } catch (error) {
                console.error("Error fetching doctors:", error);
            }
        };

        const fetchTreatments = async () => {
            try {
                const response = await APIWithToken.get('/treatments'); 
                // console.log(response);
                setTreatments(response.data.data);
            } catch (error) {
                console.error("Error fetching treatments:", error);
            }
        };

        fetchDoctors();
        fetchTreatments();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await APIWithToken.post('/appointment', formData);
            setFormData({
                doctor_id: "",
                treatment_id: "",
                appointment_date: "",
            });
            toast.success('Appointment created successfully!');
            console.log(response);
        } catch (error) {
            console.error("Error creating appointment:", error);
        }
    };

    return {
        formData,
        handleChange,
        handleSubmit,
        doctors,
        treatments
    };
};

export default useDashboard;
