import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchCategories } from "./api";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories()
      .then((response) => setCategories(response.data))
      .catch((error) => console.error(error));
  }, []);

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
    <div className="divcard">
      <h2>Categories</h2>
      <ul className="list-group">
        <Link to={`/categories/create`}>
          <button type="button" class="btn btn-success">
            Add
          </button>
        </Link>
        {categories.map((category) => (
          <a href={`/subcategories/${category.id}`} class="link-as-text">
            <li key={category.id} className="list-group-item">
              <h3>{category.cat_food_name}</h3>

              <p>{category.cat_food_description}</p>

              {category.cat_food_image && (
                <img
                  width={200}
                  src={category.cat_food_image}
                  alt={category.name}
                />
              )}

              <p>createdAt {created_time(category.created_at)}</p>
              <p>updatedAt {updated_time(category.updated_at)}</p>
              <hr></hr>
              <div>
                <Link to={`/categories/${category.id}/update`}>
                  <button type="button" class="btn btn-warning">
                    Edit
                  </button>
                </Link>
                <Link to={`/categories/${category.id}/delete`}>
                  <button type="button" class="btn btn-danger">
                    Delete
                  </button>
                </Link>
              </div>
            </li>
          </a>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
