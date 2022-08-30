let nombre = prompt('Bienvenid@ a EIPROSS! Cuál es tu nombre?');
let edad = parseInt(prompt(`${nombre}, cuál es tu edad?`));
let costoBase = 0;
let costo;
let opción = parseInt(
  prompt(
    `${nombre}, elegí tu opción de afiliación: 1-Obligatoria. 2-Voluntaria`
    )
    );
    
    //costo segun la edad
    const costoPorEdad = (edad) => {
      if (edad < 21) {
        
        costo = 5000;
        return costo;
      } else if (edad >= 21 && edad < 36) {
        
        costo = 6200;
        return costo;
      } else if (edad >= 36 && edad < 60) {
        
        costo = 8000;
        return costo;
      } else {
        costo =9000
        return costo;
      }
    };
costo = costoPorEdad(edad);
recargo(opción);
costoPorEdad(edad);

function recargo(opción) {
  if (opción === 1) {
    alert(`${nombre}, tu costo de afiliación Obligatoria es de ${costoPorEdad()}. Debés permanecer afiliad@ al menos 24 meses y cumplir nuestros períodos de carencia`);
  } else if (opción === 2) {
    let recargo = (costoPorEdad()) * 1.3
   alert(`${nombre}, tu costo de afiliación Voluntaria es de ${recargo}. Podés darte de baja cuando lo desees y acceder al servicio completo desde el día 1!`);
  } else {
    alert(`${nombre}, por favor ingresa una opción valida`);
  }
}

