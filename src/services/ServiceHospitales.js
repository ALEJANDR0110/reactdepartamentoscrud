import Global from "../Global";
import axios from "axios";

export default class ServiceHospitales {
    async getHospitales() {
        let url = Global.urlApiEjemplos;
        let request = "api/hospitales";
        let response = await axios.get(url + request);

        return response.data;
    }

    async getTrabajadoresHospitales(data) {
        let url = Global.urlApiEjemplos;
        let request = "api/trabajadores/trabajadoreshospitales?" + data;

        let response = await axios.get(url + request);
        return response.data;
    }
}
