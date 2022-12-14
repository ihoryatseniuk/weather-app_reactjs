import classes from "./Input.module.css";
import { useState } from "react";

const Input = ({ search }) => {
  const [city, setCity] = useState({ id: 0, name: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("city", JSON.stringify(city));
    search(city);
    setCity({ id: 0, name: "" });
  };

  return (
    <div>
      <div className={classes["form-container"]}>
        <form onSubmit={handleSubmit} className={classes.form}>
          <input
            autoFocus
            type="text"
            onChange={(e) =>
              setCity({ id: Math.random(), name: e.target.value })
            }
            value={city.name}
            placeholder="City"
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </div>
  );
};

export default Input;
