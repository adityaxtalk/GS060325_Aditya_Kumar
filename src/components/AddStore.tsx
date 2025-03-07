import React from 'react';
import { Modal, Button, Form } from "react-bootstrap";
import { Formik, Field, Form as FormikForm, ErrorMessage } from "formik";
import * as Yup from "yup";
import confirm from '../utils/ConfirmModal';
const initialValues= {
  id: "",
  label: "",
  city: "",
  state: "",
};

const validationSchema = Yup.object({
  id: Yup.string().matches(/^ST\d*$/, "ID must start with 'ST' followed by numbers").required("Store ID is required"),
  label: Yup.string().required("Label is required"),
  city: Yup.string().required("City is required"),
  state: Yup.string().required("State is required"),
});

interface AddStoreProps {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
  handleAdd: (values: typeof initialValues) => void;
}

const AddStore: React.FC<AddStoreProps> = ({ showModal, setShowModal, handleAdd }) => {
  const handleSubmit =async (
    values: typeof initialValues,
    { setSubmitting, resetForm }: { setSubmitting: (isSubmitting: boolean) => void; resetForm: () => void }
  ) => {

    const result = await confirm("Do you want to add Store?", { okButtonStyle: "primary"});
    if (result) {
      handleAdd(values);
      resetForm();
      setShowModal(false);
    }
    
    setSubmitting(false);
    
  };

  return (
    <Modal show={showModal} onHide={() => setShowModal(false)} centered>
      <Modal.Header closeButton>
        <Modal.Title>Add New Store</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <FormikForm>
              <Form.Group className="mb-3">
                <Form.Label>Store ID</Form.Label>
                <Field name="id" type="text" className="form-control" />
                <ErrorMessage name="id" component="div" className="text-danger" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Label</Form.Label>
                <Field name="label" type="text" className="form-control" />
                <ErrorMessage name="label" component="div" className="text-danger" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>City</Form.Label>
                <Field name="city" type="text" className="form-control" />
                <ErrorMessage name="city" component="div" className="text-danger" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>State</Form.Label>
                <Field name="state" type="text" className="form-control" />
                <ErrorMessage name="state" component="div" className="text-danger" />
              </Form.Group>

              <Modal.Footer>
                <Button variant="secondary" onClick={() => setShowModal(false)}>
                  Cancel
                </Button>
                <Button type="submit" variant="primary" disabled={isSubmitting}>
                  Add Store
                </Button>
              </Modal.Footer>
            </FormikForm>
          )}
        </Formik>
      </Modal.Body>
    </Modal>
  );
};

export default AddStore;
