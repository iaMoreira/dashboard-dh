import './App.css';
import SideBar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MovieListPage from "./pages/MovieListPage";
import DashboardPage from "./pages/Dashboard";
import NotFoundPage from "./pages/NotFoundPage";
import LoginPage from "./pages/LoginPage";
import MoviePage from "./pages/MoviePage";
import RegisterPage from "./pages/RegisterPage";
import { Routes, Route} from "react-router-dom";

function App() {
  return (
    <div id="wrapper">

      <SideBar />

      <div id="content-wrapper" className="d-flex flex-column">

        <div id="content">

          <Header />

          <Routes>
            <Route path="/" element={<DashboardPage/>} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/register" element={<RegisterPage/>} />
            <Route path="/movies" element={<MovieListPage/>} />
            <Route path="/movies/:id" element={<MoviePage/>} />
            <Route path="/*" element={<NotFoundPage/>} />
          </Routes>
        </div>

        <Footer />
      </div>

    </div>
  );
}

export default App;
