import Presentation from "../../../utils/presentation/Presentation";
import Title from "../../../utils/title/Title";

function Instalation() {
  const slides = [
    {
      imagePath: "/xampp/instalation/1.png",
      description: "1. Podemos ignorar este mensaje, de momento, no es algo que nos preocupe."
    },
    {
      imagePath: "/xampp/instalation/2.png",
      description: "2. Siguiente."
    },
    {
      imagePath: "/xampp/instalation/3.png",
      description: "3. No es necesario tener todo seleccionado, solo necesitas el combo AMPP:",
      note: "Apache Mysql Php Phpmyadmin"
    },
    {
      imagePath: "/xampp/instalation/4.png",
      description: "4. Puedes instalar XAMPP en la ruta que desees.",
      note: "no olvides dónde lo estás instalando"
    },
    {
      imagePath: "/xampp/instalation/5.png",
      description: "5. Elige tu idioma de preferencia."
    },
    {
      imagePath: "/xampp/instalation/6.png",
      description: "6. Desmarca la opción para que no te rediriga a la documentación."
    },
    {
      imagePath: "/xampp/instalation/7.png",
      description: "7. Pregúntate si realmente quieres instalar XAMPP."
    },
    {
      imagePath: "/xampp/instalation/8.png",
      description: "8. No te muevas, la instalación no dura mucho."
    },
    {
      imagePath: "/xampp/instalation/9.png",
      description: "9. Asegurate de tener marcada esta opción, luego Finish."
    },
    {
      imagePath: "/xampp/instalation/10.png",
      description: "10. Damos click a los botones Start, de Apache y de MySQL."
    },
    {
      imagePath: "/xampp/instalation/11.png",
      description: "11. Deben colorearse de esta forma:",
      note: "Aún no tenemos la sección de problemas, si tienes alguno, por favor contáctanos por discord. (link en el pié de la página)"
    },
    {
      imagePath: "/xampp/instalation/12.png",
      description: "12. Damos click en el boton Admin de Apache."
    },
    {
      imagePath: "/xampp/instalation/13.png",
      description: "13. Debe abrirse esta página en el navegador:",
      note: "Aún no tenemos la sección de problemas, si tienes alguno, por favor contáctanos por discord. (link en el pié de la página)"
    },
    {
      imagePath: "/xampp/instalation/14.png",
      description: "14. Damos click en el boton Admin de MySQL."
    },
    {
      imagePath: "/xampp/instalation/15.png",
      description: "15. Debe abrirse esta página en el navegador:",
      note: "Aún no tenemos la sección de problemas, si tienes alguno, por favor contáctanos por discord. (link en el pié de la página)"
    },
    {
      imagePath: "/xampp/instalation/15.png",
      description: "Listo!",
      note: ":)"
    },
  ];
  return (
    <div className="container">
      <Title title="Instalación" />
      <p>Pasos para instalar xampp:</p>
      <div className="col-8 mx-auto">
        <Presentation slides={slides} />
      </div>
    </div>
  );
}

export default Instalation;
