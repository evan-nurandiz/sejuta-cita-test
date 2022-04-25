import React from 'react';
import Banner from './banner';
import Category from './category';

type HomePageProps = {

}

const HomePage:React.FC<HomePageProps> = (props) => {
    return (
        <React.Fragment>
            <div>
                <Banner/>
            </div>
            <div>
                <Category/>
            </div>
        </React.Fragment>
    );
};

export default HomePage;