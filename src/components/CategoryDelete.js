import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { deleteCategory } from "./api";

const CategoryDelete = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDelete = () => {
    deleteCategory(id)
      .then(() => navigate("/categories"))
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h5>Confirm Delete Category</h5>
      <button onClick={handleDelete} className="btn btn-danger">
        Delete
      </button>
    </div>
  );
};

export default CategoryDelete;
