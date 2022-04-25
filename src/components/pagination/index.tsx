import classNames from 'classnames';
import React from 'react';

type PaginationProps = {
    totalBooks:number
    booksPerPage:number
    pagination: (pageNumber:number) => void
    currentPage:number
}

const Pagination:React.FC<PaginationProps> = (props) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(props.totalBooks / props.booksPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav aria-label="Page navigation example">
            <ul className="inline-flex items-center -space-x-px">
                <li onClick={() => {
                    props.pagination(props.currentPage - 1)
                }} className={classNames("cursor-pointer",
                    props.currentPage === 1 && 'hidden'
                )}>
                    <div className="block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">
                        <div className='hidden md:block lg:block'>
                            <span className="sr-only">Previous</span>
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                        </div>
                        <p className='md:hidden lg:hidden'>back</p>
                    </div>
                </li>
                <div className='hidden md:flex lg:flex'>
                    {
                        pageNumbers.map((number,i) => 
                            <li key={i} className='cursor-pointer' onClick={() => {
                                props.pagination(number)
                            }}>
                                <div className={classNames("py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700",
                                    props.currentPage === number ? 'bg-blue-400 text-white': null
                                )}>{number}</div>
                            </li>
                        )
                    }
                </div>
                <div className='py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 md:hidden lg:hidden'>
                    <p>{props.currentPage}</p>
                </div>
                <li onClick={() => {
                    props.pagination(props.currentPage + 1)
                }}
                className={classNames("cursor-pointer",
                    props.currentPage === pageNumbers.length && 'hidden'
                )}>
                    <div className="block py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">
                        <div className='hidden md:block lg:block'>
                            <span className="sr-only">Next</span>
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                        </div>
                        <p className='md:hidden lg:hidden'>Next</p>
                    </div>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;