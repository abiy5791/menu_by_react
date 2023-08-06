import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchSubcategories } from "./api";
import { Link } from "react-router-dom";
import { Row, Button } from "reactstrap";

const SubcategoryList = () => {
  const style = {
    margin: "8px",
    padding: "8px",
  };
  const { categoryId } = useParams();
  const [subcategories, setSubcategories] = useState([]);

  useEffect(() => {
    fetchSubcategories(categoryId)
      .then((response) => setSubcategories(response.data))
      .catch((error) => console.error(error));
  }, [categoryId]);

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
      <Link to={`/categories`}>
        <button style={style} type="button" className="btn">
          <b>{"<"}Back</b>
        </button>
      </Link>
      <Link to={`/subcategories/create/${categoryId}`}>
        <button style={style} type="button" className="btn btn-primary">
          Add
        </button>
      </Link>

      {subcategories.map((subcategory) => (
        <div className="card" key={subcategory.id} style={style}>
          <div className="card-body">
            <h5 className="card-title">{subcategory.sub_food_name}</h5>
            <p className="card-text">{subcategory.sub_food_description}</p>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              {"UpdatedAt "} {updated_time(subcategory.updated_at)}
            </h6>
            <h6>Price: {subcategory.sub_food_price} Birr</h6>
            <Link to={`/subcategories/${categoryId}/update/${subcategory.id}`}>
              <Button style={style} className="btn btn-success">
                Edit
              </Button>
            </Link>
            <Link to={`/subcategories/${categoryId}/delete/${subcategory.id}`}>
              <Button style={style} className="btn btn-danger">
                Delete
              </Button>
            </Link>
          </div>
        </div>
      ))}
    </Row>
  );
};

export default SubcategoryList;
