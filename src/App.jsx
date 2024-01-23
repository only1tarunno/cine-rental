import { useState } from "react";
import MovieList from "./cine/MovieList";
import Footer from "./components/Footer";
import Header from "./components/Header";

import Sidebar from "./components/Sidebar";
import { MovieContext, ThemeContext } from "./context";

function App() {
  const [cartData, setCartData] = useState([]);

  return (
    <ThemeContext.Provider>
      <MovieContext.Provider value={{ cartData, setCartData }}>
        <Header />
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar />
          <MovieList />
        </div>
        <Footer />
      </MovieContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
