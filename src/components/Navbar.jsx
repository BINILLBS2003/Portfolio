import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'; // Don't forget this import!
function Navbar() {
  return (
    <nav className='flex items-center justify-between py-6'>
        <div className=' flex flex-shrink-0 items-center'>
            <a href="" aria-label="Home">
                <img src="/abc.jpg" className='mx-2' width={80} height={50} alt="logo"/>

            </a>
            </div>
            <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
              <a href="http://www.linkedin.com/in/binil-p" target="blank" rel="noopener noreferrer " aria-label='Linked-in'><FaLinkedin/></a>
              <a href="https://github.com/BINILLBS2003" target="blank" rel="noopener noreferrer " aria-label='Github'><FaGithub/></a>
              <a href="https://www.instagram.com/_.bnil__?igsh=ZGpuMnMwZWxvb3Jr" target="blank" rel="noopener noreferrer " aria-label='Instagram'><FaInstagram/></a>
              <a href="http://www.linkedin.com/in/binil-p" target="blank" rel="noopener noreferrer " aria-label='Twitter'><FaTwitter/></a>
            </div>

    </nav>
  )
}

export default Navbar