import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://airbnbnew.cybersoft.edu.vn/api',
    headers: {
        'Content-Type': 'application/json',
        TokenCybersoft: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA3NSIsIkhldEhhblN0cmluZyI6IjIxLzA1LzIwMjUiLCJIZXRIYW5UaW1lIjoiMTc0Nzc4NTYwMDAwMCIsIm5iZiI6MTcyMDg5MDAwMCwiZXhwIjoxNzQ3OTMzMjAwfQ.HdSOdENfWNAr5C4CemzCCFNsB1DIvQDRBpEJSsOdpA8"
    },
});