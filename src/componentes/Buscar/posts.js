import React from 'react';

const Posts = ({ geralUsuarios, loading }) => {
    if(loading) {
        return <h2>Loading...</h2>
    }
    return <ul className="list-group mb-4">
        {geralUsuarios.map((item) => {
            return(
                <tr key={item.id} className='list-group-item'>
                    {item.username}__{item.email}
                    
                </tr>
            )    
        })}

    </ul>
    
}

export default Posts;