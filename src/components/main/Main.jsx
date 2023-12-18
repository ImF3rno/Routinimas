import Search from "../search/Search";
import Posts from "../posts/Posts";
import PostData from "../data/PostData";
import { useState } from "react";

const Main=()=>{
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange=(e)=>{
        setSearchTerm(e.target.value);
    }

    const filterPosts=PostData.filter((post)=>{
        return post.title.includes(searchTerm)
    })

    console.log(searchTerm);

    return(
        <div className="container">
            <Search onSearch={handleInputChange} val={searchTerm}/>
            <Posts items={filterPosts}/>
        </div>
    )
}

export default Main;