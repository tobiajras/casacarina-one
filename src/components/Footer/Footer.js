export const Footer = () => {
  return (
    <div className='footer__divParent'>
      <div className='footer__firstDiv'>
        <i></i>
        <a href=''>7500-8000</a>
        <i></i>
        <a href=''>-8000</a>
      </div>
      <div className='footer__secondDiv'>
        <div className='footer__childSecondDiv'>
          <img
            className='footer__img'
            src='/assets/logoCasaCarina2.svg'
            alt='logoCasaCarina2'
          />
        </div>
      </div>
      <div className='footer__thirdtDiv'>
        <i class='fas fa-times'></i>
        <i class='fa-brands fa-whatsapp-square'></i>
        <i class='fa-brands fa-facebook-square'></i>
        <i class='fa-brands fa-instagram-square'></i>
      </div>
    </div>
  );
};
