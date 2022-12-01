import classes from "../styles/Input.module.css";
const Input = () => {
  return (
    <div>
      <div className={classes["form-container"]}>
        <form className={classes.form}>
          <input type="text" placeholder="City" />
          <button>Search</button>
        </form>
      </div>
    </div>
  );
};

export default Input;
