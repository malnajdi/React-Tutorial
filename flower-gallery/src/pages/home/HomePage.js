const HomePage = (props) => {
    return (
        <div>
            <section>
                <div class="posts">
                    {props.flowers.map(flower => 
                        <article>
                            <a href="#" class="image"><img src="" alt="" /></a>
                            <h3>{flower.title_ar}</h3>
                            <p>{flower.description_ar}</p>
                            <h3>{flower.title}</h3>
                            <p>{flower.description}</p>
                            <ul class="actions">
                                <li><a href="" class="button">
                                    More
                                </a></li>
                            </ul>
                        </article>
                    )}
                </div>
            </section>
            <div class="pagination">
                <span class="step-links">
                    <a href="?page=1">&laquo; first</a>
                    <a href="?page=">previous</a>
                    <span class="current">
                        Page number of num_pages.
                    </span>
                    <a href="?page=">next</a>
                    <a href="?page={">last &raquo;</a>
                </span>
            </div>
        </div>
    );
}


export default HomePage;