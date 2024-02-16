import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
        <div className="gpt3__header-content">
          <h1 className='gradient__text'>Customized AI integration for your business!</h1>
          <p>Discover tailored AI solutions for your business with our custom integration service. Our team works closely with you to understand your needs, creating personalized solutions for automation, customer experience enhancement, decision optimization, and operational streamlining. From consultation to implementation, we're dedicated to delivering AI solutions perfectly aligned with your objectives, empowering your business for success.</p>
         <div className='gpt3__header-content__input'>
            <input type="email" placeholder="Your Email Address"></input>
            <button type="button">get started!</button>
          </div>
          <div className='gpt3__header-content__people'>
            <img src={people} />
            <p>Partner with us today!</p>
          </div>
        </div>
        <div className='gpt3__header-image'>
          <img src={ai} />
        </div> 
    </div>
  )
}


export default Header
