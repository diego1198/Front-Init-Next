import { useEffect, useState } from "react";
import { AlertType, AlertTypeEnum } from "../../../shared/enums/AlertType";

export interface AlertProps {
  title: string;
  message: string;
  type: AlertTypeEnum;
  open: boolean;
}

export const Alert = ({ title, message, type, open }: AlertProps) => {
  const [isOpen, setIsOpen] = useState(open);

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  return (
    <div
      className={`alert ${AlertType[type]} alert-dismissible fade ${
        isOpen && "show"
      }`}
      role="alert"
    >
      <strong>{title}</strong> {message}
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
        onClick={handleClose}
      >
        <span aria-hidden="true" className="la la-close"></span>
      </button>
    </div>
  );
};
