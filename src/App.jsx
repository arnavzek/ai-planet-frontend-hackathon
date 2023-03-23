import Home from "./components/Home";
import Add from "./components/Add";
import { BrowserRouter, Route , Routes} from "react-router-dom";
import {Container, CssBaseline} from "@mui/material";
import SubmissionPage from "./components/SubmissionPage";
import EditPage from "./components/EditPage";

function App() {
  return(
    <BrowserRouter>
      <CssBaseline/>
      <Routes>
           <Route path='/' index element= {<Home/>}/>
           <Route path='add' index element= {<Add/>}/>
           <Route path='/submission/:id' index element= {<SubmissionPage/>}/>
           <Route path='/edit/:id' index element= {<EditPage/>}/>
     </Routes>

    </BrowserRouter>
  );
}

export default App;
