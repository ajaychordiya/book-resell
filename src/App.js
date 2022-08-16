//import logo from './logo.svg';
import "./App.css";
import logo from "./static/images/logo.png";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import Sidebar from "./component/Sidebar";
import SearchIcon from "@mui/icons-material/Search";

function App() {
  return (
    <div className="App">
      <div className="flex justify-between px-2 py-2 content-center items-center justify-items-center">
        <div className="flex content-center items-center">
          <img
            src={logo}
            alt="Logo"
            width="58"
            height="68"
            className="h-14 w-12"
          />
          <h1 className="font-light text-2xl ml-3 text-[#0D276B]">
            Bookiest .....
          </h1>
        </div>

        <div className="rounded-lg bg-[#F0F4FF] w-4/12 h-10 px-4">
          <SearchIcon className="text-[#0D276B] w-6 h-7 my-3" />
          <input
            type="text"
            placeholder="Search book titles, authors, publishers..."
            className="border-none bg-[#F0F4FF] w-11/12 px-1 active:border-none focus:outline-none"
          />
        </div>

        <select className="w-72 h-10 mr-2 rounded-lg bg-[#F0F4FF] px-4 border-none">
          <option>select city</option>
        </select>
      </div>
      <div className="flex m-2">
        <div className="left-sidebar flex flex-col justify-around flex-none px-2">
          <div className="top">
            <div>
              <DashboardIcon className="text-[#0D276B] w-6 h-6 my-3" />
            </div>
            <div>
              <NotificationsActiveIcon className="text-[#0D276B] w-6 h-6 my-3" />
            </div>
            <div>
              <BookmarkBorderIcon className="text-[#0D276B] w-6 h-6 my-3" />
            </div>
            <div>
              <PeopleAltIcon className="text-[#0D276B] w-6 h-6 my-3" />
            </div>
            <div>
              <SettingsIcon className="text-[#0D276B] w-6 h-6 my-3" />
            </div>
            <div>
              <ShoppingCartIcon className="text-[#0D276B] w-6 h-6 my-3" />
            </div>
          </div>
          <div className="bottom mt-16">
            <div>
              <PeopleAltIcon className="text-[#0D276B] w-6 h-6 my-3" />
            </div>
            <div>
              <LogoutIcon className="text-[#0D276B] w-6 h-6 my-3" />
            </div>
          </div>
        </div>
        <div className="middle flex-auto w-80">aaa</div>

        <div className="right-sidebar flex-initial bg-[#F0F4FF] w-72 mr-2 rounded-lg p-4">
          <div className="flex justify-between pb-3">
            <div className="text-[#1c1c1c]">Top Recommendation </div>
            <div className="bg-[#FF1313] text-white rounded-full h-6 w-6 text-center">
              3
            </div>
          </div>

          <Sidebar />
        </div>
      </div>
    </div>
  );
}

export default App;
