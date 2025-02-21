import React, {useEffect}from 'react';
import Prism from "prismjs";

function Practica2(){
    useEffect(() => {
            Prism.highlightAll();
          }, []);
    return(
        <div className="px-6 w-full">
             <p className="text-justify pb-2">Para la segunda práctica trabajaremos con las variables</p>
             <p className="text-justify pb-2">Trabajaremos en la función loop()</p>
            <pre>
                <code className="language-cpp">
{`void setup() {
 Serial.begin(9600);
}

void loop() {
}`}        
                </code>
            </pre>
            <p className="text-justify pb-2">Tenemos diferentes tipos de datos</p>
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr>
                  <th className="w-1/5 text-center border border-gray-300">Nombre</th>
                  <th className="w-4/5 text-center border border-gray-300">Descripción</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                    <td className="text-center border border-gray-300">byte</td>
                    <td className="pl-1 border border-gray-300">Almacena un rango numérico de 8 bits sin decimales. Su rango es de 0 a 255. <br />
                        <pre><code className="language-cpp">{`byte variableEntrada = 180;`}</code></pre>
                    </td>
                </tr>
                <tr>
                    <td className="text-center border border-gray-300">int</td>
                    <td className="pl-1 border border-gray-300">Valor numérico entero, este puede ser tanto un número positivo como negativo, pero nunca decimal. <br />
                        <pre><code className="language-cpp">{`int numEntero = 1589;`}</code></pre>
                        <pre><code className="language-cpp">{`int numEntero2 = -1589;`}</code></pre>
                    </td>
                </tr>
                <tr>
                    <td className="text-center border border-gray-300">float</td>
                    <td className="pl-1 border border-gray-300">Valor numérico decimal, estos pueden contener números enteros como decimales.<br />
                        <pre><code className="language-cpp">{`float numDecimal = 5.23;`}</code></pre>
                    </td>
                </tr>
                <tr>
                    <td className="text-center border border-gray-300">long</td>
                    <td className="pl-1 border border-gray-300">Se utiliza para el caso de que se usen números con tamaños muy altos, esto ayuda al tiempo de ejecución.<br />
                        <pre><code className="language-cpp">{`long numLargo = 900000;`}</code></pre>
                    </td>
                </tr>
                <tr>
                    <td className="text-center border border-gray-300">Char</td>
                    <td className="pl-1 border border-gray-300">Almacena sólo un carácter, estos pueden ser letras y tener que ir ‘ ’.<br />
                        <pre><code className="language-cpp">{`char letra = ‘a’;`}</code></pre>
                        <pre><code className="language-cpp">{`char Dos = ‘2’;`}</code></pre>
                    </td>
                </tr>
                <tr>
                    <td className="text-center border border-gray-300">String</td>
                    <td className="pl-1 border border-gray-300">Este a diferencia del char, almacena más de un carácter por lo que podemos almacenar frases.<br />
                        <pre><code className="language-cpp">{`String frase = “Hola a todos”;`}</code></pre>
                    </td>
                </tr>
              </tbody>
            </table>
            <p className="text-justify pb-2">La estructura para crear una variable es</p>
            <pre><code className="language-cpp">{`Tipo_dato nombre = valor;`}</code></pre>
            <p className="text-justify pb-2">Para crear un variable de tipo numérico, seria </p>
            <pre>
                <code className="language-cpp">
{`void setup() {
 Serial.begin(9600);
}

void loop() {
  int numEntero = 1589;
}`}        
                </code>
            </pre>
            <p className="text-justify pb-2"> Y para poder verla en la consola y controlar el tiempo de respuesta:</p>
            <pre>
                <code className="language-cpp">
{`void setup() {
 Serial.begin(9600);
}

void loop() {
  int numEntero = 1589;
  Serial.println(numEntero);
  delay(5000);
}`}        
                </code>
            </pre>
            <p className="text-justify pb-2 italic"> Actividad:  Crear diferentes variables con los tipos de datos y mostrarlos por consola.</p>
        </div>
    )
}
export default Practica2;