import axios from "axios";
export async function fetchData(startDate, endDate) {
    const response = await axios.get(`transparency/service/market/intra-day-trade-history?endDate=${endDate}&startDate=${startDate}`)
    return response
}
