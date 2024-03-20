import {expectData} from "../mockData/expectData";

const IllustrationTemplate = ({illustration}) => {
    return (
        <img src={illustration.src} alt={illustration.alt}></img>
    );
}

const RightTemplate = ({data}) => {
    return (
        <>
            <p className="text2 link">{data.button1.title}</p>
            <p className="text1">{data.title}
            </p>
            <p className="card_p">{data.description}</p>
            <p className="text2">{data.button2.title}</p>
        </>
    );
}

const Expect = () => {
    return (
        <div className="expect">
            <div className="expect_ins">
                <div className="expect_left">
                    <IllustrationTemplate illustration={expectData.illustration}/>
                </div>
                <div className="expect_right">
                    <RightTemplate data={expectData}/>
                </div>
            </div>
        </div>
    );
};

export default Expect;