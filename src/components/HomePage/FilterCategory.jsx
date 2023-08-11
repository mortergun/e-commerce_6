import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import {
  getAllProductsThunk,
  getFilteredProductsThunk,
} from "../../store/slices/products.slice";
import { useDispatch } from "react-redux";
import './styles/FilterCategory.css'

const FilterCategory = () => {
  const [categories, getAllCategories] = useFetch();

  const dispatch = useDispatch();

  useEffect(() => {
    getAllCategories("/categories");
  }, []);

  const handleAllCategories = () => {
    dispatch(getAllProductsThunk());
  };

  const handleFilterCategories = (id) => {
    dispatch(getFilteredProductsThunk(id));
  };

  return (
    <article className="category__container">
      <h3 className="category__title">Category</h3>
      <ul className="category__ul">
        <li className="category__li" onClick={handleAllCategories}>All categories</li>
        {categories?.map((category) => (
          <li
            className="category__li"
            onClick={() => handleFilterCategories(category.id)}
            key={category.id}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </article>
  );
};

export default FilterCategory;
