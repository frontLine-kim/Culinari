import "./App.css";
import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";
import { Route, Routes, BrowserRouter} from "react-router-dom";
import Header from "./components/Header";


import Mypage from "./pages/mypage/index";
import Login from "./pages/sign/login";
import Signup from "./pages/sign/signup";
import ServiceHome from "./components/service/index";
import { Main } from "./pages";
import Cart from "./pages/cart";
import ProductDetail from "./pages/productDetail";





const GlobalStyle = createGlobalStyle`
    ${reset};
    html,body{
        padding: 0;
        margin: 0;
      };

      * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      }

    li{
      list-style:none;
    }

    img{
      border: none;
      vertical-align: top;
    }

  a {
    color: initial;
    text-decoration: none;
  }

  input,
  textarea {
    padding: 0;
    outline: none;
    border: 1px solid #000000;
    border-radius: 0;
    box-shadow: none;
  }

  button {
    padding: 0;
    border: none;
    border-radius: 0;
    box-shadow: none;
    background-color: inherit;
    cursor: pointer;
  }
`;

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/mypage/*" element={<Mypage/>}/>
        <Route path="/login" element={<Login/>}/>
        {/* <Route path="/signup" element={<Signup/>}/> */}
        <Route path="/service" element={<ServiceHome />}/>
        <Route path="/" element={<Main/>}/>
        <Route path="/carts" element={<Cart/>}/>
        <Route path="/product" element={<ProductDetail/>}/>
        {/* <Route path="/newproduct" element={}/> */}
        {/* <Route path="/bestproduct" element={}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
