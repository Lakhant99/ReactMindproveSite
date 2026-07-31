import './assets/css/style.css';
//import Header from './components/Layout/Header'
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <div className="App boxed_wrapper">
       <AppRoutes />
       {/* <Header />  */}
    </div>
  );
}

export default App;
