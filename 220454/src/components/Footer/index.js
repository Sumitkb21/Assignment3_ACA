import React from 'react'
import './style.css'
import Instagram from '../../Pictures/Instagram.png'
import LinkedIn from '../../Pictures/LinkedIn.png'
import GMail from '../../Pictures/GMail.png'
import WhatsApp from '../../Pictures/WhatsApp.png'

function Footer() {
  return (
    <section className='foot-container' id='contacts'>
      <div className='footer-contain'>
        <div className='footer-about'>
          <h1 class="mb-8 text-7xl font-medium tracking-tight text-center pt-2">Contacts</h1>
            <div class="row" align="center">
                <div className='pb-6 pt-6 hover:scale-125'><a href="http://instagram.com/himanshu_shekhar__" target="_blank" className='py-4'><img src={Instagram} alt="Instagram logo" className='h-[50px]'/></a></div>

                <div className='pb-6 hover:scale-125'><a href="https://www.linkedin.com/in/himanshu-shekhar-a272b6260/" target="_blank"><img src={LinkedIn} alt="LinkedIn logo" className='h-[50px]' /></a></div>

                <div className='pb-6 hover:scale-125'><a href="https://mail.google.com/mail/?view=cm&fs=1&to=myanshim17@gmail.com" target="_blank"><img src={GMail} alt="GMail logo" className='h-[50px]' /></a></div>

                <div className='pb-6 hover:scale-125'><a href="https://api.whatsapp.com/send?phone=8250066494" target="_blank"><img src={WhatsApp} alt="WhatsApp logo" className='h-[50px]' /></a></div>
            </div>
        </div>
        <div className='line'></div>
        <div className='contact'>
          <div className='text-7xl font-medium tracking-tight text-center'>
            Get in Touch
          </div>
          <form action="push" className='form'>
            <div className='contact-grid'>
              <div className='contact-name'><input type="text" name='name' id='name' placeholder='Name' required/></div>
              <div className='contact-message'><textarea name="message" id="message" placeholder='Message' required></textarea></div>
              <div className='contact-mail'><input type="email" name='email' id='email' placeholder='Email' required/></div>
              <div className='contact-sub'><button><input type="submit" /></button></div>
            </div>
          </form>
        </div>
        
      </div>
    </section>
  )
}

export default Footer