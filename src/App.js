import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import CategoryList from "./components/CategoryList";
import CategoryCreate from "./components/CategoryCreate";
import CategoryUpdate from "./components/CategoryUpdate";
import CategoryDelete from "./components/CategoryDelete";
import SubcategoryList from "./components/SubcategoryList";
import SubcategoryCreate from "./components/SubcategoryCreate";
import SubcategoryUpdate from "./components/SubcategoryUpdate";
import SubcategoryDelete from "./components/SubcategoryDelete";
import React, { useState, useEffect } from "react";
import Alert from "./components/Alert";
const App = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  useEffect(() => {
    // Add an event listener to update the online status
    const handleOnlineStatusChange = () => {
      setIsOnline(navigator.onLine);
    };
    window.addEventListener("online", handleOnlineStatusChange);
    window.addEventListener("offline", handleOnlineStatusChange);

    // Clean up the event listeners when the component unmounts
    return () => {
      window.removeEventListener("online", handleOnlineStatusChange);
      window.removeEventListener("offline", handleOnlineStatusChange);
    };
  }, []);
  return (
    <Router>
      {/* <div className="container">
        <Link to="/categories" className="navbar-brand">
          Home
        </Link>
      </div> */}
      {!isOnline && (
        <Alert AlertMessage={<b>Oops! No internet connection.</b>}></Alert>
      )}

      <div className="container">
        <Routes>
          <Route path="/" element={<Navigate to="/categories" />} />

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
