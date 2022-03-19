import './App.css';
import Users from "./components/Users/Users";
import {useState} from "react";
import Posts from "./components/Posts/Posts";


function App() {
const [userId, setUserId] = useState(null)


    return (
        <div>
            <div>
                <Users setUserId={setUserId}/>
                {userId && <Posts userId={userId}/>}
            </div>
        </div>
    );
}

export default App;
