import React from 'react'

type ModalProps = {
    openModal:boolean
}


const Modal:React.FC<ModalProps> = (props) => {
    return (
        <React.Fragment>
            {
                props.openModal ?
                    <div className="flex bg-transparant-bg overflow-x-hidden fixed right-0 left-0 top-0 z-50 justify-center items-center h-full md:h-full md:inset-0">
                        <div className="relative px-4 w-full max-w-6xl h-full mt-14 md:mt-14 lg:mt-14">
                            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                <div className='mx-auto flex lg:w-2/3 py-[24px]'>
                                    <img className='w-full' src="https://cdn.sejutacita.id/6138d21e3a09ee0013ee730f/Booku/c55ef13f-eb0e-40de-a04c-e46df5940682.png" alt="" />
                                    <div>
                                        <p>dasdad</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> : null
            }

        </React.Fragment>
    )
}

export default Modal