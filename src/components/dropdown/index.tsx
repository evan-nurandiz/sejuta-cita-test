import React, { useState } from 'react';
import classNames from 'classnames'
import { ChevronDown, ChevronUp } from '../../assets';

type DropdownProps = {
    title:string
    description:string
}

const Dropdown:React.FC<DropdownProps> = (props) => {
    const [open,setOpen] = useState<boolean>(false)

    return (
        <div>
            <div className='flex justify-between py-[12px] px-[8px] border-b-2' onClick={() => setOpen(!open)}>
                <p className='text-black text-xl font-semibold'>{props.title}</p>
                <img className='h-[16px] w-[16px]' src={open ? ChevronUp : ChevronDown} alt="" />
            </div>
            <div className={classNames('py-[4px] text-left',
                !open && 'hidden'
            )}>
                <p className='text-gray-600 text-md font-reguler'>{props.description}</p>
            </div>
        </div>
    );
};

export default Dropdown;