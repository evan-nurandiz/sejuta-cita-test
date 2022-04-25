import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../../Api';
import { paperIcon, clockIcon } from '../../assets';
import { Button } from '../../components';
import { BookType } from '../../DataType/Book';
import {numberToMinute, randomIntFromInterval} from '../../helpers'

type BannerProps = {

}

const Banner:React.FC<BannerProps> = (props) => {
    const [loading,setLoading] = useState<boolean>(false);
    const [book,setBook] = useState<BookType>();
    const navigation = useNavigate();

    const fetchData = async() => {
        let CategoryId = [1,11,12,19,21]
        let category = CategoryId[randomIntFromInterval(1,4)]
        await API.get(`/fee-assessment-books?categoryId=${category}`).then((res) => {
            console.log(res.data);
            setBook(res.data[0])
        })
    }

    useEffect(() => {
        fetchData().then(() => {
            setLoading(false)
        })
    },[])

    
    return (
        <div>
            {
                !loading ? 
                <div className='bg-main-background'>
                    <div className='py-[32px] mx-auto md:w-3/4 lg:w-1/2 lg:py-24'>
                        {
                            !loading && (
                                <div className="md:flex lg:flex items-center md:gap-4 lg:gap-8">
                                    <div className='w-2/3 mb-[16px] mx-auto lg:w-1/3 lg:mb-0'>
                                        <img 
                                        className='w-full h-96 rounded-[4px]'
                                        src={book?.cover_url} 
                                        alt="" />
                                    </div>
                                    <div className='lg:text-left md:w-2/3 lg:w-2/3'>
                                        <div className='mb-[16px]'>
                                            <p className='font-bold text-3xl mb-[4px]'>{book?.title}</p>
                                            <p className='font-semibold text-xl text-gray-500'>{book?.authors}</p>
                                        </div>
                                        <p className='text-center lg:text-left mb-[32px]'>
                                            {book?.description}
                                        </p>
                                        <div className='flex justify-center lg:justify-start'>
                                            <Button
                                                onClick={() => navigation(`/book/${book?.title}`,{
                                                    state:book
                                                })}
                                                paddingVertical={'py-[14px]'}
                                                paddingHorizontal={'px-[16px]'}
                                                borderRadius={'rounded-[4px] border-black border'}
                                                color={'hover:bg-black bg-main-background'}
                                                textColor={'hover:text-white text-black'}
                                                label={'Read Now'}
                                            />
                                        </div>
                                    </div>
                                </div>
                            ) 
                        }
                    </div>
                </div> : 
                <div className="animate-pulse w-full flex space-x-4">
                    <div className="w-full h-48 lg:h-96 bg-slate-600 "></div>
                </div>
            }
        </div>
    );
};

export default Banner;