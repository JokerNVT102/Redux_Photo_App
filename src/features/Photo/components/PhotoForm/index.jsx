// select đẹp đẽ hơn
import PHOTO_CATEGORY_OPTIONS from "constants/global";
import InputField from "custom-fields/InputField";
import RandomPhotoField from "custom-fields/RandomPhotoField";
import SelectField from "custom-fields/SelectField";
import { FastField, Form, Formik } from "formik";
import PropTypes from "prop-types";
import React from "react";
import { Button, FormGroup, Spinner } from "reactstrap";
import * as Yup from "yup";
PhotoForm.propTypes = {
  onSubmit: PropTypes.func,
};

PhotoForm.defaultProps = {
  onSubmit: null,
};

function PhotoForm(props) {
  const initialValues = {
    title: "",
    categoryId: null,
    photo: "",
  };
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("this field is required."),
    // tại vì categoryId: null nên có nullable()
    categoryId: Yup.number().required("this field is required.").nullable(),

    // photo: Yup.string().required("this field is required.")
    // nếu chọn technology thi required
    photo: Yup.string().when("categoryId", {
      is: 1,
      then: Yup.string().required("this field is required."),
      otherwise: Yup.string().notRequired(),
    }),
  });
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={props.onSubmit}
    >
      {(formikProps) => {
        //do something here ...
        const { values, errors, touched, isSubmitting } = formikProps;
        console.log({ values, errors, touched });
        return (
          <Form>
            <FastField
              name="title" //ten control
              component={InputField}
              label="Title"
              placeholder="Eg: Wow nature ..."
            />
            <FastField
              name="categoryId" //ten control
              component={SelectField}
              label="Category"
              placeholder="What's your photo category?"
              options={PHOTO_CATEGORY_OPTIONS}
            />
            <FastField
              name="photo" //ten control
              component={RandomPhotoField}
              label="Photo"
            />
            <FormGroup>
              <Button type="submit" color="primary">
                {isSubmitting && <Spinner size="sm" />}
                add a album
              </Button>
            </FormGroup>
          </Form>
        );
      }}
    </Formik>
  );
}

export default PhotoForm;
