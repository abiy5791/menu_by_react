import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchCategories } from "./api";
import FoodCard from "./FoodCard";
import { Row, Col } from "reactstrap";

const CategoryList = () => {
  const style = {
    margin: "8px",
  };

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories()
      .then((response) => setCategories(response.data))
      .catch((error) => console.error(error));
  }, []);

  const updated_time = (updatedat) => {
    const updatedAt = updatedat;
    const date = new Date(updatedAt);
    const timeString = date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
    return timeString;
  };

  return (
    <Row>
      <Row sm="5" lg="5" xl="3">
        <Link to={`/categories/create`}>
          <button style={style} type="button" class="btn btn-primary">
            Add
          </button>
        </Link>
      </Row>
      {categories.map((category) => (
        <Col sm="5" lg="5" xl="3" key={category.id} style={style}>
          {/* <a href={`/subcategories/${category.id}`} class="link-as-text"> */}
          <FoodCard
            image={category.cat_food_image}
            title={category.cat_food_name}
            subtitle={updated_time(category.updated_at)}
            text={category.cat_food_description}
            id={category.id}
          />
          {/* </a> */}
        </Col>
      ))}
    </Row>
  );
};

export default CategoryList;
