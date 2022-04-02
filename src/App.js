import { fetchData } from './services/api';
import { useEffect, useState } from 'react';
import TradeHistoryList from './TradeHistoryList';
import aloading from './assets/aloading.gif';


function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setLoading(true)
    const today = new Date();
    const formattedDate = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`
    fetchData(formattedDate, formattedDate)
      .then((response) => {
        setData(response.data)
      }).catch((error) => {
        setHasError(true)
      }).finally(() => setLoading(false))
  }, [])

  return (
    <div>
      {hasError && !loading && <div className='error'><strong>An Error Occured!</strong></div>}
      {loading && <div className='aloading'><strong>Loading</strong><br />
        <img src={aloading} alt='loading' /></div>}
      {!loading && !hasError && <TradeHistoryList data={data} />}
    </div>
  );
}

export default App;
