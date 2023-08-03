import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CategoryList from "./components/CategoryList";
import CategoryCreate from "./components/CategoryCreate";
import CategoryUpdate from "./components/CategoryUpdate";
import CategoryDelete from "./components/CategoryDelete";
import SubcategoryList from "./components/SubcategoryList";
import SubcategoryCreate from "./components/SubcategoryCreate";
import SubcategoryUpdate from "./components/SubcategoryUpdate";
import SubcategoryDelete from "./components/SubcategoryDelete";

const App = () => {
  return (
    <Router>
      <div className="container">
        <Link to="/categories" className="navbar-brand">
          Home
        </Link>
      </div>

      <div className="container">
        <Routes>
          <Route
            path="/categories/:category_id/update"
            element={<CategoryUpdate />}
          />

          <Route path="/categories" element={<CategoryList />} />
          <Route path="/categories/create" element={<CategoryCreate />} />
          {/* <Route path="/categories/:id/update" element={<CategoryUpdate />} /> */}
          <Route path="/categories/:id/delete" element={<CategoryDelete />} />
          <Route
            path="/subcategories/:categoryId"
            element={<SubcategoryList />}
          />
          <Route
            path="/subcategories/create/:categoryId"
            element={<SubcategoryCreate />}
          />
          <Route
            path="/subcategories/:categoryId/update/:subcategoryId"
            element={<SubcategoryUpdate />}
          />
          <Route
            path="/subcategories/:categoryId/delete/:subcategoryId"
            element={<SubcategoryDelete />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
