import {useEffect, useState} from 'react';
import {headerData} from "../mockData/headerData";

const BurgerTemplate = ({isBurgerActive, isBurgerShown, setIsBurgerShown, setIsMenuShown}) => {
    return (
        <>
            <div className={'burger_open'+((isBurgerActive && isBurgerShown) ? ' show' : ' hidden')}
             onClick={() => {
                 setIsBurgerShown(false);
                 setIsMenuShown(true);
             }}>
                <div className="b1"></div>
                <div className="b2"></div>
                <div className="b3"></div>
            </div>
            <div className={'burger_close'+((isBurgerActive && !isBurgerShown) ? ' show' : ' hidden')}
                 onClick={() => {
                     setIsBurgerShown(true);
                     setIsMenuShown(false);
                 }}>
                <div className="b1"></div>
                <div className="b2"></div>
                <div className="b3"></div>
            </div>
        </>
    );
};

const LogoBurgerTemplate = ({logo, isBurgerActive, isBurgerShown, setIsBurgerShown, setIsMenuShown}) => {
    return (
        <div className="logo_burger">
            <a className="logo" href={logo.href}>GPT-4</a>
            <BurgerTemplate
                isBurgerActive={isBurgerActive}
                isBurgerShown={isBurgerShown}
                setIsBurgerShown={setIsBurgerShown}
                setIsMenuShown={setIsMenuShown}
            />
        </div>
    );
};

const ItemTemplate = ({item}) => {
    let classActive = '';
    if (item.isActive) {
        classActive += ' active'
    }
    return (
        <li className={classActive}>{item.title}</li>
    );
};

const ButtonTemplate = ({button}) => {
    let classBtn = '';
    if (button.isPrimary) {
        classBtn += ' btn2'
    } else {
        classBtn += ' btn1'
    }
    return (
        <button className={'btn'+classBtn}>{button.title}</button>
    );
};

const MenuTemplate = ({menu, buttons, isMenuShown}) => {
    return (
        <div className={'menu'+(isMenuShown ? ' show' : ' hidden')}>
            <ul>
                {menu.map((item, index) => (
                    <ItemTemplate key={index} item={item} />
                ))}
            </ul>
            <div className="buttons">
                {buttons.map((button, index) => (
                    <ButtonTemplate key={index} button={button} />
                ))}
            </div>
        </div>
    );
};

const Header = () => {
    const [isBurgerActive, setIsBurgerActive] = useState(false);
    const [isBurgerShown, setIsBurgerShown] = useState(false);
    const [isMenuShown, setIsMenuShown] = useState(false);

    useEffect(() => {
        //устанавливаем состояния
        const updateState = () => {
            const width = window.screen.width;
            if (width >= 1024) {
                setIsBurgerActive(false);
                setIsBurgerShown(false);
                setIsMenuShown(true);
            } else {
                setIsBurgerActive(true);
                setIsBurgerShown(true);
                setIsMenuShown(false);
            }
        };

        //при загрузке
        updateState();

        ///при ресайзе
        window.addEventListener('resize', function() {
            updateState()
        });

        //возвращаем функцию очистки прослушки на ресайз окна
        return () => {
            window.removeEventListener("resize", updateState);
        };
    }, []);

    return (
        <div className="nav">
            <LogoBurgerTemplate
                logo={headerData.logoData}
                isBurgerActive={isBurgerActive}
                isBurgerShown={isBurgerShown}
                setIsBurgerShown={setIsBurgerShown}
                setIsMenuShown={setIsMenuShown}
            />
            <MenuTemplate menu={headerData.menuData} buttons={headerData.buttonsData} isMenuShown={isMenuShown}/>
        </div>
    );
};

export default Header;