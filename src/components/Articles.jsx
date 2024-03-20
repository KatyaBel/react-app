import {articlesData} from "../mockData/articlesData";

const TitleTemplate = ({title}) => {
    return (
        <p className="text1">{title}</p>
    );
}

const ArticleTemplate = ({article}) => {
    return (
        <div className="card">
            <img src={article.illustration.src} alt={article.illustration.alt}></img>
            <div className="card_content">
                <p className="card_t">{article.date}</p>
                <p className="card_h">{article.description}</p>
                <p className={"card_t link"}>Читать полную статью</p>
            </div>
        </div>
    );
}

const ArticlesTopTemplate = ({articles}) => {
    return (
        <>
            <div className="card_main">
                <ArticleTemplate article={articles[0]}/>
            </div>
            <div className="cards_right">
                {articles.map((article, index) => {
                    console.log(index);
                    if (index > 0 && index < 5) {
                        return <ArticleTemplate article={article}/>
                    }
                })}
            </div>
        </>
    );
}

const ArticlesBottomTemplate = ({articles}) => {
    return (
        <>
            {articles.map((article, index) => {
                if (index > 4) {
                    return <ArticleTemplate article={article}/>
                }
            })}
        </>
    );
}

const Articles = () => {
    return (
        <div className="articles">
            <TitleTemplate title={articlesData.title}/>
            <div className="articles_content">
                <div className="articles_top">
                    <ArticlesTopTemplate articles={articlesData.cardsData}/>
                </div>
                <div className="articles_bottom">
                    <ArticlesBottomTemplate articles={articlesData.cardsData}/>
                </div>
            </div>
        </div>
    );
};

export default Articles;