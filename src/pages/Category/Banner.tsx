import React from 'react';
import { Button } from '../../components';

type BannerProps = {
    loading:boolean
    categoryName?:string
    search: (query:string) => void
    onSearch: (section:string) => void
}

const CategoryBanner:React.FC<BannerProps> = (props) => {
    return (
        <div>
            {
                !props.loading ? 
                <div className='bg-main-background'>
                    <div className='py-[32px] mx-auto w-5/6 lg:w-1/2 lg:py-24'>
                        <div>
                            <p className='text-center text-2xl md:text-3xl lg:text-6xl lg:text-center mb-[32px]'>
                                {props.categoryName}
                            </p>
                            <input
                                onChange={(e) => props.search(e.target.value)}
                                type="search"
                                className="
                                    form-control
                                    block
                                    w-full
                                    px-3
                                    py-1.5
                                    text-base
                                    font-normal
                                    text-gray-700
                                    bg-white bg-clip-padding
                                    border border-solid border-gray-300
                                    rounded
                                    transition
                                    ease-in-out
                                    m-0
                                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                                    mb-[16px]
                                "
                                id="exampleSearch"
                                placeholder="Type query"
                            />
                            <div className="flex justify-center gap-4">
                                <Button
                                    onClick={() => props.onSearch('name')}
                                    paddingVertical={'py-[10px]'}
                                    paddingHorizontal={'px-[16px]'}
                                    borderRadius={'rounded-[4px] border-black border'}
                                    color={'hover:bg-black bg-main-background'}
                                    textColor={'hover:text-white text-black'}
                                    label={'Cari Judul Buku'}
                                />
                                <Button
                                    onClick={() => props.onSearch('author')}
                                    paddingVertical={'py-[10px]'}
                                    paddingHorizontal={'px-[16px]'}
                                    borderRadius={'rounded-[4px] border-black border'}
                                    color={'hover:bg-black bg-main-background'}
                                    textColor={'hover:text-white text-black'}
                                    label={'Cari Penulis Buku'}
                                />

                            </div>
                        </div>
                    </div>
                </div> : 
                <div className="animate-pulse w-full flex space-x-4">
                    <div className="w-full h-48 lg:h-96 bg-slate-600 "></div>
                </div>
            }
        </div>
    );
};

export default CategoryBanner;