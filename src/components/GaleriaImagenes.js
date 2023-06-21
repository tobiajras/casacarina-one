import { galeriaData } from '../data/galeriaData';

export const GaleriaImagenes = () => {
  return (
    <>
      <div className="galeriaImagenes__titleDiv">
        <h4 className="galeriaImagenes__title">Galería</h4>
      </div>
      <div className="galeriaImagenes__gridGaleria">
        {galeriaData.map((img) => {
          return (
            <div
              className={`galeriaImagenes__divGaleria galeria${img.id}`}
              key={img.id}
            >
              <img src={`/assets/galeria/${img.src}`} alt={img.title} />
            </div>
          );
        })}
      </div>
    </>
  );
};
