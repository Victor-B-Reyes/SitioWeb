import React, {useEffect}from 'react';
import Prism from "prismjs";

function Practica3(){
    useEffect(() => {
        Prism.highlightAll();
      }, []);
    return(
        <div className="px-6 w-full">
            <p className="text-justify pb-2">Para la segunda práctica trabajaremos con las variables</p>
            <pre>
                <code className="language-cpp">
{`void setup() {
 Serial.begin(9600);
}

void loop() {
}`}        
                </code>
            </pre>
        </div>
    )
}

export default Practica3;