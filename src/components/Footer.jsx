import {footerData} from "../mockData/footerData";

const TitleTemplate = ({title}) => {
    return (
        <p className="text1">{title}</p>
    );
}

const ButtonTemplate = ({button}) => {
    return (
        <button className="btn5">{button.title}</button>
    );
}

const LogoTemplate = ({data}) => {
    return (
        <div className="logo">
            <img src={data.logoData.src} alt={data.logoData.alt}></img>
            <p className="footer_text2">{data.locationData}</p>
        </div>
    );
}

const LinkTemplate = ({title, link}) => {
    let classLink = '';
    if (title !== 'Контакты') {
        classLink += ' link'
    }
    return (
        <p className={'footer_text2'+classLink}>{link.content}</p>
    );
}

const LinksTemplate = ({title, links}) => {
    return (
        <>
            {links.map((link, index) => (
                <LinkTemplate key={index} title={title} link={link} />
            ))}
        </>
    );
}

const CardTemplate = ({card}) => {
    return (
        <div className="card">
            <p className="footer_text1">{card.title}</p>
            <LinksTemplate title={card.title} links={card.links}/>
        </div>
    );
}

const CardsTemplate = ({cards}) => {
    return (
        <>
            {cards.map((card, index) => (
                <CardTemplate key={index} card={card} />
            ))}
        </>
    );
}

const Footer = () => {
    return (
        <div className="footer">
            <TitleTemplate title={footerData.title}/>
            <ButtonTemplate button={footerData.footerButton}/>
            <div className="footer_bottom">
                <LogoTemplate data={footerData}/>
                <CardsTemplate cards={footerData.cardsData}/>
            </div>
        </div>
    );
};
export default Footer;