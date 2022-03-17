import { Route, Routes } from "react-router-dom";
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from './ItemDetailContainer';


const Main = (props) => {
    return(
        <main>
            <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/cat/:id" element={<ItemListContainer/>}/>
                <Route path="/detalle/:id" element={<ItemDetailContainer/>}/>
            </Routes>
        </main>
    )
}

export default Main