import {whatData} from "../mockData/whatData";

const TopTemplate = ({data}) => {
    const style = {
        'margin-bottom': '20px'
    }
    return (
        <>
            <div className="card_h">
                <img className="line_img" src={require("../img/line.png")} alt=""></img>
                <p style={style}>{data.header}</p>
            </div>
            <div className="card_p">
                <p>{data.content}</p>
            </div>
        </>
    );
};

const MiddleTemplate = ({data}) => {
    return (
        <>
            <p className="text1">{data.header}</p>
            <a className="text2" href={data.button.href}>{data.button.title}</a>
        </>
    );
};

const CardTemplate = ({card}) => {
    return (
        <div className="card">
            <img src={require("../img/line.png")} alt=""></img>
            <p className="card_h">{card.header}</p>
            <p className="card_p">{card.content}</p>
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

const What = () => {
    return (
        <div className="what">
            <div className="what_ins">
                <div className="what_top">
                    <TopTemplate data={whatData.whatTopData}/>
                </div>
                <div className="what_middle">
                    <MiddleTemplate data={whatData.whatMiddleData}/>
                </div>
                <div className="what_bottom">
                    <CardsTemplate cards={whatData.whatBottomData}/>
                </div>
            </div>
        </div>
    );
};

export default What;