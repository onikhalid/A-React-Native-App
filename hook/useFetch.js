import { useState, useEffect } from "react";
import axios from "axios";




const useFetch = (endpoint, query, job_id) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);


    const fetchData = async () => {
        setIsLoading(true)

        const apiUrl = `https://jsearch.p.rapidapi.com/${endpoint}`;

        const headers = {
            'X-RapidAPI-Key': 'fd993596d3mshcc8e97b2af97e14p1c3251jsnb3392fd74e18',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
        };

        const params = { query,  job_id};

        try {
            const response = await axios.get(apiUrl, { headers, params });
            setData(response.data.data)
            setIsLoading(false)
        } catch (error) {
            setError(error)
            alert(`${error.message}`)
        } finally {
            setIsLoading(false)
        }
    };



    useEffect(() => {
        fetchData()
    }, []);


    const refetch = () => {
        setIsLoading(true)
        fetchData()
    }


    return { data, isLoading, error, refetch }
}



export default useFetch