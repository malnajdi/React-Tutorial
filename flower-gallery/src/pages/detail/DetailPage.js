const DetailPage = (props) => {
    return (
        <section>
            <header class="main">
                <div>
                    Liked: By [
                username , 
                    ]
                </div>
                <div>
                    DisLiked: By [
                username , 
                    ]
                </div>
            
                    <h1>title_ar </h1>
                    <h1> title </h1>            
                <form method="POST" action="">
                        <button type="submit" value="like" name='like'><i class="far fa-heart"></i></button>
                        <button type="submit" value="dislike" name='dislike'><i class="fas fa-heart-broken"></i></button>										
                </form>            
            </header> 

            <span class="image main"><img src="" alt="" /></span>
            <p>description_ar</p>
            <p>description</p>
        </section>
    )
}


export default DetailPage;