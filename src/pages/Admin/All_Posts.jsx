import React, { useState } from "react";
import {Showposts} from "../../components/index";

const All_Posts = () => {
  const [type] = useState("showposts");

  return (

    <Showposts type={type} />
  )
};

export default All_Posts;
