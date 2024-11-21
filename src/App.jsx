import './App.css'
import HomePage from "./pages/client-page/homePage.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AdminPage from "./pages/admin-page/adminPage.jsx";
import LoginPage from "./pages/login/loginPage.jsx";
import AddUser from "./page/add-user.jsx";
import Test from "./component/test.jsx";



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
                  <Route path="/*" element={
                      <div>404</div>
                  }></Route>

              </Routes>
          </BrowserRouter>

      </>
  )
}

export default App
