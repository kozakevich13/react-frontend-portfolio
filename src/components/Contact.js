import React from 'react'
import { useRef } from 'react'
import { Player } from '@lottiefiles/react-lottie-player';
import emailjs from '@emailjs/browser'
import { useTranslation } from "react-i18next";


const Contact = () => {
  const { t, i18n } = useTranslation();
  const form = useRef()

  const sendEmail = (e) => {
      e.preventDefault()
  
      emailjs
          // service id, template id and your public key, get these by registering on EmailJs
        .sendForm('service_305y2ft', 'template_6rhrnoe', form.current, 'XlGwnB6Ngl5X5XTSR')
        .then(
          () => {
            alert('Message successfully sent!')
            window.location.reload(false)
          },
          () => {
            alert('Failed to send the message, please try again')
          }
        )
    }

  return (
    <div className="container-fluid p-5">
      <div className="d-sm-flex align-items-center justify-content-center">
        <div>
            <form ref={form} onSubmit={sendEmail}>
                <ul style={{listStyle: 'none'}} className='p-4'>
                    <li className="m-3 shadow-sm">
                    <input 
                        className='form-control form-class' 
                        placeholder={t('name')} 
                        type="text" name="name" 
                        required 
                    />
                    </li>
                    <li className="m-3 shadow-sm">
                    <input
                        className='form-control form-class'
                        placeholder={t('email')}
                        type="email"
                        name="email"
                        required
                    />
                    </li>
                    <li className='m-3 shadow-sm'>
                    <input
                        placeholder={t("subject")}
                        className='form-control form-class'
                        type="text"
                        name="subject"
                        required
                    />
                    </li>
                    <li className='m-3 shadow-sm'>
                    <textarea
                        placeholder={t("message")}
                        name="message"
                        required
                        className='form-control form-class'
                    ></textarea>
                    </li>
                    <li>
                    <input type="submit" className="btn btn-primary custom-btn fw-bold m-3 px-5" value={t("send")} />
                    </li>
                </ul>
            </form>
        </div>  
        <div>
            <Player
              src='https://assets10.lottiefiles.com/packages/lf20_u25cckyh.json'
              className="player d-md-none d-lg-block"
              loop
              autoplay
              style={{ maxHeight: '500px', maxWidth: '500px' }}
            />
        </div>
      </div>
    </div>

  )
}

export default Contact