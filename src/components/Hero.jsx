import {heroData} from '../mockData/heroData'

const HeaderTemplate = ({header}) => {
    return (
        <p className="hero_top">{header}</p>
    );
}

const DescriptionTemplate = ({description}) => {
    return (
        <p className="hero_middle">{description}</p>
    );
}

const ButtonTemplate = ({button}) => {
    switch (button.type) {
        case 'input':
            return <input className="mail" type="text" placeholder={button.title}></input>;
        case 'button':
            return <button className="btn3">{button.title}</button>;
        default:
            return '';
    }
}

const ButtonsTemplate = ({buttons}) => {
    return (
        <form>
            {buttons.map((button, index) => (
                <ButtonTemplate key={index} button={button} />
            ))}
        </form>
    );
};

const BottomTemplate = () => {
    return (
        <>
            <img src={require("../img/people.png")} alt=""></img>
            <p>1,600 человек запросило доступ за последние 24 часа</p>
        </>
    );
};

const IllustrationTemplate = ({illustration}) => {
    return (
        <img src={illustration.src} alt={illustration.alt}></img>
    );
};

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero_left">
                <HeaderTemplate header={heroData.header} />
                <DescriptionTemplate description={heroData.description} />
                <ButtonsTemplate buttons={heroData.heroCtaButtons} />
                <div className="hero_bottom">
                    <BottomTemplate />
                </div>
            </div>
            <div className="hero_right">
                <IllustrationTemplate illustration={heroData.illustration} />
            </div>
        </div>
    );
};

export default Hero;