import React, { useEffect, useState } from 'react';
import Banner from './Banner'
import { useParams } from "react-router-dom";
import { BookType } from '../../DataType/Book';
import { BookCard, Pagination } from '../../components';
import { useNavigate,useSearchParams } from 'react-router-dom';
import API from '../../Api';
import classNames from 'classnames';

type CategoryPageProps = {
    
}

const CategoryPage:React.FC<CategoryPageProps> = (props) => {
    const [books,setBooks] = useState<Array<BookType>>([])
    const [loading,setLoading] = useState<boolean>(false);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [postsPerPage] = useState<number>(12);
    const [query,setQuery] = useState<string>('');

    const [searchParams] = useSearchParams();
    const param = useParams();
    const navigation = useNavigate();

    const fetchData = async() => {
        setLoading(true)
        await API.get(`/fee-assessment-books?categoryId=${param.id}`).then((res) => {
            setBooks(res.data);
        })
    }

    useEffect(() => {
        fetchData().then(() => {
            setLoading(false)
            if(searchParams.get('name')){
                setBooks(books.filter(data => 
                    data.title.toLocaleLowerCase().includes(searchParams.get('name')!)
                ))
            } else if (searchParams.get('author')) {
                setBooks(books.filter(data => 
                    data.authors.indexOf(searchParams.get('author')!.replace(/(^\w|\s\w)/g, m => m.toUpperCase())!) >= 0
                ))
            }
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[searchParams.get('name'),searchParams.get('author')])

    const indexOfLastBooks = currentPage * postsPerPage;
    const indexOfFirstBooks = indexOfLastBooks - postsPerPage;
    const currentBooks = books.slice(indexOfFirstBooks, indexOfLastBooks);
    
    const paginate = (pageNumber:number) => {
        setCurrentPage(pageNumber)
        window.scrollTo(0, 0)
    };

    return (
        <React.Fragment>
            <div>
                <Banner 
                loading={loading}
                categoryName={param.name} 
                search={(query:string) => setQuery(query)} 
                onSearch={(section:string) => {
                    fetchData().then(() => {
                        navigation(`/category-${param.name}/${param.id}?${section}=${query.toLocaleLowerCase()}`)
                    });
                }}
            />
            </div>
            {
                !loading && (
                    <div>
                        <div className='mx-auto grid py-[24px] grid-cols-2 w-5/6 gap-4
                        md:grid-cols-3 
                        lg:py-[48px] lg:gap-[16px] lg:w-3/4 lg:grid-cols-4'>
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
                            <div className={classNames('pb-[24px]',
                                books.length < postsPerPage && 'hidden'
                            )}>
                                <Pagination
                                    currentPage={currentPage}
                                    totalBooks={books.length}
                                    booksPerPage={postsPerPage}
                                    pagination={paginate}
                                />
                        </div>
                    </div>
                )
            }
            
        </React.Fragment>
    );
};

export default CategoryPage;