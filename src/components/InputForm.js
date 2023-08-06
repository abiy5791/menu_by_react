const InputForm = (props) => {
  const style = {
    height: "200px",
  };
  return (
    <div class="container">
      <form onSubmit={props.handlesubmit}>
        <label>Name</label>
        <input
          type="text"
          name={props.namefield}
          placeholder="Enter Food Name"
          value={props.namevalue}
          onChange={props.handlechange}
          required
          class="form-control"
        ></input>

        <label>Description</label>
        <textarea
          style={style}
          class="form-control"
          placeholder="Write something.."
          name={props.descfield}
          value={props.descriptionvalue}
          onChange={props.handlechange}
          required
        ></textarea>

        <label for="validationDefault02" class="form-label">
          {props.labelimage_or_price}
        </label>
        <input
          class="form-control"
          required
          type={props.number_or_text}
          placeholder="Enter the value"
          name={props.image_or_pricefield}
          value={props.image_or_pricevalue}
          onChange={props.handlechange}
        ></input>
        <input type="submit" value={props.create_or_update}></input>
      </form>
    </div>
  );
};

export default InputForm;
