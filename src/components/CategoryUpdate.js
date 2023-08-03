import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchCategory, updateCategory } from "./api";
import { useNavigate } from "react-router";

const CategoryUpdate = () => {
  const navigate = useNavigate();
  const { category_id } = useParams();
  const [categoryData, setCategoryData] = useState({
    cat_food_name: "",
    cat_food_description: "",
    cat_food_image: "",
  });

  useEffect(() => {
    fetchCategory(category_id)
      .then((response) => setCategoryData(response.data))
      .catch((error) => console.error(error));
  }, [category_id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCategoryData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateCategory(category_id, categoryData)
      .then(() => {
        navigate("/categories");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h2>Edit Category</h2>
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
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default CategoryUpdate;
