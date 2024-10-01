import React from "react";

function Typography(props) {
  const { title, subTitle } = props;
  return (
    <>
      {title} <span className="fw-bold">{subTitle}</span> ?
    </>
  );
}

export default Typography;
