import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {clockIcon, paperIcon} from '../../assets'
import { Button, Dropdown } from '../../components';
import {numberToMinute} from '../../helpers'
import {BookType} from '../../DataType/Book'


type BookPageProps = {
    
}

interface locationState extends BookType {
    id:number,
    title:string,
    category_id:number,
    authors:Array<string>,
    cover_url:string,
    description:string,
    sections:[{
        title:string,
        content:string,
    }],
    audio_length:string,
} 

const BookPage:React.FC<BookPageProps> = (props) => {
    const [isBookMark,setIsBookMark] = useState<boolean>(false);
    const location = useLocation();
    let { id, title,authors, sections, audio_length, description, cover_url } = location.state as locationState;

    useEffect(() => {
        if(localStorage.getItem('bookmark')){
            let bookmark:Array<BookType> = JSON.parse(localStorage.getItem('bookmark')!)
            bookmark.filter((data) => {
                data.id === id && setIsBookMark(true)
                return null
            })
        }
    },[])

    const bookMarkHandler = (data:Array<BookType> | any) => {
        if(!isBookMark){
            if(localStorage.getItem('bookmark')){
                let existingBookMark = JSON.parse(localStorage.getItem("bookmark")!);
                existingBookMark.push(location.state)
                localStorage.setItem('bookmark',JSON.stringify(existingBookMark))
                setIsBookMark(true)
            }else{
                let bookmark = new Array<string | unknown>()
                bookmark.push(location.state)
                localStorage.setItem('bookmark',JSON.stringify(bookmark))
            }
        } else {
            let existingBookMark = JSON.parse(localStorage.getItem("bookmark")!);
            let bookmark = existingBookMark.filter((data:BookType) => data.id !== id)
            localStorage.setItem('bookmark',JSON.stringify(bookmark))
            setIsBookMark(false)
        }
    }

    return (
        <React.Fragment>
            <div className='bg-main-background'>
                <div className='mx-auto w-5/6 lg:w-2/4 py-[24px] lg:py-[48px]'>
                    <div className="md:flex md:gap-[12px] lg:flex lg:gap-[12px]">
                        <img 
                        className='w-4/5  mx-auto mb-[12px] md:w-2/5 lg:mb-[0] lg:w-1/3 rounded-[6px]'
                        src={cover_url}
                        alt="" />
                        <div className='text-left lg:w-2/3'>
                            <div className='mb-[16px]'>
                                <p className='font-bold text-3xl mb-[4px]'>{title}</p>
                                <p className='font-semibold text-xl text-gray-500'>{authors}</p>
                            </div>
                            <div className='flex items-center gap-[12px] mb-[12px]'>
                                <div className='flex items-center gap-[8px]'>
                                    <img src={paperIcon} alt="" />
                                    <p className='font-semibold text-md text-gray-500'>{sections.length} Chapters</p>
                                </div>
                                <div className='flex items-center gap-[8px]'>
                                    <img src={clockIcon} alt="" />
                                    <p className='font-semibold text-md text-gray-500'>{numberToMinute(parseInt(audio_length))} Min</p>
                                </div>
                            </div>
                            <div className='mb-[24px]'>
                                <p className='font-bold text-xl mb-[4px]'>What's it about ?</p>
                                <p className='font-semibold text-md text-gray-500'>{description}</p>
                            </div>
                            <Button 
                                onClick={() => bookMarkHandler(location.state)}
                                paddingVertical={'py-[10px]'}
                                paddingHorizontal={'px-[16px]'}
                                borderRadius={'rounded-[4px] border-black border'}
                                color={'hover:bg-black bg-main-background'}
                                textColor={'hover:text-white text-black'}
                                label={isBookMark ? 'Hapus Dari Bookmark' : 'Tambah Ke Bookmark'}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className='mx-auto w-5/6 py-[24px] lg:w-3/4 lg:py-[48px]'>
                <p className='font-bold text-3xl mb-[4px] mb-[32px]'>What's Inside ?</p>
                {
                    sections.map((data,i) => 
                        <div key={i}>
                            <Dropdown title={i+1 + '. ' + data.title} description={data.content}/>
                        </div>
                    )
                }
            </div>
        </React.Fragment>
    );
};

export default BookPage;