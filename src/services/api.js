import axios from "axios";

const api = axios.create({
    baseURL: 'https://seffaflik.epias.com.tr'
});

export async function fetchData(startDate, endDate) {
    const response = await api.get(`/transparency/service/market/intra-day-trade-history?endDate=${endDate}&startDate=${startDate}`)
    return response
}
