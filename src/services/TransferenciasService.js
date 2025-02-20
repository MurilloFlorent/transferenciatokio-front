import axios from "axios";

const API_BASE_URL = 'http://localhost:8080/api/transferencia'

class TransferenciasService{
    getTransferencias() {
        return axios.get(API_BASE_URL + "/all");
    }

    postTransferencia(contaOrigem, contaDestino, valorTransferencia, dataTransferencia) {
        return axios.post(API_BASE_URL, {
            contaOrigem,
            contaDestino,
            valorTransferencia,
            dataTransferencia
        });
    }
}

export default new TransferenciasService();