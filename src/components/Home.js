import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';
import { NavLink } from 'react-router-dom';
import test from '../assets/9LUNvcy73S.json'
import { motion } from 'framer-motion'

const Home = () => {

  const PlayerAnimation = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: custom => ({
      x: 0,
      opacity: 1,
      transition: {delay: custom * 0.2},
    }) 
  } 
  return (
    <motion.section 
      className="bg-light p-5 min-vh-100"
      initial="hidden"
      whileInView="visible"
      >
      <div className='container-fluid'>
       <div className='d-sm-flex align-items-center justify-content-between'>
          <div className='ms-sm-5 ps-sm-5 d-flex flex-column text-center align-items-center align-items-lg-start'>
            <motion.h1 custom={1} variants={PlayerAnimation} className=''>Hi, I'm Vitaliy</motion.h1>
            <motion.h1 custom={2} variants={PlayerAnimation} className='fw-bold custom-font'>Web Developer.</motion.h1>
            <motion.p custom={3} variants={PlayerAnimation} className='pt-5'>Frontend Development / ReactJS / Web Designing</motion.p>
            <NavLink to='/react-frontend-portfolio/projects'><button className='btn btn-primary custom-btn ps-5 pe-5 fw-bold mt-2'>My Work</button></NavLink>
          </div>

          <motion.div
            variants={PlayerAnimation}
            custom={4}
          >
            <Player
              src={test}
              className="player"
              loop
              autoplay
              style={{ maxHeight: '700px', maxWidth: '700px' }}
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default Home