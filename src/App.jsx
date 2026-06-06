import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Sidebar from "./Components/Sidebar";
import CreatePost from "./Components/CreatePost";
import Post from "./Components/Post";
import PostList from "./Components/PostList";
import PostListProvider from "./Store/Post-list-store";

function App() {
    const [selectedTab, setSelectedTab] = useState("Home");

    return(
    <PostListProvider>
        <div className="app-container">
            <Sidebar
                selectedTab={selectedTab}
                setSelectedTab={setSelectedTab}
            ></Sidebar>
            <div className="Container">
                <Header></Header>
                {selectedTab === "Home" ? (
                    <PostList></PostList>
                ) : (
                    <CreatePost></CreatePost>
                )}

                <Footer></Footer>
            </div>
        </div>
    </PostListProvider>
    );
}
export default App;
