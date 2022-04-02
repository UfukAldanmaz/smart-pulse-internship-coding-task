import { fetchData } from './services/api';
import { useEffect, useState } from 'react';
import TradeHistoryList from './TradeHistoryList';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true)
    const today = new Date();
    const formattedDate = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`
    fetchData(formattedDate, formattedDate)
      .then((response) => {
        setData(response.data)
      }).catch((error) => {
        //todo show notification
      }).finally(() => setLoading(false))
  }, [])



  return (
    <div>
      {!loading && <TradeHistoryList data={data} />}
    </div>
  );
}

export default App;
