import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL

// hàm call API một danh sách sinh viên;
export async function getAll(){
    try{
        const res = await axios.get(`${API_URL}/students`);
        return res.data;
    }catch (e){
        console.log(e);
    }
    return [];
}
export async function addNew(student){
    try{
        const res = await axios.post(`${API_URL}/students`,student);
        return res.status ==201;
    }catch (e){
        console.log(e);
    }
    return false;
}
export async function deleteById(id){
    try{
        const res = await axios.delete(`${API_URL}/students/${id}`);
        return res.status ==200;
    }catch (e){
        console.log(e);
    }
    return false;
}
export async function findById(id){
    try{
        const res = await axios.get(`${API_URL}/students/${id}`);
        return res.data;
    }catch (e){
        console.log(e);
    }
    return null;
}