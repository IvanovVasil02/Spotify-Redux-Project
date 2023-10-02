import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import AlbumPage from "./components/AlbumPage";
import Home from "./components/Home";
import ArtistPage from "./components/ArtistPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/album_page/:id' element={<AlbumPage />} />
        <Route path='/artist_page/:id' element={<ArtistPage />} />
        {/* <Route path='favoriteList' element={<FavoriteList />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
