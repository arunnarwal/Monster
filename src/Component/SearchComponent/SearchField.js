import React from'react'
export default function SearchField({placeHolder,handlerChange}){
    return<>
<input type='search' placeholder={placeHolder} className="form-control"
          onChange={handlerChange} />
          </>
}