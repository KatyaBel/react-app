import {brandsData} from "../mockData/brandsData";

const BrandTemplate = ({brand}) => {
    return (
        <img src={brand.src} alt={brand.alt}></img>
    )
}

const BrandsTemplate = ({brands}) => {
    return (
        <>
            {brands.map((brand, index) => (
                <BrandTemplate key={index} brand={brand} />
            ))}
        </>
    );
};

const Brands = () => {
    return (
        <div className="brands">
            <BrandsTemplate brands={brandsData} />
        </div>
    );
};

export default Brands;