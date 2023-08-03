import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createCategory } from "./api";

const CategoryCreate = () => {
  const navigate = useNavigate();
  const [categoryData, setCategoryData] = useState({
    cat_food_name: "",
    cat_food_description: "",
    cat_food_image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCategoryData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    createCategory(categoryData)
      .then(() => {
        navigate("/categories");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h2>Create Category</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="cat_food_name"
            value={categoryData.cat_food_name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="cat_food_description"
            value={categoryData.cat_food_description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Image URL:</label>
          <input
            type="text"
            name="cat_food_image"
            value={categoryData.cat_food_image}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CategoryCreate;
