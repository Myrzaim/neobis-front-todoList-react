// import Radio from "@mui/material/Radio";
// import { useState } from "react";

const CategoryForm = ({
  value,
  updateText,
  handleAction,
  category,
  updateCategory,
}) => {
  return (
    <label>
      <input
        placeholer="new todo"
        value={value}
        onChange={(e) => updateText(e.target.value)}
      />
      <div>
        <label>Business</label>
        <input
          type="radio"
          checked={category === "business"}
          onChange={(e) => updateCategory(e.target.value)}
          value="business"
          name="radio-buttons"
          inputProps={{ "aria-label": "A" }}
        />
        <label>Personal</label>
        <input
          type="radio"
          checked={category === "personal"}
          onChange={(e) => updateCategory(e.target.value)}
          value="personal"
          name="radio-buttons"
          inputProps={{ "aria-label": "B" }}
        />
      </div>
      <button onClick={handleAction}>Add todo</button>
    </label>
  );
};
export default CategoryForm;
