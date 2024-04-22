import React, { useState } from "react";
import { Editpostform, Showposts, Spinner } from "../../components/index";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../../context/Context";

const Edit_Post = () => {
  const [type] = useState("editposts"); 
  const [editform, seteditform] = useState(false);
  const [id, setid] = useState("");
  const { getblog } = useAuth();

  const { data: blog, isLoading } = useQuery({
    queryKey: ["blog",id],
    queryFn: () => getblog(id),
    enabled: !!id, 
  });

  if (isLoading) return <Spinner />;


  if (editform && blog) {
    return <Editpostform blog={blog} seteditform={seteditform} />;
  }

  return <Showposts setid={setid} seteditform={seteditform} type={type} />;
};

export default Edit_Post;
