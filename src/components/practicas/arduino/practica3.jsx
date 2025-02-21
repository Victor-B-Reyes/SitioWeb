import React, {useEffect}from 'react';
import Prism from "prismjs";

function Practica3(){
    useEffect(() => {
        Prism.highlightAll();
      }, []);
    return(
        <div className="px-6 w-full">
            <p className="text-justify pb-2"> Para realizar las operaciones necesitamos saber los operadores más utilizados</p>
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr>
                    <th colSpan={3}>Operadores</th>
                </tr>
              </thead>
              <tbody>
              <tr>
                  <td className="text-center border border-gray-300">Nombre</td>
                  <td className="text-center border border-gray-300">Signo</td>
                  <td className="text-center border border-gray-300">Uso</td>
                </tr>
                <tr>
                    <td className="text-center border border-gray-300">Suma</td>
                    <td className="text-center border border-gray-300">+</td>
                    <td className="text-center border border-gray-300">Numero1 + Numero2</td>
                </tr>
                <tr>
                    <td className="text-center border border-gray-300">Resta</td>
                    <td className="text-center border border-gray-300">-</td>
                    <td className="text-center border border-gray-300">Numero1 - Numero2</td>
                </tr>
                <tr>
                    <td className="text-center border border-gray-300">Multiplicación</td>
                    <td className="text-center border border-gray-300">*</td>
                    <td className="text-center border border-gray-300">Numero1 * Numero2</td>
                </tr>
                <tr>
                    <td className="text-center border border-gray-300">División</td>
                    <td className="text-center border border-gray-300">/</td>
                    <td className="text-center border border-gray-300">Numero1 / Numero2</td>
                </tr>
                </tbody>
            </table>
            <p className="text-justify pb-2">Para esto podemos trabajar de dos formas</p>
            <p className="text-justify pb-2">La operación mostrarla por consola</p>
            <pre>
                <code className="language-cpp">
{`void setup() {
  Serial.begin(9600);
}

void loop() {
  Serial.println(5+2);
  delay(5000);
}`}        
                </code>
            </pre>
            <p className="text-justify pb-2">O realizarla por medio de variables</p>
            <pre>
                <code className="language-cpp">
{`void setup() {
  Serial.begin(9600);
}

void loop() {
  int numero1 = 5;
  int numero2 = 2;
  int resultado = numero1 + numero2;
  Serial.println(resultado);
  delay(5000);
}`}        
                </code>
            </pre>
            <p className="text-justify pb-2">¿Cuál es la diferencia?</p>
            <p className="text-justify pb-2">El método de realizarlo, cualquiera de los dos métodos es correcto, pero lo adecuado es trabajar con variables.</p>
            <p className="text-justify pb-2">Ya que cuando se un proyecto más grande ocuparemos más datos.</p>
            <p className="text-justify pb-2">La primera variable que tenemos es</p>
            <pre><code className="language-cpp">{`int numero1 = 5;`}</code></pre>
            <p className="text-justify pb-2">En este caso es un tipo de dato entero y su nombre será numero1 (Tenemos que recordar que pude ser asignado cualquier nombre), y tiene el valor de 5.</p>
            <p className="text-justify pb-2">Lo mismo pasa en</p>
            <pre><code className="language-cpp">{`int numero2 = 2;`}</code></pre>
            <p className="text-justify pb-2">La siguiente es la variable de resultado que lo que hace es almacenar la suma de numero1 + numero2</p>
            <pre><code className="language-cpp">{`int resultado = numero1 + numero2;`}</code></pre>
            <p className="text-justify pb-2">Y por último imprimimos la variable de resultado</p>
            <pre><code className="language-cpp">{`Serial.println(resultado);`}</code></pre>
            <p className="text-justify pb-2">Siguiendo la siguiente estructura, que lo que hace en la línea 9 es mostrar un mensaje (Resultado de la suma es: ) sin dar un saldo de línea (Serial.print), y en la 10 muestra el valor de la suma, pero añade un salto de línea.</p>
            <pre>
                <code className="language-cpp">
{`void setup() {
  Serial.begin(9600);
}

void loop() {
  int numero1 = 5;
  int numero2 = 2;
  int resultado = numero1 + numero2;
  Serial.print("El resultado de la suma es : ");
  Serial.println(resultado);
  delay(5000);
}`}        
                </code>
            </pre>
            <p className="text-justify pb-2 italic"> Actividad: a partir de la línea 10 siguiendo la estructura de crear una variable con el nombre de la operación y almacenar dicha operación con las variables ya declaradas, realizar las operaciones faltantes y mostrar el mensaje y el valor.</p>
        </div>
    )
}

export default Practica3;