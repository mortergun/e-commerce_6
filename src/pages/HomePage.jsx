import { useSelector } from "react-redux";
import CardProduct from "../components/HomePage/CardProduct";
import { useRef, useState } from "react";
import "./styles/HomePage.css";
import FilterCategory from "../components/HomePage/FilterCategory";
import FilterPrice from "../components/HomePage/FilterPrice";

const HomePage = () => {
  const [nameValue, setNameValue] = useState("");
  const [fromTo, setFromTo] = useState({
    from: 0,
    to: Infinity,
  });

  const products = useSelector((reducer) => reducer.products);

  const inputName = useRef();

  const handleFilterName = () => {
    setNameValue(inputName.current.value);
    // e.target.value
  };

  const cbFilter = (prod) => {
    // Filter by Name
    const inputNameLower = nameValue.toLowerCase().trim();
    const nameReal = prod.title.toLowerCase();
    const filterName = nameReal.includes(inputNameLower);
    // Filter by Price
    const price = Number(prod.price);
    const filterPrice = fromTo.from <= price && price <= fromTo.to;
    return filterName && filterPrice;
  };

  return (
    <div>
      <h3>Product Name</h3>
      <input
        className="filter__name"
        value={nameValue}
        ref={inputName}
        onChange={handleFilterName}
        type="text"
      />
      <FilterCategory />
      <FilterPrice
        setFromTo={setFromTo}
      />
      <div className="container">
        {
          products?.filter(cbFilter).length === 0
            ? <h2>Sorry, not exist products with this filters.</h2>
            : products?.filter(cbFilter).map((prod) => (
              <CardProduct key={prod.id} product={prod} />
            ))
        }
      </div>
    </div>
  );
};

export default HomePage;
