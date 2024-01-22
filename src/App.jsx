import MovieList from "./cine/MovieList";
import Footer from "./components/Footer";
import Header from "./components/Header";

import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Header />
      <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
        <Sidebar />
        <MovieList />
      </div>
      <Footer />
    </>
  );
}

export default App;
