import './App.css';
import SideBar from "./components/Sidebar";
import Header from "./components/Header";
import DashboardPage from "./pages/Dashboard";

function App() {
  return (
    <div id="wrapper">

      <SideBar />

      <div id="content-wrapper" className="d-flex flex-column">

        <div id="content">

          <Header />

          <DashboardPage />
        </div>

        <footer className="sticky-footer bg-white">
          <div className="container my-auto">
            <div className="copyright text-center my-auto">
              <span>Copyright &copy; Dashboard 2021</span>
            </div>
          </div>
        </footer>

      </div>

    </div>
  );
}

export default App;
