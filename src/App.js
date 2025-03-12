import { Route, Routes } from "react-router-dom";

import NewMeetupsPage from "./pages/NewMeetups";
import Favorites from "./pages/Favorites";
import AllMeetupsPage from "./pages/AllMeetups";
import Layout from './components/layout/Layout'

const App = () => {
  //localhost:3000{path} e.g /, or /Fav

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetupsPage />} />
        <Route path="/new-meetup" element={<NewMeetupsPage />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Layout>
  );
};

export default App;
