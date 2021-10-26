import axios from 'axios';

// constant value that should not be changed (youtube api Key)
const KEY = "AIzaSyDJJCyXrVQJWOlniq6quO5Xh794DOAdUhY";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
    part: 'snippet', 
    type: 'video',
    maxResults: 15,
    key: KEY
    }
});