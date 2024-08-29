import { useState, useEffect } from 'react';
import { APIWithToken } from '../../../libs/axios';

const useMySchedule = () => {
  const [schedules, setSchedules] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSchedules = async () => {
      try {
        const response = await APIWithToken.get('/appointments'); 
        setSchedules(response.data.data);
        console.log(response)
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSchedules();
  }, []);

  return {
    schedules,
    isLoading,
    error
  };
};

export default useMySchedule;
