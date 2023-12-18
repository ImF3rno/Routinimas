import Post from '../post/Post';

const Posts=(props) => {
    return(
        <div className="container">
            <div className="row">
                {props.items.map((post)=>
                    <Post
                    key={post.id}
                    title={post.title}
                    description={post.content}
                    />
                )}
            </div>
        </div>
    )
}

export default Posts;