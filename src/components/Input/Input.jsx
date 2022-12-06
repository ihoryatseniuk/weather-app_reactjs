import classes from "./Input.module.css";

const Input = ({ setCity, city, search }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    search();
  };

  return (
    <div>
      <div className={classes["form-container"]}>
        <form onSubmit={handleSubmit} className={classes.form}>
          <input
            type="text"
            onChange={(e) => setCity(e.target.value)}
            value={city}
            placeholder="City"
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </div>
  );
};

export default Input;
