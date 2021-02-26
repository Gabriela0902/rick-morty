import React , {useState, useEffect}from 'react'

function Pagination({paginationT, pagination, setpagination}) {
    const [pages, setpages] = useState([]);
    const NumPage = () =>
    {
        if(paginationT != undefined && paginationT.pages >= 2)
        {
            if(pages.length == 0 )
            {
                const total = paginationT.pages > 5 ? 6 : paginationT.pages;
                for(var i= 1; i < total; i++) 
                {
                    pages.push(i);
                }
                console.log(pages);
            }
        }
    }
    NumPage()     
    return (
        <div id="Paginación">
            <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-end">
                    <li class={pagination == 1 ? "page-item disabled" : "page-item disabled"}>
                        <a class="page-link" tabindex="-1"  onClick={()=>{setpagination(pagination - 1)}}>Previous</a>
                    </li>
                    {pages != undefined && pages.length != 0 ? 
                        pages.map(
                            (post) => (
                               (<li class="page-item"><a class="page-link"  onClick={() =>setpagination(post)}>{post}</a></li>)))
                        : null    
                    }                    
                    <li class="page-item">
                    <a class="page-link"  onClick={()=>{setpagination(pagination + 1)}}>Next</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default  Pagination;
