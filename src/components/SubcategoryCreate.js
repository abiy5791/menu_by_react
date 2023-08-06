import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { createSubcategory } from "./api";
import { useNavigate } from "react-router";
import InputForm from "./InputForm";
import { Link } from "react-router-dom";

const SubcategoryCreate = () => {
  const navigate = useNavigate();
  const { categoryId } = useParams();
  const [subcategoryData, setSubcategoryData] = useState({
    sub_food_name: "",
    sub_food_description: "",
    sub_food_price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSubcategoryData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createSubcategory(categoryId, subcategoryData)
      .then(() => {
        navigate(`/subcategories/${categoryId}`);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <Link to={`/categories`}>
        <button type="button" className="btn">
          <b>Back</b>
        </button>
      </Link>
      <h2>Create Subcategory</h2>
      <InputForm
        handlesubmit={handleSubmit}
        handlechange={handleChange}
        namevalue={subcategoryData.sub_food_name}
        descriptionvalue={subcategoryData.sub_food_description}
        image_or_pricevalue={subcategoryData.sub_food_price}
        number_or_text={"number"}
        labelimage_or_price={"Price"}
        namefield={"sub_food_name"}
        descfield={"sub_food_description"}
        image_or_pricefield={"sub_food_price"}
        create_or_update={"Create"}
      />
    </div>
  );
};

export default SubcategoryCreate;
