import {futureData} from "../mockData/futureData";

const TitleTemplate = ({title}) => {
    return (
        <p className="text1">{title}</p>
    );
}

const ButtonTemplate = ({button}) => {
    return (
        <a className="text2" href={button.href}>{button.title}</a>
    );
}

const CardTemplate = ({card}) => {
    return (
        <div className="card">
            <div className="card_h">
                <img src={require("../img/line.png")} alt=""></img>
                <p>{card.title}</p>
            </div>
            <div className="card_p">
                <p>${card.description}</p>
            </div>
        </div>
    );
};

const CardsTemplate = ({cards}) => {
    return (
        <>
            {cards.map((card, index) => (
                <CardTemplate key={index} card={card} />
            ))}
        </>
    );
};

const Future = () => {
    return (
        <div className="future">
            <div className="future_left">
                <TitleTemplate title={futureData.title} />
                <ButtonTemplate button={futureData.button} />
            </div>
            <div className="future_right">
                <CardsTemplate cards={futureData.cardsData}/>
            </div>
        </div>
    );
};
export default Future;