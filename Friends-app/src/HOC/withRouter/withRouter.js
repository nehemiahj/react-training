import React from "react";
import { useNavigate } from "react-router-dom";

export default function withRouter(RawComponent) {
  return () => {
    const navigate = useNavigate();
    return (
      <>
        <RawComponent navigate={navigate} />
      </>
    );
  };
}
