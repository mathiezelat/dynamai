import React, { useEffect } from 'react'
import {Helmet} from 'react-helmet';

import ArticleInitial from './ArticleInitial';
import ArticleCarousel from './ArticleCarousel';
import ArticleBeneficiarios from './ArticleBeneficiarios';
import ArticleTestimoniosQuieroDonar from './ArticleTestimoniosQuieroDonar';
import { createUser, firebaseAnalytics } from './../../firebase/firebase.services';




function Home() {

    useEffect(() => {
        firebaseAnalytics("home_page_visited");
        createUser("users", {name:'prueba', edad: 21, institucion: 'prueba'});
    }, []);
    
    return (
        <>
            <Helmet>
                
                <title> Dýnamai - Home </title>

            </Helmet>
            <main>
                <ArticleInitial />

                <ArticleCarousel />
                
                <ArticleBeneficiarios />
                
                <ArticleTestimoniosQuieroDonar />
            </main>
        </>
    )
}

export default Home;
