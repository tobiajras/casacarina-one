export const GoogleMaps = () => {
  return (
    <div className='googleMaps__div'>
      <iframe
        title='googleMaps'
        className='googleMaps__iframe'
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3278.6404915688795!2d-58.46148638423345!3d-34.73945527220095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccde09e8f565d%3A0xda0c8e4831dd87e0!2sCasa%20Carina!5e0!3m2!1ses!2sar!4v1660532775602!5m2!1ses!2sar'
        width='600'
        height='300'
        style={{ border: 0 }}
        allowFullScreen=''
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
      ></iframe>
    </div>
  );
};
