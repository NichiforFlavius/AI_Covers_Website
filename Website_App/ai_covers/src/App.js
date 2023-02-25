
import v1 from './assets/v2_album_cover_70.jpg'
import v2 from './assets/v2_album_cover_241.jpg'
import v3 from './assets/v2_album_cover_294.jpg'
import v4 from './assets/v2_album_cover_323.jpg'

import './App.css';

function App() {
    return ( 
        <div className = "App" >
            <header className = "App-header" >
            <h1>
                AI generated album covers!
            </h1>
            <table>
                <tr>
                    <td>
                        <div className="card">
                            <img src = { v1 } alt = "logo" className="card" style={{width: "300px", padding: "2px"}}/>
                            <div className="card-body">
                                <h5 className="card-title" style={{color: "black"}}>Sovereignty</h5>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div className="card">
                            <img src = { v2 } alt = "logo" className="card" style={{width: "300px", padding: "2px"}}/>
                            <div className="card-body">
                                <h5 className="card-title" style={{color: "black"}}>Chappel of the Damned</h5>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div className="card">
                            <img src = { v3 } alt = "logo" className="card" style={{width: "300px", padding: "2px"}}/>
                            <div className="card-body">
                                <h5 className="card-title" style={{color: "black"}}>Yearn for the end</h5>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div className="card">
                            <img src = { v4 } alt = "logo" className="card" style={{width: "300px", padding: "2px"}}/>
                            <div className="card-body">
                                <h5 className="card-title" style={{color: "black"}}>It has awakened</h5>
                            </div>
                        </div>
                    </td>
                </tr>
            </table>

            </header> 
        </div>
    );
}

export default App;