import React from 'react';
import { Paginas } from "./styles";

const Paginacao = ({ postsPerPage, totalPosts, paginate }) => {
    const pagenumbers = [];

    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
        pagenumbers.push(i);
    }
    return(
        <div>
            <nav>
                <Paginas>
                    {pagenumbers.map((item) =>{
                        return(
                            <th onClick={() => paginate(item)} key={item} className="page-item">
                                <button  className="table-button">
                                    {item}
                                </button>
                            </th>
                        )
                    })}
                </Paginas>
            </nav>
            
        </div>
    )
}
export default Paginacao;