import React from 'react'
import CardItem from './CardItem'
import './Cards.css';
import myFImage from '../images/img-2.jpg'
import mySImage from '../images/img-9.jpg'
import myTImage from '../images/img-3.jpg'
import myfImage from '../images/img-4.jpg'
import myeImge from '../images/img-8.jpg'



function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these EPIC Destinations!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src={mySImage}
                            text='Explore the hidden waterfall deep inside the Amazon Jungle'
                            label='Adventure'
                            path='/services'
                            />
                        <CardItem
                            src={myFImage}
                            text='Travel through the Islands of Bali in a Private Cruise'
                            label='Luxury'
                            path='/services'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src={myTImage}
                            text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                            label='Mystery'
                            path='/services'
                        />
                        <CardItem
                            src={myfImage}
                            text='Experience Football on Top of the Himilayan Mountains'
                            label='Adventure'
                            path='/products'
                        />
                        <CardItem
                        src={myeImge}
                        text='Ride through the Sahara Desert on a guided camel tour'
                        label='Adrenaline'
                        path='/sign-up'
                        />
                    </ul>
                
                </div>
            </div>
            
        </div>
    )
}

export default Cards
