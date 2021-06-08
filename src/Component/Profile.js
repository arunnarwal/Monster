import React from'react'
export default function Profile(props)
{
    const btnclick=()=>{
        alert('cliked me');
    }
return<div><h1 onClick={btnclick}>{props.text}</h1></div>
}