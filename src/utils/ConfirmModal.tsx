import React from "react";
import { Modal, Button } from "react-bootstrap";
import { confirmable, createConfirmation } from "react-confirm";

interface ConfirmModalProps {
  show: boolean;
  proceed: (value: boolean) => void;
  confirmation: string;
  title?: string;
  okText?: string;
  cancelText?: string;
  okButtonStyle?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark";
  cancelButtonStyle?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark";
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({
  show,
  proceed,
  confirmation,
  title,
  okText = "OK",
  cancelText = "Cancel",
  okButtonStyle = "primary",
  cancelButtonStyle = "secondary",
}) => {
  return (
    <Modal size="sm" show={show} onHide={() => proceed(false)} backdrop="static" centered>
      {title && (
        <Modal.Header>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
      )}
      <Modal.Body>{confirmation}</Modal.Body>
      <Modal.Footer>
        <Button variant={cancelButtonStyle} onClick={() => proceed(false)}>
          {cancelText}
        </Button>
        <Button variant={okButtonStyle} onClick={() => proceed(true)}>
          {okText}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const confirmLow = createConfirmation(confirmable(ConfirmModal));

const confirm = (message: string, options: Partial<ConfirmModalProps> = {}): Promise<boolean> => {
  return confirmLow({ confirmation: message, ...options });
};

export default confirm;
