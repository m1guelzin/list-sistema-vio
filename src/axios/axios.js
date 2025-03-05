import axios from "axios";

const api = axios.create({
    baseURL:"http://localhost:5000/api/v1/",
    headers:{
        'accept':'application/json'
    }
});

const sheets = {
    getUsers:()=>api.get("user/"),
    getEventos:()=>api.get("evento/"),
    getOrganizadores:()=>api.get("organizador/"),
    getIngressos:()=>api.get("ingresso/")
}

export default sheets;