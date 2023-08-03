import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchSubcategories } from "./api";
import { Link } from "react-router-dom";

const SubcategoryList = () => {
  const { categoryId } = useParams();
  const [subcategories, setSubcategories] = useState([]);

  useEffect(() => {
    fetchSubcategories(categoryId)
      .then((response) => setSubcategories(response.data))
      .catch((error) => console.error(error));
  }, [categoryId]);

  const created_time = (createdat) => {
    const createdAt = createdat;
    const date = new Date(createdAt);
    const timeString = date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
    return timeString;
  };

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
    <div>
      <h2>Subcategories</h2>
      <Link to={`/subcategories/create/${categoryId}`}>
        <button type="button" class="btn btn-success">
          Add
        </button>
      </Link>
      <ul className="list-group">
        {subcategories.map((subcategory) => (
          <li key={subcategory.id} className="list-group-item">
            <h3>{subcategory.sub_food_name}</h3>
            <p>{subcategory.sub_food_description}</p>
            <p>Price:{subcategory.sub_food_price} birr</p>
            <hr></hr>
            <p>createdAt {created_time(subcategory.created_at)}</p>
            <p>updatedAt {updated_time(subcategory.updated_at)}</p>
            <div className="btn_div">
              <Link
                to={`/subcategories/${categoryId}/update/${subcategory.id}`}
              >
                <button type="button" class="btn btn-warning">
                  Edit
                </button>
              </Link>
              <Link
                to={`/subcategories/${categoryId}/delete/${subcategory.id}`}
              >
                <button type="button" class="btn btn-danger">
                  Delete
                </button>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubcategoryList;
