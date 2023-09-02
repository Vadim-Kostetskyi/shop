import './App.css';
import { Header } from './components/header/Header';
import { Routes, Route } from 'react-router-dom';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}/>
      <Route path="/register" element={<RegisterForm/>}/>
    </Routes>

  );
}

export default App;
