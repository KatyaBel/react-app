import Header from "../components/Header";
import Hero from "../components/Hero";
import Brands from "../components/Brands";
import What from "../components/What";
import Future from "../components/Future";
import Expect from "../components/Expect";
import Sign from "../components/Sign";
import Articles from "../components/Articles";
import Footer from "../components/Footer";
import Burger from "../components/Burger";

const Home = () => {
    const stylesCopyright = {
        'text-align': 'center',
        'margin': 0
    }
    return (
        <>
            <Header/>
            <Hero/>
            <Brands/>
            <What/>
            <Future/>
            <Expect/>
            <Sign/>
            <Articles/>
            <Footer/>
            <Burger/>
            <p className="footer_text2" style={stylesCopyright}>© 2023 GPT-3. Все права защищены.</p>
        </>
    );
};
export default Home;
