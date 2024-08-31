import React from 'react'


// const customStyle = {
//     marginTop: "30%"
    
    
//   }

const Footer = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
  return (
    <div>
        <p className='footer'>Copyright {currentYear}</p>
    </div>
  )
}

export default Footer