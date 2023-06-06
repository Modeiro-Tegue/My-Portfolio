/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/Wandji.jpg'
import AVTR2 from '../../assets/Zidane.jpg'
import AVTR3 from '../../assets/Risbo.jpg'
import AVTR4 from '../../assets/Brown2.jpg'
import AVTR5 from '../../assets/Adolphe1.jpg'
import AVTR6 from '../../assets/Graziella.jpg'
import AVTR7 from '../../assets/Dilane .jpg'
import AVTR8  from '../../assets/Tricago.jpg'

import {Pagination} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';




import 'swiper/css';
import 'swiper/css/pagination';


const data = [
    {
    avatar: AVTR1,
    name:'Wandji Brown',
    review: 'I contacted @Modeiro Tegue to build me my first professional website and i was very satisfied by his result he is such a good developper.'
    },

    {
    avatar: AVTR2,
    name:'Kouam Wati Zizou',
    review: 'Nowadays to find a developper as @Modeiro is dificult, he was actually fully involevd in the backend of  my first software for the management of my school records.'
    },

    {
    avatar: AVTR3,
    name:'Nyambe Boris ',
    review: 'I will recommend to everybody wishing any service under Networking or software development to contact @Modeiro Tegue for Efficient services provision .'
    },

    {
    avatar: AVTR4,
    name:'Brown Tegue',
    review: 'other from Being my junior Brother, He is a Very hardworking and performant person especially in the Field of Development and conception/ Modeling of Your System..'
    },

    {
        avatar: AVTR5,
        name:'Njinkeh Adolphe Junior',
        review: 'A very Amazing person and always trying to put his best in any thing he does.. the best i know concerning the Basics under Networking and still going more awesome with time and studies' 
        },

        {
            avatar: AVTR6,
            name:'Graziella Djoumessi',
            review: 'I highly recommend him if you are interested in Building a responsive and easily Updatable Website based on Java programming for the backend together with the ReactJs technology.. Infact try once and stay forever'
            },

            {
                avatar: AVTR7,
                name:'Ngongang Franck Dilane',
                review: 'A very Amazing person, friend and always trying to put his best in any thing he does.. the best i know concerning the Basics under Networking and still going more awesome with time and studies' 
                },

                {
                    avatar: AVTR8,
                    name:'Maxwell Tricago',
                    review: 'An ambitious person specific at his own level in any task he is assigned to.. interested in the quality of the service he provides and not the pace of doing things and having issues with time in it.. a good Engineer actually defending that status with hardwork and consistency' 
                    },
    

]

const Testimonials = () => {
    return(
        <section id='testimonials'>
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>

            <Swiper className="container testimonials__container"
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{clickable: true}}>

               {
                data.map(({avatar,name,review}, index) => {
                    return(
                    <SwiperSlide key={index} className='testimonial'>
                    <div className='client__avatar'>
                        <img src={avatar}/>                   
                    </div>
                    <div>
                        <h5 className='client__name'>{name}</h5>
                        <small className='client__review'>{review}</small>
                    </div> 
                    </SwiperSlide>
                    )
                } )
               } 
               
            </Swiper>
        </section>
    )
}

export default Testimonials