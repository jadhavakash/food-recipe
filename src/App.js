import React,{useState,useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import RecipeItem from './components/RecipeItem';
import Recipes from './components/Recipes';
import axios from 'axios';
function App() {
  
  const [search,setSearch]=useState("chicken");
  const [recepies,setRecepies] = useState([]);
  const APP_ID = "624c653d";
  const APP_KEY = "77e752eba1cf274991780331e5ec0466";
  useEffect( async() =>{
      getRecepies();
  },[]);
  
  const getRecepies= async()=>{
    const res = await axios.get(`https://api.edamam.com/search?q=search&app_id=${APP_ID}&app_key=${APP_KEY}`);
    // console.log(res);
    setRecepies(res.data.hits);
  };
  const onInputChange =(e)=>{
    setSearch(e.target.value);
  };
  return (
    <div className="App">
        <Header search={search} onInputChange={onInputChange}/>
        <div className="container">
          <Recipes recepies={recepies}/>
        </div>
        {/* <RecipeItem/> */}
    </div>
  );
}

export default App;
