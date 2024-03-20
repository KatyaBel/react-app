import {signData} from "../mockData/signData";

const LinkTemplate = ({data}) => {
    return (
        <p className="sign_text1">{data.title}</p>
    );
}

const HeaderTemplate = ({header}) => {
    return (
        <p className="sign_text2">{header}</p>
    );
}

const ButtonTemplate = ({button}) => {
    return (
        <button className="btn4">{button}</button>
    );
}

const Sign = () => {
    return (
        <div className="sign">
            <div className="sign_left">
                <LinkTemplate data={signData.link}/>
                <HeaderTemplate header={signData.header}/>
            </div>
            <div className="sign_right">
                <ButtonTemplate button={signData.button}/>
            </div>
        </div>
    );
};

export default Sign;