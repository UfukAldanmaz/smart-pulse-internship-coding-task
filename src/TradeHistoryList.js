import { calculate } from './Calculator';
import dateFormat from "dateformat";

function TradeHistoryList(props) {
    const DisplayData = calculate(props.data.body.intraDayTradeHistoryList).map((info, index) => {
        return (
            <tr key={index} className="info">
                <td>{dateFormat(info.dateTime, "dd.mm.yyyy HH:MM")}</td>
                <td>{info.totalTransactionAmount.toLocaleString('en-US', { maximumFractionDigits: 2 })}</td>
                <td>₺ {info.totalTransactionVolume.toLocaleString('en-US', { maximumFractionDigits: 2 })}</td>
                <td>{info.weightedAveragePrice.toLocaleString('en-US', { maximumFractionDigits: 2 })}</td>
            </tr>
        )
    })
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Tarih</th>
                        <th>Toplam İşlem Miktarı (MWh)</th>
                        <th>Toplam İşlem Tutarı (TL)</th>
                        <th>Ağırlık Ortalama Fiyat (TL/MWH)</th>
                    </tr>
                </thead>
                <tbody>
                    {DisplayData}
                </tbody>
            </table>
        </div>
    )
}

export default TradeHistoryList;