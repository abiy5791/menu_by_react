import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { deleteSubcategory } from "./api";

const SubcategoryDelete = () => {
  const navigate = useNavigate();
  const { categoryId, subcategoryId } = useParams();

  const handleDelete = () => {
    deleteSubcategory(categoryId, subcategoryId)
      .then(() => navigate(`/subcategories/${categoryId}`))
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h5>Confirm Delete Subcategory</h5>
      <button onClick={handleDelete} className="btn btn-danger">
        Delete
      </button>
    </div>
  );
};

export default SubcategoryDelete;
