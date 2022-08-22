import './App.css';
import SideBar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import MovieListPage from "./pages/MovieListPage";
import DashboardPage from "./pages/Dashboard";

function App() {
  return (
    <div id="wrapper">

      <SideBar />

      <div id="content-wrapper" className="d-flex flex-column">

        <div id="content">

          <Header />

          <DashboardPage />
          {/* <MovieListPage /> */}
        </div>

        <Footer />
      </div>

    </div>
  );
}

export default App;
