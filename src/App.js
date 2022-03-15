
import './App.css';
import Users from "./Users/Users";
import Posts from "./Posts/Posts";
import Comments from "./Comments/Comments";


function App() {
  return (
    <div>
      <div className='users_posts'>
          <div className='users'><Users /></div>
          <div className='posts'><Posts/></div>
      </div>
      <div className='comments'>
          <Comments/>
      </div>
    </div>
  );
}

export default App;
