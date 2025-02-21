import React, {useEffect}from 'react';
import Prism from "prismjs";

function Practica1(){
    const start = "/Web/start.png";
    const go = "/Web/go.png";
    useEffect(() => {
        Prism.highlightAll();
      }, []);
    return(
        <div className="px-6 w-full">
            <p className="text-justify pb-2">La primera configuración que se realiza es la del Serial.begin </p>
            <p className="text-justify pb-2">“Establece la velocidad de datos en bits por segundo (baud) para la transmisión de datos en serie. Para comunicarse con la computadora, use una de estas tarifas: 300, 600, 1200, 2400, 4800, 9600, 14400, 19200, 28800, 38400, 57600 o 115200” (Serial.Begin(), s/f).</p>
            <p className="text-justify pb-2">Que en pocas palabras sirve para la velocidad de transmisión en serie.</p>
            <p className="text-justify pb-2">Para efectos prácticos ocuparemos la velocidad de 9600 y lo asignaremos al void setup()</p>
            <pre>
                <code className="language-cpp">
{`void setup() {
  Serial.begin(9600);
} `}        
                </code>
            </pre>

            <p className="text-justify pb-2">En este caso solo asignamos la velocidad para poder visualizar un mensaje por consola lo haremos con Serial.print o Serial.println, la diferencia es que Serial.print manda el mensaje corrido, y el Serial.println da un salto de línea entre cada mensaje mostrado.</p>
            <p className="text-justify pb-2">Para el ejemplo utilizaremos el Serial.println para que sea más fácil leerlo.</p>
            <p className="text-justify pb-2">Mostraremos un mensaje desde el setup() y otro desde el loop()</p>

            <pre>
                <code className="language-cpp">
{`void setup() {
  Serial.begin(9600);
  Serial.println("Hola mundo desde el setup");
}

void loop() {
  Serial.println("Hola mundo desde el loop");
} `}        
                </code>
            </pre>
            <p className="text-justify pb-2">Si corremos la simulación</p>
            <div className="flex justify-center items-center">
                <img src={start} className="py-2" alt="Start" />
            </div>
            <p className="text-justify pb-2">Esperamos unos segundos y detenemos la simulación</p>
            <div className="flex justify-center items-center">
                <img src={go} className="w-2/3 py-2" alt="go" />
            </div>
            <p className="text-justify pb-2">Notaremos que la consola manda mensajes por microsegundos</p>
            <p className="text-justify pb-2">Y todos dicen</p>
            <p className="text-justify pb-2">Hola mundo desde el loop</p>
            <p className="text-justify pb-2">Para que no se envíen tan rápido añadiremos una delay()</p>
            <p className="text-justify pb-2">“Pausa el programa por la cantidad de tiempo (en milisegundos) especificado como parámetro. (Hay 1000 milisegundos en un segundo.)” (Delay(), s/f). </p>
            <pre>
                <code className="language-cpp">
{`void setup() {
  Serial.begin(9600);
  Serial.println("Hola mundo desde el setup");
}

void loop() {
  Serial.println("Hola mundo desde el loop");
  delay(5000);
} `}        
                </code>
            </pre>
            <p className="text-justify pb-2">En este caso añadimos un delay(5000); lo que equivale a 5 segundos</p>
            <p className="text-justify pb-2">Si ponemos 6000 serán 6 segundos de espera.</p>
            <p className="text-justify pb-2">Felicidades, acabas de realizar tu primer "Hola mundo". </p>
        </div>
    )
}

export default Practica1;