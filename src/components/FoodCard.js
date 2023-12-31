import { Link } from "react-router-dom";
import React, { useState } from "react";

import {
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  Button,
} from "reactstrap";

const FoodCard = (props) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const maxCharacters = 120;

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const style = {
    margin: "8px",
  };

  const namefont = {
    fontFamily: "'Yeon Sung', cursive",
    fontWeight: "bold",
  };
  const descfont = {
    fontFamily: "'Roboto', sans-serif",
  };
  const buttonTextStyle = {
    color: "blue",
  };

  return (
    <Card>
      <a href={`/subcategories/${props.id}`} className="link-as-text">
        <CardImg alt="Card image cap" src={props.image} />
      </a>
      <CardBody className="p-4">
        <CardTitle tag="h4" style={namefont}>
          {props.title}
        </CardTitle>
        <CardSubtitle>
          <h6 className="card-subtitle mb-2 text-body-secondary">
            {"UpdatedAt "}
            {props.subtitle}
          </h6>
        </CardSubtitle>

        <CardText className="mt-3" style={descfont}>
          {showFullDescription
            ? props.text
            : props.text.slice(0, maxCharacters) + "..."}
          {props.text.length > maxCharacters && (
            <button
              onClick={toggleDescription}
              type="button"
              className="btn"
              style={buttonTextStyle}
            >
              {showFullDescription ? "See less" : "See more"}
            </button>
          )}
        </CardText>

        <Link to={`/categories/${props.id}/update`}>
          <Button style={style} className="btn btn-success">
            Edit
          </Button>
        </Link>
        <Link to={`/categories/${props.id}/delete`}>
          <Button style={style} className="btn btn-danger">
            Delete
          </Button>
        </Link>
      </CardBody>
    </Card>
  );
};

export default FoodCard;
