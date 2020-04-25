import React from "react";
import HomePage from "./HomePage";

import { useSelector, useDispatch } from "react-redux";

const withProps = (Component) => (props) => {
  const { data } = useSelector((state) => state);
  const dispatch = useDispatch();

  return <HomePage data={data} />;
};

export default withProps;
