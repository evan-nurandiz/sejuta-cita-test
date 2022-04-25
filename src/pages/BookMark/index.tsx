import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { BookType } from '../../DataType/Book';
import { BookCard, Pagination } from '../../components';
import { useNavigate,useSearchParams } from 'react-router-dom';
import classNames from 'classnames';

type BookMarkPageProps = {
    
}

const BookMarkPage:React.FC<BookMarkPageProps> = (props) => {
    const [loading,setLoading] = useState<boolean>(false)
    const [books,setBooks] = useState<Array<BookType>>([])
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [postsPerPage] = useState<number>(12);

    const [searchParams] = useSearchParams();
    const param = useParams();
    const navigation = useNavigate();

    const fetchData = async() => {
        let listOfBookmark = JSON.parse(localStorage.getItem('bookmark')!)
        setBooks(listOfBookmark) 
    }

    useEffect(() => {
        fetchData().then(() => {
            setLoading(false)
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[param.id,searchParams.get('name')])

    const indexOfLastBooks = currentPage * postsPerPage;
    const indexOfFirstBooks = indexOfLastBooks - postsPerPage;
    const currentBooks = books.slice(indexOfFirstBooks, indexOfLastBooks);
    
    const paginate = (pageNumber:number) => setCurrentPage(pageNumber);

    return (
        <React.Fragment>
            <div className='py-4 lg:py-8'>
                </div>
                <p className='text-center text-3xl font-bold mb-[24px]'>List Book Mark Ku</p>
                {
                    !loading && (
                        <div className='mx-auto w-5/6 grid grid-cols-2 gap-4 md:grid-cols-3 lg:py-[48px] lg:gap-[16px] lg:w-3/4 lg:grid-cols-4'>
                            {
                                currentBooks.map((data,i) => 
                                    <div className="col-span-1" key={i} 
                                    onClick={() => navigation(`/book/${data.title}`,{
                                        state:data
                                    })}>
                                        <BookCard
                                            loading={loading}
                                            image={data.cover_url}
                                            title={data.title}
                                            author={data.authors}
                                        />
                                    </div>
                                )
                            }
                        </div>
                    )
                }
                <div className={classNames('',
                    books.length < postsPerPage && 'hidden'
                )}>
                <Pagination
                    currentPage={currentPage}
                    totalBooks={books.length}
                    booksPerPage={postsPerPage}
                    pagination={paginate}
                />
            </div>
        </React.Fragment>
    );
};

export default BookMarkPage;