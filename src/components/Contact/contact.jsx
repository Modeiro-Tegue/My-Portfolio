import React, { useRef } from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import { RiMessengerLine } from "react-icons/ri";
import {BsWhatsapp}  from 'react-icons/bs'
import {BsTelegram} from 'react-icons/bs'
import emailjs from 'emailjs-com'


const contact = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_k9woqh6', 'template_qqqe10h', form.current, 'UhIgmREUVvI9YbEQu')
e.target.reset()

  };

  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact_container'>
        <div className='contact__options'>
          
         <article className='contact__option'>
              <HiOutlineMail className='contact__option-icon' />
          <h4>Email</h4>
          <h5>mikelmodeirotegue@gmail.com</h5>
          <a href='mailto:mikelmodeirotegue@gmail.com' target='_blank' rel="noreferrer">Send a Message</a>
         </article> 

         <article className='contact__option'>
              <RiMessengerLine className='contact__option-icon'/>
          <h4>Messenger</h4>
          <h5>Modeiro Tegue</h5>
          <a href='https://m.me/modeiro.tegue'  target='_blank' rel="noreferrer">Send a Message</a>
         </article> 

         <article className='contact__option'>
              < BsTelegram className='contact__option-icon'/>
          <h4>Telegram</h4>
          <h5>Modeiro Tegue</h5>
          <a href='https://t.me/modeiro.tegue'  target='_blank' rel="noreferrer">Send a Message</a>
         </article> 

         <article className='contact__option'>
              <BsWhatsapp className='contact__option-icon' />
          <h4>WhatsApp</h4>
          <h5>Hey lets Chat..</h5>
          <a href='https://api.whatsap.com/send?phone+237699075590'  target='_blank' rel="noreferrer">Send a Message</a>
         </article> 

        </div>
       {/****************END OF CONTACT OPTIONS***********/}
       {/*I will move forward in the backend of this form by using EmailJs to send mails from the below form */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="Email" name='email' placeholder='Your Email' required />
          <textarea name="message"  rows="7" placeholder='Your Message' required></textarea>
          <button type='Submit' className='btn btn-primary '> Message Modeiro Tegue</button>
        </form>
      </div>

    </section>
  )
}

export default contact