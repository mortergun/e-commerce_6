import { useForm } from "react-hook-form";
import './styles/FilterPrice.css'

const FilterPrice = ({ setFromTo }) => {

  const { register, reset, handleSubmit } = useForm();

  const submit = data => {
    const from = Number(data.from.trim());
    const to = +data.to.trim();
    const obj = {
      from: from || 0,
      to: to || Infinity
    }
    setFromTo(obj)
  }

  return (
    <article>
      <h3>Price</h3>
      <form onSubmit={handleSubmit(submit)}>
        <div className="form__div">
          <label className="form__label" htmlFor="from">From:</label>
          <input className="form__value" {...register('from')} type="number" id="from" />
        </div>
        <div className="form__div">
          <label className="form__label" htmlFor="to">To:</label>
          <input className="form__value" {...register('to')} type="number" id="to" />
        </div>
        <button className="form__btn">Filter Price</button>
      </form>
    </article>
  )
}

export default FilterPrice