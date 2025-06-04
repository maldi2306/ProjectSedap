import axios from 'axios';

const API_URL = "https://cwgphklkjxurlfdtckig.supabase.co/rest/v1/note";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN3Z3Boa2xranh1cmxmZHRja2lnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkwMTkwOTIsImV4cCI6MjA2NDU5NTA5Mn0.EjAFSqRwPfa7UMWTkcx3Z-CnjEe8JiKQf3jlXgRxXMc";

const headers = {
    apikey: API_KEY,
    Authorization: `Bearer ${API_KEY}`,  // Corrected the syntax for Bearer token
    "Content-Type": "application/json",
};

export const notesAPI = {
    async fetchNotes() {
        const response = await axios.get(API_URL, { headers });
        return response.data;
    },

    async createNote(data) {
        const response = await axios.post(API_URL, data, { headers });
        return response.data;
    },
    async deleteNote(id) {
        await axios.delete(`${API_URL}?id=eq.${id}`, { headers })
    }
};
