const Post=(props)=>{
    return(
        <div class="card col-3 m-1">
            <div class="card-body">
            <h5 class="card-title">{props.title}</h5>
            <p class="card-text">{props.description}</p>
            <a href="#" class="btn btn-primary">Card link</a>
            </div>
        </div>
    )
}

export default Post;