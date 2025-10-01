// import React, { use } from 'react'

import { use } from "react";
import ShowAllpost from "./ShowAllpost";

const Post = ({ PostApi }) => {
  const AllPost = use(PostApi);
  console.log(AllPost);
  
  return <div className=" grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 max-w-[1400px] mx-auto gap-4 p-10 md:p-4 xl:p-2 2xl:p-0">
    {
      AllPost.map((post)=><ShowAllpost post={post} ></ShowAllpost>)
    }
  </div>;
};

export default Post
