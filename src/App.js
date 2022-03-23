import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-circular-progressbar/dist/styles.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Sidebar from './sidebar/Sidebar';
import Content from './content/Content';
function App() {
  return (
    <div className="container-port">
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;
