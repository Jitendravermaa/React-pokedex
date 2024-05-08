import Search from "../search/search";


// css import 
import './Pokedex.css';
function Pokedex() {

    return(
        <div className="pokedex-wrapper">
            <h1>pokedex</h1>
           <Search/>
        </div>
    )
}

export default Pokedex;