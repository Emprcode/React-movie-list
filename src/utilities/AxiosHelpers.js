import axios from 'axios'


export const fetchData = (str) => {
    // console.log(str)
    // const apiEp = "https://www.omdbapi.com/?apikey=13d05e42&t=" + str;
    const apiEp = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&t=${str}`;
    const response = axios(apiEp);
    return response;
};