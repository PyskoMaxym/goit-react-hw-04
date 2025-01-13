import PropTypes from "prop-types";
import React from "react";
import s from "./LoadMoreBtn.module.css"

const LoadMoreBtn = ({ onClick }) => (
<button className={s.button} onClick={onClick}>
Load more
</button>
);

LoadMoreBtn.proptypes = {
    onClick: PropTypes.func.isRequired,
};

export default LoadMoreBtn;