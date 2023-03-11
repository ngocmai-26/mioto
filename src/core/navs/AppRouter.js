import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from '../../view/Home';
import Introduce from '../../view/Introduce';
import Register from '../../view/Register';

 const AppRouter = (props)=>{

    return (
        <BrowserRouter>
            <Routes> 
                <Route path='/' element={<Home/>}></Route>
                <Route path='/index' element={<Home/>}></Route>
                <Route path='/reg' element={<Register/>}></Route>
                <Route path='/intro' element={<Introduce/>}></Route>
            </Routes>        
        </BrowserRouter>
    );

}
export default AppRouter;