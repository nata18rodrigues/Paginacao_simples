import api from "./../../server/api";
import Posts from "./posts";
import Paginacao from "./paginacao";
import React, { useEffect, useState } from "react";



function Buscar() {
    const [geralUsuarios, setGeralUsuarios] = useState([]);

  
    //novo app
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);

    useEffect(() => {
        async function sinal() {
          setLoading(true);
          const response = await api.get("/users");
          setGeralUsuarios(response.data);
          console.log(response.data);
          setLoading(false);
        }
        sinal();
      }, []);


  //Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFisrtPost = indexOfLastPost - postsPerPage;
  const currentPosts = geralUsuarios.slice(indexOfFisrtPost, indexOfLastPost);

  //change page
  const paginate = pageNumber => setCurrentPage(pageNumber)
  
  return(
    <div className='conteudo'>
        <center>
        <h1>Consulta de Usuarios</h1><br /><br /><table>
        <Posts geralUsuarios={currentPosts} loading={loading} />
        
        </table>
        <Paginacao 
            postsPerPage={postsPerPage} 
            totalPosts={geralUsuarios.length} 
            paginate={paginate}
        />
        <br /><br />
        </center>
    </div>
  )
}
export default Buscar;
