import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Corona from './Component/Corona';
import Technology from './Component/Technology';
import World from './Component/World';
import Ahmedabad from './Component/Ahmedabad';
import Gujarat from './Component/Gujarat';
import Business from './Component/Business';
import Other from './Component/Other';
import Ahmedabad2 from './Component/Ahmedabad2';
import Ahmedabad3 from './Component/Ahmedabad3';
import World2 from './Component/World2';
import World3 from './Component/World3';
import Technology2 from './Component/Technology2';
import Technology3 from './Component/Technology3';
import Business3 from './Component/Business3';
import Business2 from './Component/Business2';
import Gujarat2 from './Component/Gujarat2';
import Gujarat3 from './Component/Gujarat3';
import Corona2 from './Component/Corona2';
import Corona3 from './Component/Corona3';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/corona" element={<Corona />} />
                    <Route path="/corona2" element={<Corona2 />} />
                    <Route path="/corona3" element={<Corona3 />} />
                    <Route path="/gujarat" element={<Gujarat />} />
                    <Route path="/gujarat2" element={<Gujarat2 />} />
                    <Route path="/gujarat3" element={<Gujarat3 />} />
                    <Route path="/ahmedabad" element={<Ahmedabad />} />
                    <Route path="/ahmedabad2" element={<Ahmedabad2 />} />
                    <Route path="/ahmedabad3" element={<Ahmedabad3 />} />
                    <Route path="/world" element={<World />} />
                    <Route path="/world2" element={<World2 />} />
                    <Route path="/world3" element={<World3 />} />
                    <Route path="/technology" element={<Technology />} />
                    <Route path="/technology2" element={<Technology2 />} />
                    <Route path="/technology3" element={<Technology3 />} />
                    <Route path="/business" element={<Business />} />
                    <Route path="/business2" element={<Business2 />} />
                    <Route path="/business3" element={<Business3 />} />
                    <Route path="/other" element={<Other />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
