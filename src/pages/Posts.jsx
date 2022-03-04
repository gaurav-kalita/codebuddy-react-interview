import React, { useEffect, useState } from 'react';

function Posts() {
  const [posts, setPosts] = useState();

  useEffect(() => {
    try {
      fetch('https://codebuddy.review/posts')
        .then(res => {
          console.log(JSON.stringify(res))
        })
        .then(data => {
          console.log(data);
        });
    } catch (err) {
      console.log(err);
    }
  }, []);

  return <div>{posts}</div>;
}

export default Posts;
