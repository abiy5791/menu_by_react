import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchSubCategory, updateSubcategory } from "./api";
import { useNavigate } from "react-router";

const SubcategoryUpdate = () => {
  const navigate = useNavigate();
  const { categoryId, subcategoryId } = useParams();
  const [subcategoryData, setSubcategoryData] = useState({
    sub_food_name: "",
    sub_food_description: "",
    sub_food_price: "",
  });

  useEffect(() => {
    fetchSubCategory(categoryId, subcategoryId)
      .then((response) => setSubcategoryData(response.data))
      .catch((error) => console.error(error));
  }, [categoryId, subcategoryId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSubcategoryData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateSubcategory(categoryId, subcategoryId, subcategoryData)
      .then(() => {
        navigate(`/subcategories/${categoryId}`);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h2>Edit Subcategory</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="sub_food_name"
            value={subcategoryData.sub_food_name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="sub_food_description"
            value={subcategoryData.sub_food_description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            name="sub_food_price"
            value={subcategoryData.sub_food_price}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default SubcategoryUpdate;
