// import React, { use } from 'react'

import { use } from "react";
import ShowAllpost from "./ShowAllpost";

const Post = ({ PostApi }) => {
  const AllPost = use(PostApi);
  console.log(AllPost);
  
  return <div>
    {
      AllPost.map((post)=><ShowAllpost post={post} ></ShowAllpost>)
    }
  </div>;
};

export default Post
