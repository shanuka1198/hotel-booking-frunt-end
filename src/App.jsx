import './App.css'
import HomePage from "./pages/client-page/homePage.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AdminPage from "./pages/admin-page/adminPage.jsx";
import LoginPage from "./pages/login/loginPage.jsx";
import AddUser from "./page/add-user.jsx";
import AboutUs from "./page/about-us.jsx";
import GalleryUi from "./page/gallery-ui.jsx";
import RoomClientPage from "./page/room-client-page.jsx";
import ContactUs from "./page/contact-us.jsx";
import RoomEdit from "./page/room-edit.jsx";
import HotelDetails from "./component/hotel-details.jsx";
import AllRooms from "./page/all-rooms.jsx";
import FeaturedInRoom from "./page/featured-in-room.jsx";
import WriteReviews from "./page/write-reviews.jsx";
import ViewReviews from "./page/view-reviews.jsx";
import FeaturedBooking from "./page/featured-booking.jsx";
import RoomPage from "./page/room-page.jsx";




function App() {

  return (
      <>
          <BrowserRouter>
              <Routes path="/*">
                  <Route path="/" element={<HomePage/>}></Route>
                  <Route path="/admin/*" element={<AdminPage/>}></Route>
                  <Route path="/login/" element={<LoginPage/>}></Route>
                  <Route path="/login/create-user" element={<AddUser/>}></Route>
                  <Route path="/about-us" element={<AboutUs/>}></Route>
                  <Route path="/gallery" element={<GalleryUi/>}></Route>
                  <Route path="/rooms" element={<RoomClientPage/>}></Route>
                  <Route path="/contact-us" element={<ContactUs/>}></Route>
                  <Route path="/edit-room" element={<RoomEdit/>}></Route>
                  <Route path="/rooms/room-page" element={<RoomPage/>}></Route>
                  <Route path="/hotel" element={<HotelDetails/>}></Route>
                  <Route path="/all-rooms" element={<AllRooms/>}></Route>
                  <Route path="/rooms/featured-rooms" element={<FeaturedInRoom/>}></Route>
                  <Route path="/reviews" element={<WriteReviews/>}></Route>
                  <Route path="/view-reviews" element={<ViewReviews/>}></Route>
                  <Route path="/rooms/room-page/booking" element={<FeaturedBooking/>}></Route>
                  <Route path="/*" element={
                      <div>404</div>
                  }></Route>

              </Routes>
          </BrowserRouter>

      </>
  )
}

export default App
