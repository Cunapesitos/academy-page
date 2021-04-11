import Title from "../../../title/Title";

function WhatIs() {
  return (
    <div>
      <div className="container">
        <Title title="Laravel" />
        <p>
          Es un framework basado en PHP, utilizado para desarrollar aplicaciones
          web.
        </p>
        <p>
          Lo que verás en esta guía es un breve resumen de lo escencial para
          poder empezar con Laravel.
        </p>
        <p>
          Si necesitas mayor información, aquí tienes el 
          <a href="https://laravel.com/docs" target="_blanc" rel="noreferrer">
            link
          </a>
           de la documentación oficial de laravel.
        </p>
      </div>
    </div>
  );
}

export default WhatIs;
