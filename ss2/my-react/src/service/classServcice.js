import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL

export async function getAllClasses(){
    try{
        const res = await axios.get(`${API_URL}/classes`);
        return res.data;
    }catch (e){
        console.log(e);
    }
    return [];
}