import PropTypes from "prop-types";
import React from "react";
import s from "./ErrorMessage.module.css";

const ErrorMessage = ({message}) => 
    <p className={s.errorMessage}>{message}</p>;

ErrorMessage.propTypes = {
    message: PropTypes.string.isRequired,
}

export default ErrorMessage;