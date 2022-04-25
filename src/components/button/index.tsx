import React from 'react';
import classNames from 'classnames'

type ButtonProps = {
    textColor?:string
    paddingVertical?:string
    paddingHorizontal?:string
    color?:string
    isFitInContainer?:boolean
    borderRadius?:string
    height?:string
    borderWidth?:string
    borderColor?:string
    label?:string
    onClick?: () => void
}

const Button:React.FC<ButtonProps> = (props) => {
    return (
        <button onClick={props.onClick} type="button" className={classNames("",
            props.textColor ? props.textColor : 'text-white',
            props.paddingVertical ? props.paddingVertical : null,
            props.paddingHorizontal ? props.paddingHorizontal : null,
            props.color ? props.color : 'bg-black',
            props.isFitInContainer ? 'w-full' : null,
            props.borderRadius ? props.borderRadius : 'rounded-[5px] ',
            props.height ? props.height : null,
            props.borderWidth ? props.borderWidth : null,
            props.borderColor ? props.borderColor : null
        )}>
            {props.label}
        </button>
    );
};

export default Button;