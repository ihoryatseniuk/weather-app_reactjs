import classes from "./Input.module.css";
import { useState } from "react";

const Input = ({ search }) => {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("city", JSON.stringify([city]));
    search(city);
    setCity("");
  };

  return (
    <div>
      <div className={classes["form-container"]}>
        <form onSubmit={handleSubmit} className={classes.form}>
          <input
            autoFocus
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
