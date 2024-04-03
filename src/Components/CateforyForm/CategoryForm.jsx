import "./CategoryForm.css";

const CategoryForm = ({
  value,
  updateText,
  handleAction,
  category,
  updateCategory,
}) => {
  return (
    <>
      <h3>Whats'up,</h3>
      <input
        type="text"
        placeholder="Name here"
        value="Myrzaim"
        className="name"
      />
      <h4>CREATE A TO DO</h4>
      <p>What's on your to do list?</p>
      <label>
        <input
          className="addTodo"
          placeholer="New todo"
          value={value}
          onChange={(e) => updateText(e.target.value)}
        />
        <div className="category">
          <div className="category__box">
            <p>Business</p>
            <input
              type="radio"
              checked={category === "business"}
              onChange={(e) => updateCategory(e.target.value)}
              value="business"
              name="radio-buttons"
              inputProps={{ "aria-label": "A" }}
            />
          </div>
          <div className="category__box">
            <p>Personal</p>
            <input
              type="radio"
              checked={category === "personal"}
              onChange={(e) => updateCategory(e.target.value)}
              value="personal"
              name="radio-buttons"
              inputProps={{ "aria-label": "B" }}
            />
          </div>
        </div>
        <button className="add-btn" onClick={handleAction}>
          Add todo
        </button>
      </label>
    </>
  );
};
export default CategoryForm;
