import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state';

function App() {
  const account = useSelector((state) => state.account);
  const dispatch = useDispatch();

  const { depositMoney, withdrawnMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );

  return (
    <div className="App">
      <h1>{account}</h1>
      <button onClick={() => depositMoney(1000)}>deposit</button>
      <button onClick={() => withdrawnMoney(1000)}>withdrawn</button>
    </div>
  );
}

export default App;
