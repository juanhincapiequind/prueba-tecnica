import { SearchComponentProps } from "../models/Interfaces";
import React from 'react'

const SearchPage: React.FC<SearchComponentProps> = ({imgUrl, description}) => {
    return(
      <div>
        <img src={imgUrl} alt={description}/>
        <p>{description}</p>
      </div>
    )
}

export default SearchPage;