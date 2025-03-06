import React, { useState } from "react";
import { Formik, Form as FormikForm, Field, ErrorMessage } from "formik";
import { Form, Button, Container, Alert } from "react-bootstrap";
import * as Yup from "yup";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { login } from "../store/authSlice";

interface LoginFormValues {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialValues: LoginFormValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid Email Format").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  });

  const handleSubmit = (
    values: LoginFormValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    if (values.email === "admin@admin.com" && values.password === "admin@1234") {
      dispatch(login({ email: values.email }));
      navigate("/dashboard");
    } else {
      setError("Invalid Username or Password. Please try again.");
      setTimeout(() => setError(""), 3000);
    }
    setSubmitting(false);
  };

  return (
    <Container className="mt-5">
      <h2 className="mb-4">Login</h2>

      {error && <Alert variant="danger">{error}</Alert>}

      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <FormikForm>
            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>
                Email <span className="text-danger">*</span>
              </Form.Label>
              <Field name="email" type="email" as={Form.Control} />
              <ErrorMessage name="email" component="div" className="text-danger mt-1" />
            </Form.Group>

            <Form.Group controlId="formPassword" className="mb-3">
              <Form.Label>
                Password <span className="text-danger">*</span>
              </Form.Label>
              <Field name="password" type="password" as={Form.Control} />
              <ErrorMessage name="password" component="div" className="text-danger mt-1" />
            </Form.Group>

            <Button variant="primary" type="submit" disabled={isSubmitting} className="w-100">
              {isSubmitting ? "Logging in..." : "Login"}
            </Button>
          </FormikForm>
        )}
      </Formik>
    </Container>
  );
};

export default Login;
