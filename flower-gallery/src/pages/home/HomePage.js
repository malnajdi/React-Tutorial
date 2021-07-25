import { useTranslation } from "react-i18next";

const HomePage = (props) => {
    const [ t, i18n ] = useTranslation();
    const flowers = props.flowers.map(flower => {
        if(i18n.language === 'ar') {
            return ({
                'id': flower.id,
                'title': flower.title_ar,
                'description': flower.description_ar,
                'image': flower.image
            });
        }
        return flower;
    });

    return (
        <div>
            <section>
                <div className="posts">
                    {flowers.map(flower => 
                        <article>
                            <a href="#" class="image"><img src="" alt="" /></a>
                            <h3>{flower.title}</h3>
                            <p>{flower.description}</p>
                            <ul class="actions">
                                <li><a href="" class="button">
                                    {t("more")}
                                </a></li>
                            </ul>
                        </article>
                    )}
                </div>
            </section>
            <div className="pagination">
                <span className="step-links">
                    <a href="?page=1">&laquo; first</a>
                    <a href="?page=">previous</a>
                    <span className="current">
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