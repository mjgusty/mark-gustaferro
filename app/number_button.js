'use client';
 
import { useState } from 'react';
 
export default function LikeButton() {
  let arr = [];
  const [likes, setLikes] = useState(0);
    
  function handleClick() {
    setLikes(arr.push(likes));
  }
 
  return <button onClick={handleClick}>Number ({likes})</button>;
}