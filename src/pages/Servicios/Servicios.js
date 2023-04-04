import "./Servicios.css"
import Asesoramiento from "./serv-asesoramiento.jpg"
import Coloracion from "./serv-coloracion.jpg"
import Lavado from "./serv-lavado.jpg"
import Peinados from "./serv-peinados.jpg"

const Servicios = () => {
  return (
  <div className="Serv">
      <h1>Servicios</h1>
      <img src={Asesoramiento} height="400" width="400" alt="asesoramiento"/> 
      <h3> Asesoramiento </h3>
      <p>Brindamos asesoramiento personalizado de imagen. A veces los cambios asustan, y más cuando se trata de nuestro pelo, donde dudamos de si realmente ese peinado que tenemos en mente nos va a favorecer. Nuestro asesoramiento es el servicio que da respuesta a esta necesidad. Nuesto objetivo despejar las dudas y dar a conocer qué peinados y cortes de pelo favorecen más a cada persona según sus rasgos y características.</p>
      <img src={Coloracion} height="400" width="400" alt="color"/> 
      <h3> Coloracion </h3>
      <p>El servicio de color es un universo infinito dentro de nuestro salón. Te asesoramos de una manera minuciosa para poder aconsejarte sobre qué es lo que tu cabello necesita. Brindamos un servicio de coloración Premium que tiene una exigencia de aplicación, lavado y cuidado más rigurosa. Este hará notar un antes y después en tu experiencia y resultado de tu coloración. ¡Animate!</p>
      <img src={Lavado} height="400" width="400" alt="lavado"/> 
      <h3> Lavado </h3>
      <p>Lavarte el cabello previo a un corte o peinado y/o luego de una coloración hace un inicio y/o finalización perfecta de tu experiencia en nuestra peluquería. Contamos con las mejores manos en nuestro equipo y una amplia variedad de marcas Premium que te garantizan un lavado único. Las grandes marcas de la cosmética argentina y francesa dan garantía de un producto a medida según deseo y necesidad.</p>
      <img src={Peinados} height="400" width="400" alt="peinados"/> 
      <h3> Peinados </h3>
      <p>Ofrecemos una amplia y variada gama de peinados para tu cabello. Sabemos que cada pelo tiene sus secretos y nosotros tenemos todos los secretos para para él. Combinamos siempre con un producto de Styling para potenciar tu look. Trabajamos con productos termo protectores y con un distinto grado de oleosidad que son ideales para proteger tu pelo mientras pasamos la plancha.</p>
  </div>
  );
};

export default Servicios;