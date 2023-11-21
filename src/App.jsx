import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import OwnBlog from "./pages/OwnBlog";
import Layout from "./components/Layout/Layout";
import FullBlogPage from "./pages/FullBlogPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="abdugafforslatest" element={<OwnBlog />}></Route>
          <Route path="fullblog/:id" element={<FullBlogPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
