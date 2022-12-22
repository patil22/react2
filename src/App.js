// import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types'
import './othercss.css'
import './index.css'
import Sidebar from './Components/Sidebar';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
function App() {
  return (
    <>
      <Navbar/>
      <div className="container my-3   ">
        <Textform heading="Enter text ..." />
      </div>
      {/* <Sidebar/>
*/ }

      {/* <button type="button" className="btn btn-primary">ADD</button> */}

    </>
  );

}

export default App;


