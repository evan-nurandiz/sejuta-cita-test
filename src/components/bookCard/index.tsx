import React from 'react';

type BookCardProps = {
    image:string
    author:Array<string>
    title:string
    loading:boolean
}

const BookCard:React.FC<BookCardProps> = (props) => {
    return (
        <div>
            {
                !props.loading ? 
                <React.Fragment>
                    <img 
                        className='w-full lg:h-96 rounded-[4px]'
                        src={props.image} 
                        alt="" 
                    />
                    <div className='text-left'>
                        <p className='text-xl truncate font-semibold mb-[4px]'>{props.author[0]}</p>
                        <p className='text-md truncate font-regular text-gray-500'>{props.title}</p>
                    </div> 
                </React.Fragment> :
                <div className="animate-pulse">
                    <div className="rounded-[4px] bg-slate-200 h-48 w-full mb-[4px]"></div>
                    <div className="flex-1 space-y-6 py-1">
                        <div className="h-2 bg-slate-700 rounded"></div>
                        <div className="space-y-3">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="h-2 bg-slate-700 rounded col-span-2"></div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default BookCard;