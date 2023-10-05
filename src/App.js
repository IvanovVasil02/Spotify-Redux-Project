import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import AlbumPage from "./components/AlbumPage";
import Home from "./components/Home";
import ArtistPage from "./components/ArtistPage";
import MyLibrary from "./components/MyLibrary";
import SearchPage from "./components/SearchPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search_page/' element={<SearchPage />} />
        <Route path='/album_page/:id' element={<AlbumPage />} />
        <Route path='/artist_page/:id' element={<ArtistPage />} />
        <Route path='/favorite_list/' element={<MyLibrary />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
