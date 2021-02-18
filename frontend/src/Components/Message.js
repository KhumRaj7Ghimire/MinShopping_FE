import React from "react";

// Import from  react-bootstrap
import { Alert } from "react-bootstrap";

const Message = ({ variant, children }) => {
  return <Alert variant={variant}>{children}</Alert>;
};

Message.defaultProps = { variant: "info" };

export default Message;
