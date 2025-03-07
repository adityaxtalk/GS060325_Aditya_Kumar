import React from 'react'
import { Modal, Button, Form } from "react-bootstrap";
import { Formik, Field, Form as FormikForm, ErrorMessage } from "formik";
import * as Yup from "yup";
import { skuItem } from '../../assets/skuItem';
import confirm from '../utils/ConfirmModal';
const initialValues: skuItem = {
  id: "",
  price: 0,
  cost: 0,
  label: "",
  class: "",
  department: "",
};

const validationSchema = Yup.object({
  id: Yup.string().matches(/^SKU\d*$/, "SKU ID must start with 'SKU' followed by numbers").required("SKU ID is required"),
  label: Yup.string().required("Label is required"),
  department: Yup.string().required("Department is required"),
  class: Yup.string().required("Class is required"),
  price: Yup.number()
    .required("Price is required")
    .positive("Price must be positive"),
  cost: Yup.number()
    .required("Cost is required")
    .positive("Cost must be positive"),
});

interface AddSkuProps {
  showModal: boolean;
  setShowModal: (show: boolean) => void;
  handleAdd: (values: skuItem) => void;
}

const AddSku: React.FC<AddSkuProps> = ({ showModal, setShowModal, handleAdd }) => {
  const handleSubmit = async (
    values: skuItem,
    { setSubmitting, resetForm }: { setSubmitting: (isSubmitting: boolean) => void; resetForm: () => void }
  ) => {

    const result = await confirm("Do you want to add the SKU?", {okButtonStyle: "primary"});
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
        <Modal.Title>Add New SKU</Modal.Title>
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
                <Form.Label>SKU ID</Form.Label>
                <Field name="id" type="text" className="form-control" />
                <ErrorMessage name="id" component="div" className="text-danger" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Label</Form.Label>
                <Field name="label" type="text" className="form-control" />
                <ErrorMessage name="label" component="div" className="text-danger" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Class</Form.Label>
                <Field name="class" type="text" className="form-control" />
                <ErrorMessage name="class" component="div" className="text-danger" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Department</Form.Label>
                <Field name="department" type="text" className="form-control" />
                <ErrorMessage name="department" component="div" className="text-danger" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Price ($)</Form.Label>
                <Field name="price" type="number" className="form-control" />
                <ErrorMessage name="price" component="div" className="text-danger" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Cost ($)</Form.Label>
                <Field name="cost" type="number" className="form-control" />
                <ErrorMessage name="cost" component="div" className="text-danger" />
              </Form.Group>

              <Modal.Footer>
                <Button variant="secondary" onClick={() => setShowModal(false)}>
                  Cancel
                </Button>
                <Button type="submit" variant="primary" disabled={isSubmitting}>
                  Add SKU
                </Button>
              </Modal.Footer>
            </FormikForm>
          )}
        </Formik>
      </Modal.Body>
    </Modal>
  );
};

export default AddSku;