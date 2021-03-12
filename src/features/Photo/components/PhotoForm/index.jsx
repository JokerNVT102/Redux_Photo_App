import React from "react";
import PropTypes from "prop-types";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
// select đẹp đẽ hơn
import Select from "react-select";
import PHOTO_CATEGORY_OPTIONS from "constants/global";
import Images from "constants/images";
PhotoForm.propTypes = {
  onSubmit: PropTypes.func,
};

PhotoForm.defaultProps = {
  onSubmit: null,
};

function PhotoForm(props) {
  return (
    <Form>
      <FormGroup>
        <Label for="titleId">Title</Label>
        <Input name="title" id="titleId" placeholder="Eg: Wow nature ..." />
      </FormGroup>

      <FormGroup>
        <Label for="categoryId">Category</Label>

        <Select
          id="categoryId"
          name="categoryId"
          placeholder="What's your photo category?"
          options={PHOTO_CATEGORY_OPTIONS}
        />
      </FormGroup>

      <FormGroup>
        <Label for="categoryId"> Photo</Label>
        <div>
          <Button type="button" outline color="primary">
            {" "}
            Random a photo
          </Button>
        </div>
        <div>
          <img src={Images.COLORFUL_BG} width="200px" height="200px" alt="" />
        </div>
      </FormGroup>

      <FormGroup>
        <Button color="primary"> add a album</Button>
      </FormGroup>
    </Form>
  );
}

export default PhotoForm;
