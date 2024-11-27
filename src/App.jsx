import './App.css'
import HomePage from "./pages/client-page/homePage.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AdminPage from "./pages/admin-page/adminPage.jsx";
import LoginPage from "./pages/login/loginPage.jsx";
import AddUser from "./page/add-user.jsx";
import Test from "./component/test.jsx";
import AboutUs from "./page/about-us.jsx";
import GalleryUi from "./page/gallery-ui.jsx";



function App() {

  return (
      <>
          <BrowserRouter>
              <Routes path="/*">
                  <Route path="/" element={<HomePage/>}></Route>
                  <Route path="/admin/*" element={<AdminPage/>}></Route>
                  <Route path="/login/" element={<LoginPage/>}></Route>
                  <Route path="/login/create-user" element={<AddUser/>}></Route>
                  <Route path="/test" element={<Test/>}></Route>
                  <Route path="/about-us" element={<AboutUs/>}></Route>
                  <Route path="/gallery" element={<GalleryUi/>}></Route>
                  <Route path="/*" element={
                      <div>404</div>
                  }></Route>

              </Routes>
          </BrowserRouter>

      </>
  )
}

export default App
