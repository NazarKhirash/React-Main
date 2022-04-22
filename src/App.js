import './App.css';
import {Route, Routes, Link} from "react-router-dom"


import HomePage from "./pages/HomePage/HomePage";
import UsersPage from "./pages/UsersPage/UsersPage";
import PostPage from "./pages/PostsPage/PostPage";
import Layout from "./components/Layout/Layout";
import UserDetailsPage from "./pages/UserDetailsPage/UserDetailsPage";
import PostDetailsPage from "./pages/PostDetailsPage/PostDetailsPage";
import PostsCommentsPage from "./pages/PostsCommentsPage/PostsCommentsPage";
import UsersPostPage from "./pages/UsersPostPage/UsersPostPage";
import AlbumPage from "./pages/AlbumPage/AlbumPage";
import PhotoPage from "./pages/PhotoPage/PhotoPage";


function App() {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<HomePage/>}/>

                    <Route path={'users'} element={<UsersPage/>}>
                        <Route path={':id'} element={<UserDetailsPage/>}>
                            <Route path={'posts'} element={<UsersPostPage/>}/>
                        </Route>

                        <Route path={':id/albums'} element={<AlbumPage/>}>
                            <Route path={':albumId/photos'} element={<PhotoPage/>}/>
                        </Route>
                    </Route>

                    <Route path={'posts'} element={<PostPage/>}>
                        <Route path={':id'} element={<PostDetailsPage/>}>
                            <Route path={'comments'} element={<PostsCommentsPage/>}/>
                        </Route>
                    </Route>
                </Route>
            </Routes>
        </>
    );
}

export default App;
