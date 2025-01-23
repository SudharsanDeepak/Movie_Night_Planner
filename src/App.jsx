import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from "./Requirements/Home";
import SelectedMovies from "./Requirements/SelectedMovies";
import Movies from "./Requirements/Movies";


function App() {

  return (

<BrowserRouter>
<Routes>
  
  <Route path="/" element={<Home/>}/>
  <Route path="/Movies" element={<Movies/>}/>
  <Route path="/SelectedMovies" element={<SelectedMovies/>}/>

</Routes>
</BrowserRouter>

  );
}

export default App;
