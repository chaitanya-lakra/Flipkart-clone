import Header   from "./components/Header/Header";
import Home from './components/Home/Home'
import { DataProvider } from "./context/DataProvider";
import { BrowserRouter , Routes , Route} from 'react-router-dom';
import DetailView from './components/details/detailView';
import { Box , styled} from "@mui/material";
import Cart from "./components/cart/cart";

const BoxStyle = styled(Box)(({ theme })=>({
  marginTop : '55px',
  [theme.breakpoints.down('md')] : {
    marginTop : '100px'
  }
}))

function App() {
  return(

  <>
  <DataProvider>
    <BrowserRouter>
      <Header/>
      <BoxStyle>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products/:id" element={<DetailView/>}/>
        <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </BoxStyle>
    </BrowserRouter>
  </DataProvider>
  </>
  );
 
}

export default App;

