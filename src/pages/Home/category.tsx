import React, { useEffect, useState } from 'react';
import { Button } from '../../components';
import API from '../../Api'
import {CategoryType} from '../../DataType/Category'
import { Link } from 'react-router-dom';

type CategoryProps = {

}


const Category:React.FC<CategoryProps> = (props) => {
    const [loading,setLoading] = useState<boolean>(false);
    const [category,setCategory] = useState<Array<CategoryType>>([])

    const fetchData = async() => {
        setLoading(true);
        await API.get('/fee-assessment-categories').then((res) => {
            setCategory(res.data);
            setLoading(false);
        })
    }

    useEffect(() => {
        fetchData();
    },[])

    return (
        <div className='mx-auto px-[16px] py-[24px] md:py-[48px] lg:px-[0px] lg:w-4/5 lg:py-[64px]'>
            {
                !loading && (
                    <>
                        <p className='text-left mb-[24px]'>Explore Categories</p>
                        <div className="grid gap-[8px] grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
                            {
                                category.map((data,i) => 
                                    <div key={i} className="col-span-1">
                                        <Link to={`/category-${data.name}/${data.id}`}>
                                            <Button
                                                isFitInContainer={true}
                                                paddingVertical={'py-[14px]'}
                                                paddingHorizontal={'px-[16px]'}
                                                borderRadius={'rounded-[16px] border-gray-200 border'}
                                                color={'hover:bg-main-background bg-white'}
                                                textColor={'text-black'}
                                                label={data.name}
                                            />
                                        </Link>
                                    </div>
                                )
                            }
                        </div>
                    </>
                )
            }
        </div>
    );
};

export default Category;