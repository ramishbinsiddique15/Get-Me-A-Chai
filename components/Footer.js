import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-slate-900 text-white flex items-center justify-center p-5'>
      <p className='text-center'>Copyright &copy; {currentYear} Get Me a Chai | All rights reserved</p>
    </footer>
  )
}

export default Footer
