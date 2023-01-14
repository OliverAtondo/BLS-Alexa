/* *
 * This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK (v2).
 * Please visit https://alexa.design/cookbook for additional examples on implementing slots, dialog management,
 * session persistence, api calls, and more.
 * */
const Alexa = require('ask-sdk-core');
const persistenceAdapter = require('ask-sdk-s3-persistence-adapter');
var caso;
var dea;
var paciente;
var estado;
var cronometro;
var inicio;


const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        
        const attributesManager = handlerInput.attributesManager;
        const sessionAttributes = attributesManager.getSessionAttributes() || {};
        
        var escenario = (Math.floor((Math.random() * (6)) + 1));
        dea=0;
        estado=0;
        inicio = new Date();
        var speakOutput;
        var speakOutput2;
        
        switch (escenario) {
  case 1:
      escenario = 'Usted se encuentra en la vía pública, y encuentra a un paciente inconsciente, ningún testigo presencial ha realizado maniobras de R.C.P.';
      caso=1;
      paciente=1;
      speakOutput = `Hola, soy tu asistente virtual.  Iniciaremos la práctica de B.L.S. Y el escenario es el siguiente: ${escenario} `;
      speakOutput2 = `Lo lamento, puedes decirlo de nuevo? Prueba a decir: "Es segura" o "No es segura". La escena es segura?`;
        return handlerInput.responseBuilder
            .addDirective({
            "type": "Alexa.Presentation.APLA.RenderDocument",
            "token": "launch_a",
            "document": {
    "type": "APLA",
    "version": "0.91",
    "mainTemplate": {
        "parameters": [
            "payload"
        ],
        "item": {
            "type": "Sequencer",
            "description": "This sample plays a series of audio clips one after another.",
            "items": [
                {
                     "type": "Silence",
                    "duration": 200
                },
                {
                    "type": "Speech",
                    "content": "<speak> La escena es segura? </speak>"
                }]}}}})
            .addDirective({
    "type": "Alexa.Presentation.APL.RenderDocument",
    "token": "documentToken",
    "document": {
        "src": "doc://alexa/apl/documents/Escenario1",
        "type": "Link"
    },
    "datasources": {
        "simpleTextTemplateData": {
            "type": "object",
            "properties": {
                "backgroundImage": "https://d2o906d8ln7ui1.cloudfront.net/images/response_builder/background-green.png",
                "foregroundImageLocation": "left",
                "foregroundImageSource": "",
                "headerTitle": "Práctica B.L.S",
                "headerSubtitle": "",
                "hintText": "Prueba a decir: \"Es segura\", \"No es segura\"",
                "headerAttributionImage": "https://raw.githubusercontent.com/IbaGPE/Asistente-B.L.S/main/Alexa-Logo.png",
                "primaryText": "Usted se encuentra en la vía pública, y encuentra a un paciente inconsciente, ningún testigo presencial ha realizado maniobras de R.C.P.",
                "textAlignment": "start",
                "titleText": "Simulación"
            }
        }
    }
}
                )   
            .speak(speakOutput)
            .reprompt(speakOutput2)
            .getResponse();
  case 2:
      escenario = 'Usted se encuentra caminando por el parque, cuando de pronto, es testigo de que una persona ha colapsado repentinamente.';
      caso=1;
      paciente=1;
      speakOutput = `Hola, soy tu asistente virtual.  Iniciaremos la práctica de B.L.S. Y el escenario es el siguiente: ${escenario} `;
      speakOutput2 = `Lo lamento, puedes decirlo de nuevo? Prueba a decir: "Es segura" o "No es segura". La escena es segura?`;
        return handlerInput.responseBuilder
            .addDirective({
            "type": "Alexa.Presentation.APLA.RenderDocument",
            "token": "launch_a",
            "document": {
    "type": "APLA",
    "version": "0.91",
    "mainTemplate": {
        "parameters": [
            "payload"
        ],
        "item": {
            "type": "Sequencer",
            "description": "This sample plays a series of audio clips one after another.",
            "items": [
                {
                     "type": "Silence",
                    "duration": 200
                },
                {
                    "type": "Speech",
                    "content": "<speak> La escena es segura? </speak>"
                }]}}}})
            .addDirective(
                                    {
                        "type": "Alexa.Presentation.APL.RenderDocument",
                        "token": "documentToken",
                        "document": {
                            "src": "doc://alexa/apl/documents/Escenario1",
                            "type": "Link"
                        },
                        "datasources": {
                            "simpleTextTemplateData": {
                                "type": "object",
                                "properties": {
                                    "backgroundImage": "https://d2o906d8ln7ui1.cloudfront.net/images/response_builder/background-green.png",
                                    "foregroundImageLocation": "left",
                                    "foregroundImageSource": "",
                                    "headerTitle": "Práctica B.L.S",
                                    "headerSubtitle": "",
                                    "hintText": "Prueba a decir: \"Es segura\", \"No es segura\", \"Que es una escena segura?\"",
                                    "headerAttributionImage": "https://raw.githubusercontent.com/IbaGPE/Asistente-B.L.S/main/Alexa-Logo.png",
                                    "primaryText": "Usted se encuentra caminando por el parque, cuando de pronto, es testigo de que una persona ha colapsado repentinamente.",
                                    "textAlignment": "start",
                                    "titleText": "Simulación"
                                }
                            }
                        }
                    }
                )   
            .speak(speakOutput)
            .reprompt(speakOutput2)
            .getResponse();
  case 3:
      escenario = 'Usted se encontraba en una calle poco transitada cuando de pronto presencia el colapso de una torre eléctrica, observa como una persona que se encontraba cerca del siniestro, se desploma repentinamente al tocar la torre el suelo.';
      caso=3;
      paciente=1;
      speakOutput = `Hola, soy tu asistente virtual.  Iniciaremos la práctica de B.L.S. Y el escenario es el siguiente: ${escenario} `;
      speakOutput2 = `Lo lamento, puedes decirlo de nuevo? Prueba a decir: "Es segura" o "No es segura". La escena es segura?`;
        return handlerInput.responseBuilder
            .addDirective({
            "type": "Alexa.Presentation.APLA.RenderDocument",
            "token": "launch_a",
            "document": {
    "type": "APLA",
    "version": "0.91",
    "mainTemplate": {
        "parameters": [
            "payload"
        ],
        "item": {
            "type": "Sequencer",
            "description": "This sample plays a series of audio clips one after another.",
            "items": [
                {
                     "type": "Silence",
                    "duration": 200
                },
                {
                    "type": "Speech",
                    "content": "<speak> La escena es segura? </speak>"
                }]}}}})
            .addDirective(
                                    {
                        "type": "Alexa.Presentation.APL.RenderDocument",
                        "token": "documentToken",
                        "document": {
                            "src": "doc://alexa/apl/documents/Escenario1",
                            "type": "Link"
                        },
                        "datasources": {
                            "simpleTextTemplateData": {
                                "type": "object",
                                "properties": {
                                    "backgroundImage": "https://d2o906d8ln7ui1.cloudfront.net/images/response_builder/background-green.png",
                                    "foregroundImageLocation": "left",
                                    "foregroundImageSource": "",
                                    "headerTitle": "Práctica B.L.S",
                                    "headerSubtitle": "",
                                    "hintText": "Prueba a decir: \"Es segura\", \"No es segura\", \"Que es una escena segura?\"",
                                    "headerAttributionImage": "https://raw.githubusercontent.com/IbaGPE/Asistente-B.L.S/main/Alexa-Logo.png",
                                    "primaryText": "Usted se encontraba en una calle poco transitada cuando de pronto presencia el colapso de una torre eléctrica, observa como una persona que se encontraba cerca del siniestro, se desploma repentinamente al tocar la torre el suelo.",
                                    "textAlignment": "start",
                                    "titleText": "Simulación"
                                }
                            }
                        }
                    }
                )   
            .speak(speakOutput)
            .reprompt(speakOutput2)
            .getResponse();
  case 4:
      escenario = 'Usted se encuentra en una guarderia, al caminar por un pasillo se percata de que en el suelo del pasillo se encuentra un lactante aparentemente inconciente.';
      caso=1;
      paciente=0;
      speakOutput = `Hola, soy tu asistente virtual.  Iniciaremos la práctica de B.L.S. Y el escenario es el siguiente: ${escenario} `;
      speakOutput2 = `Lo lamento, puedes decirlo de nuevo? Prueba a decir: "Es segura" o "No es segura". La escena es segura?`;
        return handlerInput.responseBuilder
            .addDirective({
            "type": "Alexa.Presentation.APLA.RenderDocument",
            "token": "launch_a",
            "document": {
    "type": "APLA",
    "version": "0.91",
    "mainTemplate": {
        "parameters": [
            "payload"
        ],
        "item": {
            "type": "Sequencer",
            "description": "This sample plays a series of audio clips one after another.",
            "items": [
                {
                     "type": "Silence",
                    "duration": 200
                },
                {
                    "type": "Speech",
                    "content": "<speak> La escena es segura? </speak>"
                }]}}}})
            .addDirective(
                                    {
                        "type": "Alexa.Presentation.APL.RenderDocument",
                        "token": "documentToken",
                        "document": {
                            "src": "doc://alexa/apl/documents/Escenario1",
                            "type": "Link"
                        },
                        "datasources": {
                            "simpleTextTemplateData": {
                                "type": "object",
                                "properties": {
                                    "backgroundImage": "https://d2o906d8ln7ui1.cloudfront.net/images/response_builder/background-green.png",
                                    "foregroundImageLocation": "left",
                                    "foregroundImageSource": "",
                                    "headerTitle": "Práctica B.L.S",
                                    "headerSubtitle": "",
                                    "hintText": "Prueba a decir: \"Es segura\", \"No es segura\", \"Que es una escena segura?\"",
                                    "headerAttributionImage": "https://raw.githubusercontent.com/IbaGPE/Asistente-B.L.S/main/Alexa-Logo.png",
                                    "primaryText": "Usted se encuentra en una guarderia, al caminar por un pasillo se percata de que en el suelo del pasillo se encuentra un lactante aparentemente inconciente.",
                                    "textAlignment": "start",
                                    "titleText": "Simulación"
                                }
                            }
                        }
                    }
                )   
            .speak(speakOutput)
            .reprompt(speakOutput2)
            .getResponse();
  case 5:
      escenario = 'Usted se encuentra en una sala medica rural, cuando se le da aviso de que uno de los lactantes ha colapsado.';
      caso=1;
      paciente=0;
      speakOutput = `Hola, soy tu asistente virtual.  Iniciaremos la práctica de B.L.S. Y el escenario es el siguiente: ${escenario} `;
      speakOutput2 = `Lo lamento, puedes decirlo de nuevo? Prueba a decir: "Es segura" o "No es segura". La escena es segura?`;
        return handlerInput.responseBuilder
            .addDirective({
            "type": "Alexa.Presentation.APLA.RenderDocument",
            "token": "launch_a",
            "document": {
    "type": "APLA",
    "version": "0.91",
    "mainTemplate": {
        "parameters": [
            "payload"
        ],
        "item": {
            "type": "Sequencer",
            "description": "This sample plays a series of audio clips one after another.",
            "items": [
                {
                     "type": "Silence",
                    "duration": 200
                },
                {
                    "type": "Speech",
                    "content": "<speak> La escena es segura? </speak>"
                }]}}}})
            .addDirective(
                                    {
                        "type": "Alexa.Presentation.APL.RenderDocument",
                        "token": "documentToken",
                        "document": {
                            "src": "doc://alexa/apl/documents/Escenario1",
                            "type": "Link"
                        },
                        "datasources": {
                            "simpleTextTemplateData": {
                                "type": "object",
                                "properties": {
                                    "backgroundImage": "https://d2o906d8ln7ui1.cloudfront.net/images/response_builder/background-green.png",
                                    "foregroundImageLocation": "left",
                                    "foregroundImageSource": "",
                                    "headerTitle": "Práctica B.L.S",
                                    "headerSubtitle": "",
                                    "hintText": "Prueba a decir: \"Es segura\", \"No es segura\", \"Que es una escena segura?\"",
                                    "headerAttributionImage": "https://raw.githubusercontent.com/IbaGPE/Asistente-B.L.S/main/Alexa-Logo.png",
                                    "primaryText": "Usted se encuentra en una sala medica rural, cuando se le da aviso de que uno de los lactantes ha colapsado.",
                                    "textAlignment": "start",
                                    "titleText": "Simulación"
                                }
                            }
                        }
                    }
                )   
            .speak(speakOutput)
            .reprompt(speakOutput2)
            .getResponse();
  case 6:
      escenario = 'Usted se encuentra caminando por la vía pública y encuentra un paciente inconciente recibiendo maniobras de R.C.P. Por un reanimador.';
      caso=2;
      paciente=1;
      speakOutput = `Hola, soy tu asistente virtual.  Iniciaremos la práctica de B.L.S. Y el escenario es el siguiente: ${escenario} `;
      speakOutput2 = `Lo lamento, puedes decirlo de nuevo? Prueba a decir: "Es segura" o "No es segura". La escena es segura?`;
        return handlerInput.responseBuilder
            .addDirective({
            "type": "Alexa.Presentation.APLA.RenderDocument",
            "token": "launch_a",
            "document": {
    "type": "APLA",
    "version": "0.91",
    "mainTemplate": {
        "parameters": [
            "payload"
        ],
        "item": {
            "type": "Sequencer",
            "description": "This sample plays a series of audio clips one after another.",
            "items": [
                {
                     "type": "Silence",
                    "duration": 200
                },
                {
                    "type": "Speech",
                    "content": "<speak> La escena es segura? </speak>"
                }]}}}})
            .addDirective(
                                    {
                        "type": "Alexa.Presentation.APL.RenderDocument",
                        "token": "documentToken",
                        "document": {
                            "src": "doc://alexa/apl/documents/Escenario1",
                            "type": "Link"
                        },
                        "datasources": {
                            "simpleTextTemplateData": {
                                "type": "object",
                                "properties": {
                                    "backgroundImage": "https://d2o906d8ln7ui1.cloudfront.net/images/response_builder/background-green.png",
                                    "foregroundImageLocation": "left",
                                    "foregroundImageSource": "",
                                    "headerTitle": "Práctica B.L.S",
                                    "headerSubtitle": "",
                                    "hintText": "Prueba a decir: \"Es segura\", \"No es segura\", \"Que es una escena segura?\"",
                                    "headerAttributionImage": "https://raw.githubusercontent.com/IbaGPE/Asistente-B.L.S/main/Alexa-Logo.png",
                                    "primaryText": "Usted se encuentra caminando por la vía pública y encuentra un paciente inconciente recibiendo maniobras de R.C.P. Por un reanimador.",
                                    "textAlignment": "start",
                                    "titleText": "Simulación"
                                }
                            }
                        }
                    }
                )   
            .speak(speakOutput)
            .reprompt(speakOutput2)
            .getResponse();
  default:
      caso=1;
      paciente=1;
      escenario = 'Usted se encuentra en una plaza comercial, usted observa que hay una persona aparentemente inconciente y decide acercarse al lugar.';
      speakOutput = `Hola, soy tu asistente virtual.  Iniciaremos la práctica de B.L.S. Y el escenario es el siguiente: ${escenario} `;
      speakOutput2 = `Lo lamento, puedes decirlo de nuevo? Prueba a decir: "Es segura" o "No es segura". La escena es segura?`;
        return handlerInput.responseBuilder
            .addDirective({
            "type": "Alexa.Presentation.APLA.RenderDocument",
            "token": "launch_a",
            "document": {
    "type": "APLA",
    "version": "0.91",
    "mainTemplate": {
        "parameters": [
            "payload"
        ],
        "item": {
            "type": "Sequencer",
            "description": "This sample plays a series of audio clips one after another.",
            "items": [
                {
                     "type": "Silence",
                    "duration": 200
                },
                {
                    "type": "Speech",
                    "content": "<speak> La escena es segura? </speak>"
                }]}}}})
            .addDirective(
                                    {
                        "type": "Alexa.Presentation.APL.RenderDocument",
                        "token": "documentToken",
                        "document": {
                            "src": "doc://alexa/apl/documents/Escenario1",
                            "type": "Link"
                        },
                        "datasources": {
                            "simpleTextTemplateData": {
                                "type": "object",
                                "properties": {
                                    "backgroundImage": "https://d2o906d8ln7ui1.cloudfront.net/images/response_builder/background-green.png",
                                    "foregroundImageLocation": "left",
                                    "foregroundImageSource": "",
                                    "headerTitle": "Práctica B.L.S",
                                    "headerSubtitle": "",
                                    "hintText": "Prueba a decir: \"Es segura\", \"No es segura\", \"Que es una escena segura?\"",
                                    "headerAttributionImage": "https://raw.githubusercontent.com/IbaGPE/Asistente-B.L.S/main/Alexa-Logo.png",
                                    "primaryText": "Usted se encuentra en una plaza comercial, usted observa que hay una persona aparentemente inconciente y decide acercarse al lugar.",
                                    "textAlignment": "start",
                                    "titleText": "Simulación"
                                }
                            }
                        }
                    }
                )   
            .speak(speakOutput)
            .reprompt(speakOutput2)
            .getResponse();
}
    }
};


const EscenaNoSeguraHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'EscenaNoSegura';
    },
    handle(handlerInput) {
        
        var speakOutput;
        
        if(estado===0)
        {
            estado=1;
        }
        if(caso===3)
        {
            speakOutput = 'Entonces llama al servicio de emergencias y mantente a salvo lejos de la escena.';
             return handlerInput.responseBuilder
            .speak(speakOutput)
            .addDirective(
                                    {
                        "type": "Alexa.Presentation.APL.RenderDocument",
                        "token": "documentToken",
                        "document": {
                            "src": "doc://alexa/apl/documents/Escenario1",
                            "type": "Link"
                        },
                        "datasources": {
                            "simpleTextTemplateData": {
                                "type": "object",
                                "properties": {
                                    "backgroundImage": "https://d2o906d8ln7ui1.cloudfront.net/images/response_builder/background-green.png",
                                    "foregroundImageLocation": "left",
                                    "foregroundImageSource": "",
                                    "headerTitle": "Práctica B.L.S",
                                    "headerSubtitle": "",
                                    "hintText": "Prueba a decir: \"Entendido\", \"Eso es todo\"",
                                    "headerAttributionImage": "https://raw.githubusercontent.com/IbaGPE/Asistente-B.L.S/main/Alexa-Logo.png",
                                    "primaryText": "Llama al servicio de emergencias y mantente a salvo lejos de la escena.",
                                    "textAlignment": "start",
                                    "titleText": "Simulación"
                                }
                            }
                        }
                    }
                ) 
            .reprompt(speakOutput)
            .getResponse();
        }
        else
        {
            speakOutput = 'La escena sí es segura!! una escena no segura es aquella que compromete la integridad física del respondiente. Entonces tienes que decir: La escena es segura.';
             return handlerInput.responseBuilder
            .speak(speakOutput)
            .addDirective(
                                    {
                        "type": "Alexa.Presentation.APL.RenderDocument",
                        "token": "documentToken",
                        "document": {
                            "src": "doc://alexa/apl/documents/Escenario1",
                            "type": "Link"
                        },
                        "datasources": {
                            "simpleTextTemplateData": {
                                "type": "object",
                                "properties": {
                                    "backgroundImage": "https://d2o906d8ln7ui1.cloudfront.net/images/response_builder/background-green.png",
                                    "foregroundImageLocation": "left",
                                    "foregroundImageSource": "",
                                    "headerTitle": "Práctica B.L.S",
                                    "headerSubtitle": "",
                                    "hintText": "Prueba a decir: \"La escena es segura\", \"Es segura\"",
                                    "headerAttributionImage": "https://raw.githubusercontent.com/IbaGPE/Asistente-B.L.S/main/Alexa-Logo.png",
                                    "primaryText": "La escena sí es segura!! una escena no segura es aquella que compromete la integridad física del respondiente.",
                                    "textAlignment": "start",
                                    "titleText": "Simulación"
                                }
                            }
                        }
                    }
                )
            .reprompt(speakOutput)
            .getResponse();
        }
    }
};

const EscenaSeguraHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'EscenaSegura';
    },
    handle(handlerInput) {
        
        var speakOutput;
        const speakOutput2 = `Lo lamento, puedes decirlo de nuevo? Prueba a decir: "Sí responde" o "No responde". La víctima responde?`;
        
        if(estado>=2)
        {
            speakOutput = 'Así es, prosigue con tu procedimiento.';
             return handlerInput.responseBuilder
            .addDirective(
                                    {
                        "type": "Alexa.Presentation.APL.RenderDocument",
                        "token": "documentToken",
                        "document": {
                            "src": "doc://alexa/apl/documents/Escenario1",
                            "type": "Link"
                        },
                        "datasources": {
                            "simpleTextTemplateData": {
                                "type": "object",
                                "properties": {
                                    "backgroundImage": "https://d2o906d8ln7ui1.cloudfront.net/images/response_builder/background-green.png",
                                    "foregroundImageLocation": "left",
                                    "foregroundImageSource": "",
                                    "headerTitle": "Práctica B.L.S",
                                    "headerSubtitle": "",
                                    "hintText": "Prueba a decir: \"No tiene pulso\", \"No respira\", \"Entendido\"",
                                    "headerAttributionImage": "https://raw.githubusercontent.com/IbaGPE/Asistente-B.L.S/main/Alexa-Logo.png",
                                    "primaryText": "Prosigue con tu procedimiento.",
                                    "textAlignment": "start",
                                    "titleText": "Simulación"
                                }
                            }
                        }
                    }
                )
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
        }
        estado=0;
        
        if(caso===3)
        {
             speakOutput = 'La escena no es segura!!! Una escena segura es aquella que no comprometa tu integridad física. Debes mantenerte a salvo fuera de la escena, no queremos que ahora haya dos víctimas que atender. Solo llama al servicio de emergencia para que ellos se hagan cargo de la situación. Entendido?'
                return handlerInput.responseBuilder
            .addDirective(
                                    {
                        "type": "Alexa.Presentation.APL.RenderDocument",
                        "token": "documentToken",
                        "document": {
                            "src": "doc://alexa/apl/documents/Escenario1",
                            "type": "Link"
                        },
                        "datasources": {
                            "simpleTextTemplateData": {
                                "type": "object",
                                "properties": {
                                    "backgroundImage": "https://d2o906d8ln7ui1.cloudfront.net/images/response_builder/background-green.png",
                                    "foregroundImageLocation": "left",
                                    "foregroundImageSource": "",
                                    "headerTitle": "Práctica B.L.S",
                                    "headerSubtitle": "",
                                    "hintText": "Prueba a decir: \"Entendido\", \"Esta bien\", \"De acuerdo\"",
                                    "headerAttributionImage": "https://raw.githubusercontent.com/IbaGPE/Asistente-B.L.S/main/Alexa-Logo.png",
                                    "primaryText": "La escena no es segura. Una escena segura es aquella que no compromete la integridad física del respondiente. Llama al servicio de emergencia para que ellos se hagan cargo de la situación.",
                                    "textAlignment": "start",
                                    "titleText": "Simulación"
                                }
                            }
                        }
                    }
                )
            .speak(speakOutput)
            .reprompt(speakOutput2)
            .getResponse();
        }
        else
        {
            if (paciente===0)
            {
             speakOutput = 'De acuerdo, compruebe si la víctima responde hablándole y dándole palmaditas en la planta del pie. El lactante responde?';
                    return handlerInput.responseBuilder
            .addDirective(
                                    {
                        "type": "Alexa.Presentation.APL.RenderDocument",
                        "token": "documentToken",
                        "document": {
                            "src": "doc://alexa/apl/documents/Escenario1",
                            "type": "Link"
                        },
                        "datasources": {
                            "simpleTextTemplateData": {
                                "type": "object",
                                "properties": {
                                    "backgroundImage": "https://d2o906d8ln7ui1.cloudfront.net/images/response_builder/background-green.png",
                                    "foregroundImageLocation": "left",
                                    "foregroundImageSource": "",
                                    "headerTitle": "Práctica B.L.S",
                                    "headerSubtitle": "",
                                    "hintText": "Prueba a decir: \"Responde\", \"No responde\"",
                                    "headerAttributionImage": "https://raw.githubusercontent.com/IbaGPE/Asistente-B.L.S/main/Alexa-Logo.png",
                                    "primaryText": "Compruebe si la víctima responde hablándole y dándole palmaditas en la planta del pie.",
                                    "textAlignment": "start",
                                    "titleText": "Simulación"
                                }
                            }
                        }
                    }
                )
            .speak(speakOutput)
            .reprompt(speakOutput2)
            .getResponse();
            }
            else
            {
                if(caso===2)
                {
                     speakOutput = 'De acuerdo, asista al reanimador en las compresiones para que el descanse en vía aérea. Si aún no han solicitado un D.E.A. Solicita uno, o pide a alguien que lo solicite. Continúa a razón de 100 a 120 compresiones por minuto. Entendido?';
                     estado=6;
                       return handlerInput.responseBuilder
                    .addDirective(
                                    {
                        "type": "Alexa.Presentation.APL.RenderDocument",
                        "token": "documentToken",
                        "document": {
                            "src": "doc://alexa/apl/documents/Escenario1",
                            "type": "Link"
                        },
                        "datasources": {
                            "simpleTextTemplateData": {
                                "type": "object",
                                "properties": {
                                    "backgroundImage": "https://d2o906d8ln7ui1.cloudfront.net/images/response_builder/background-green.png",
                                    "foregroundImageLocation": "left",
                                    "foregroundImageSource": "",
                                    "headerTitle": "Práctica B.L.S",
                                    "headerSubtitle": "",
                                    "hintText": "Prueba a decir: \"Entendido\", \"Que es una compresión\", \"Tenemos el D.E.A\"",
                                    "headerAttributionImage": "https://raw.githubusercontent.com/IbaGPE/Asistente-B.L.S/main/Alexa-Logo.png",
                                    "primaryText": "Asista al reanimador en las compresiones para que el descanse en vía aérea.",
                                    "textAlignment": "start",
                                    "titleText": "Simulación"
                                }
                            }
                        }
                    }
                )
                    .speak(speakOutput)
                    .reprompt(speakOutput2)
                    .getResponse();
                }
                else
                {
                    speakOutput = 'De acuerdo, compruebe si la víctima responde preguntándole si se encuentra bien y dándole palmadas en los hombros o sacudiéndola. La víctima responde?';
                        return handlerInput.responseBuilder
                    .addDirective(
                                    {
                        "type": "Alexa.Presentation.APL.RenderDocument",
                        "token": "documentToken",
                        "document": {
                            "src": "doc://alexa/apl/documents/Escenario1",
                            "type": "Link"
                        },
                        "datasources": {
                            "simpleTextTemplateData": {
                                "type": "object",
                                "properties": {
                                    "backgroundImage": "https://d2o906d8ln7ui1.cloudfront.net/images/response_builder/background-green.png",
                                    "foregroundImageLocation": "left",
                                    "foregroundImageSource": "",
                                    "headerTitle": "Práctica B.L.S",
                                    "headerSubtitle": "",
                                    "hintText": "Prueba a decir: \"Sí responde\", \"No responde\"",
                                    "headerAttributionImage": "https://raw.githubusercontent.com/IbaGPE/Asistente-B.L.S/main/Alexa-Logo.png",
                                    "primaryText": "Compruebe si la víctima responde preguntándole si se encuentra bien y dándole palmadas en los hombros o sacudiéndola.",
                                    "textAlignment": "start",
                                    "titleText": "Simulación"
                                }
                            }
                        }
                    }
                )
                    .speak(speakOutput)
                    .reprompt(speakOutput2)
                    .getResponse();
                }
            }
        }
    }
};

const RespondeHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'Responde';
    },
    handle(handlerInput) {
        var speakOutput;
        var speakOutput2;
        estado=3;
        
        if(caso===3)
        {
           speakOutput = 'La escena no es segura, solo llama a emergencias y mantente lejos de la escena!!! Entendido?'; 
           speakOutput2= 'Lo lamento, puedes decirlo de nuevo? Prueba a decir: "Entendido" o "La práctica ha terminado". La víctima responde?';
               return handlerInput.responseBuilder
             .addDirective(
                                    {
                        "type": "Alexa.Presentation.APL.RenderDocument",
                        "token": "documentToken",
                        "document": {
                            "src": "doc://alexa/apl/documents/Escenario1",
                            "type": "Link"
                        },
                        "datasources": {
                            "simpleTextTemplateData": {
                                "type": "object",
                                "properties": {
                                    "backgroundImage": "https://d2o906d8ln7ui1.cloudfront.net/images/response_builder/background-green.png",
                                    "foregroundImageLocation": "left",
                                    "foregroundImageSource": "",
                                    "headerTitle": "Práctica B.L.S",
                                    "headerSubtitle": "",
                                    "hintText": "Prueba a decir: \"Entendido\", \"Eso es todo\"",
                                    "headerAttributionImage": "https://raw.githubusercontent.com/IbaGPE/Asistente-B.L.S/main/Alexa-Logo.png",
                                    "primaryText": "La escena no es segura. Llama a emergencias y mantente lejos de la escena.",
                                    "textAlignment": "start",
                                    "titleText": "Simulación"
                                }
                            }
                        }
                    }
                )
            .speak(speakOutput)
            .reprompt(speakOutput2)
            .getResponse();
        }
        
        if(paciente===0)
        {
           speakOutput = 'De acuerdo, asegúrese que la integridad del lactante este a salvo y localice al padre o tutor del menor, en caso de no localizarlos comuniquese con el servicio de emergencias.';
           speakOutput2= 'Lo lamento, puedes decirlo de nuevo? Prueba a decir: "Entendido" o "Ya no responde". La víctima responde?';   
                return handlerInput.responseBuilder
            .addDirective(
                                    {
                        "type": "Alexa.Presentation.APL.RenderDocument",
                        "token": "documentToken",
                        "document": {
                            "src": "doc://alexa/apl/documents/Escenario1",
                            "type": "Link"
                        },
                        "datasources": {
                            "simpleTextTemplateData": {
                                "type": "object",
                                "properties": {
                                    "backgroundImage": "https://d2o906d8ln7ui1.cloudfront.net/images/response_builder/background-green.png",
                                    "foregroundImageLocation": "left",
                                    "foregroundImageSource": "",
                                    "headerTitle": "Práctica B.L.S",
                                    "headerSubtitle": "",
                                    "hintText": "Prueba a decir: \"Entendido\", \"Ya no responde\"",
                                    "headerAttributionImage": "https://raw.githubusercontent.com/IbaGPE/Asistente-B.L.S/main/Alexa-Logo.png",
                                    "primaryText": "Asegúrese que la integridad del lactante este a salvo y localice al padre o tutor del menor, en caso de no localizarlos comuniquese con el servicio de emergencias.",
                                    "textAlignment": "start",
                                    "titleText": "Simulación"
                                }
                            }
                        }
                    }
                )
            .speak(speakOutput)
            .reprompt(speakOutput2)
            .getResponse();
        }
        else
        {
           speakOutput = 'De acuerdo, asegúrese que la integridad del paciente este a salvo.'; 
           speakOutput2= 'Lo lamento, puedes decirlo de nuevo? Prueba a decir: "Entendido" o "Ya no responde". La víctima responde?';
                return handlerInput.responseBuilder
            .addDirective(
                                    {
                        "type": "Alexa.Presentation.APL.RenderDocument",
                        "token": "documentToken",
                        "document": {
                            "src": "doc://alexa/apl/documents/Escenario1",
                            "type": "Link"
                        },
                        "datasources": {
                            "simpleTextTemplateData": {
                                "type": "object",
                                "properties": {
                                    "backgroundImage": "https://d2o906d8ln7ui1.cloudfront.net/images/response_builder/background-green.png",
                                    "foregroundImageLocation": "left",
                                    "foregroundImageSource": "",
                                    "headerTitle": "Práctica B.L.S",
                                    "headerSubtitle": "",
                                    "hintText": "Prueba a decir: \"Entendido\", \"Ya no responde\"",
                                    "headerAttributionImage": "https://raw.githubusercontent.com/IbaGPE/Asistente-B.L.S/main/Alexa-Logo.png",
                                    "primaryText": "Asegúrese que la integridad del paciente este a salvo.",
                                    "textAlignment": "start",
                                    "titleText": "Simulación"
                                }
                            }
                        }
                    }
                )
            .speak(speakOutput)
            .reprompt(speakOutput2)
            .getResponse();
        }
    }
};



const NoRespondeHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'NoResponde';
    },
    handle(handlerInput) {
        var speakOutput;
        const speakOutput2 = `Lo lamento, puedes decirlo de nuevo? Prueba a decir: "Sí tiene pulso" o "No tiene pulso". La víctima tiene pulso?`;
        estado=4;
        
        if(caso===3)
        {
           speakOutput = 'La escena no es segura, solo llama a emergencias y mantente lejos de la escena!!! Entendido?'; 
                return handlerInput.responseBuilder
            .addDirective(
                                    {
                        "type": "Alexa.Presentation.APL.RenderDocument",
                        "token": "documentToken",
                        "document": {
                            "src": "doc://alexa/apl/documents/Escenario1",
                            "type": "Link"
                        },
                        "datasources": {
                            "simpleTextTemplateData": {
                                "type": "object",
                                "properties": {
                                    "backgroundImage": "https://d2o906d8ln7ui1.cloudfront.net/images/response_builder/background-green.png",
                                    "foregroundImageLocation": "left",
                                    "foregroundImageSource": "",
                                    "headerTitle": "Práctica B.L.S",
                                    "headerSubtitle": "",
                                    "hintText": "Prueba a decir: \"Entendido\", \"Eso es todo\"",
                                    "headerAttributionImage": "https://raw.githubusercontent.com/IbaGPE/Asistente-B.L.S/main/Alexa-Logo.png",
                                    "primaryText": "La escena no es segura. Llama a emergencias y mantente lejos de la escena.",
                                    "textAlignment": "start",
                                    "titleText": "Simulación"
                                }
                            }
                        }
                    }
                )
            .speak(speakOutput)
            .reprompt(speakOutput2)
            .getResponse();
        }
        
        if(paciente===1)
        {
            speakOutput = 'Entonces, pide ayuda en voz muy alta a las personas que se encuentran cerca. Activa el sistema de respuesta a emergencias a través de un dispositivo móvil. Ahora, comprueba si la víctima no respira o solo jadea, al mismo tiempo compruebe si tiene pulso carotídeo. La víctima tiene pulso?';
                return handlerInput.responseBuilder
            .addDirective(
                                    {
                        "type": "Alexa.Presentation.APL.RenderDocument",
                        "token": "documentToken",
                        "document": {
                            "src": "doc://alexa/apl/documents/Escenario1",
                            "type": "Link"
                        },
                        "datasources": {
                            "simpleTextTemplateData": {
                                "type": "object",
                                "properties": {
                                    "backgroundImage": "https://d2o906d8ln7ui1.cloudfront.net/images/response_builder/background-green.png",
                                    "foregroundImageLocation": "left",
                                    "foregroundImageSource": "",
                                    "headerTitle": "Práctica B.L.S",
                                    "headerSubtitle": "",
                                    "hintText": "Prueba a decir: \"Sí tiene pulso\", \"No tiene pulso\", \"Tenemos el D.E.A\"",
                                    "headerAttributionImage": "https://raw.githubusercontent.com/IbaGPE/Asistente-B.L.S/main/Alexa-Logo.png",
                                    "primaryText": "Pide ayuda en voz muy alta a las personas que se encuentran cerca. Activa el sistema de respuesta a emergencias a través de un dispositivo móvil. Compruebe si la víctima no respira o solo jadea, al mismo tiempo compruebe si tiene pulso carotídeo.",
                                    "textAlignment": "start",
                                    "titleText": "Simulación"
                                }
                            }
                        }
                    }
                )
            .speak(speakOutput)
            .reprompt(speakOutput2)
            .getResponse();
        }
        else
        {
            speakOutput = 'Entonces, pide ayuda en voz muy alta a las personas que se encuentran cerca. Activa el sistema de respuesta a emergencias a través de un dispositivo móvil. Ahora, Comprueba si la víctima no respira o solo jadea, al mismo tiempo compruebe si tiene pulso braquial. La víctima tiene pulso?';
                return handlerInput.responseBuilder
            .addDirective(
                                    {
                        "type": "Alexa.Presentation.APL.RenderDocument",
                        "token": "documentToken",
                        "document": {
                            "src": "doc://alexa/apl/documents/Escenario1",
                            "type": "Link"
                        },
                        "datasources": {
                            "simpleTextTemplateData": {
                                "type": "object",
                                "properties": {
                                    "backgroundImage": "https://d2o906d8ln7ui1.cloudfront.net/images/response_builder/background-green.png",
                                    "foregroundImageLocation": "left",
                                    "foregroundImageSource": "",
                                    "headerTitle": "Práctica B.L.S",
                                    "headerSubtitle": "",
                                    "hintText": "Prueba a decir: \"Sí tiene pulso\", \"No tiene pulso\", \"Tenemos el D.E.A\"",
                                    "headerAttributionImage": "https://raw.githubusercontent.com/IbaGPE/Asistente-B.L.S/main/Alexa-Logo.png",
                                    "primaryText": "Pide ayuda en voz muy alta a las personas que se encuentran cerca. Activa el sistema de respuesta a emergencias a través de un dispositivo móvil. Comprueba si la víctima no respira o solo jadea, al mismo tiempo compruebe si tiene pulso braquial.",
                                    "textAlignment": "start",
                                    "titleText": "Simulación"
                                }
                            }
                        }
                    }
                )
            .speak(speakOutput)
            .reprompt(speakOutput2)
            .getResponse();
        }
    }
};

const SiPulsoHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'SiPulso';
    },
    handle(handlerInput) {
        var speakOutput;
        const speakOutput2 = `Lo lamento, puedes decirlo de nuevo? Prueba a decir: "Sí respira" o "No respira". La víctima tiene respiración normal?`;
        estado=5;
        
         if(caso===3)
        {
           speakOutput = 'La escena no es segura, ¿Como has tomado el pulso? Solo llama a emergencias y mantente a salvo!!! Entendido?'; 
                    return handlerInput.responseBuilder
            .addDirective(
                                    {
                        "type": "Alexa.Presentation.APL.RenderDocument",
                        "token": "documentToken",
                        "document": {
                            "src": "doc://alexa/apl/documents/Escenario1",
                            "type": "Link"
                        },
                        "datasources": {
                            "simpleTextTemplateData": {
                                "type": "object",
                                "properties": {
                                    "backgroundImage": "https://d2o906d8ln7ui1.cloudfront.net/images/response_builder/background-green.png",
                                    "foregroundImageLocation": "left",
                                    "foregroundImageSource": "",
                                    "headerTitle": "Práctica B.L.S",
                                    "headerSubtitle": "",
                                    "hintText": "Prueba a decir: \"Entendido\", \"Eso es todo\"",
                                    "headerAttributionImage": "https://raw.githubusercontent.com/IbaGPE/Asistente-B.L.S/main/Alexa-Logo.png",
                                    "primaryText": "La escena no es segura. Llama a emergencias y mantente a salvo.",
                                    "textAlignment": "start",
                                    "titleText": "Simulación"
                                }
                            }
                        }
                    }
                )
            .speak(speakOutput)
            .reprompt(speakOutput2)
            .getResponse();
        }
        
        if (paciente===1)
        {
            speakOutput = 'Okey, el paciente tiene respiración normal?';
                    return handlerInput.responseBuilder
            .addDirective(
                                    {
                        "type": "Alexa.Presentation.APL.RenderDocument",
                        "token": "documentToken",
                        "document": {
                            "src": "doc://alexa/apl/documents/Escenario1",
                            "type": "Link"
                        },
                        "datasources": {
                            "simpleTextTemplateData": {
                                "type": "object",
                                "properties": {
                                    "backgroundImage": "https://d2o906d8ln7ui1.cloudfront.net/images/response_builder/background-green.png",
                                    "foregroundImageLocation": "left",
                                    "foregroundImageSource": "",
                                    "headerTitle": "Práctica B.L.S",
                                    "headerSubtitle": "",
                                    "hintText": "Prueba a decir: \"Sí respira\", \"No respira\", \"Tenemos el D.E.A\"",
                                    "headerAttributionImage": "https://raw.githubusercontent.com/IbaGPE/Asistente-B.L.S/main/Alexa-Logo.png",
                                    "primaryText": "Compruebe si la víctima no respira o solo jadea.",
                                    "textAlignment": "start",
                                    "titleText": "Simulación"
                                }
                            }
                        }
                    }
                )
            .speak(speakOutput)
            .reprompt(speakOutput2)
            .getResponse();
        }
        else
        {
            speakOutput = 'Okay, el lactante tiene respiración normal?';
                    return handlerInput.responseBuilder
            .addDirective(
                                    {
                        "type": "Alexa.Presentation.APL.RenderDocument",
                        "token": "documentToken",
                        "document": {
                            "src": "doc://alexa/apl/documents/Escenario1",
                            "type": "Link"
                        },
                        "datasources": {
                            "simpleTextTemplateData": {
                                "type": "object",
                                "properties": {
                                    "backgroundImage": "https://d2o906d8ln7ui1.cloudfront.net/images/response_builder/background-green.png",
                                    "foregroundImageLocation": "left",
                                    "foregroundImageSource": "",
                                    "headerTitle": "Práctica B.L.S",
                                    "headerSubtitle": "",
                                    "hintText": "Prueba a decir: \"Sí respira\", \"No respira\", \"Tenemos el D.E.A\"",
                                    "headerAttributionImage": "https://raw.githubusercontent.com/IbaGPE/Asistente-B.L.S/main/Alexa-Logo.png",
                                    "primaryText": "Compruebe si la víctima no respira o solo jadea.",
                                    "textAlignment": "start",
                                    "titleText": "Simulación"
                                }
                            }
                        }
                    }
                )
            .speak(speakOutput)
            .reprompt(speakOutput2)
            .getResponse();
        }
    }
};

const NoPulsoHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'NoPulso';
    },
    handle(handlerInput) {
        var speakOutput;
        var speakOutput2;
        
        if (dea===1)
        {
            speakOutput = 'Entendido. Comprueba el ritmo cardíaco del paciente con el D.E.A. El ritmo es desfibrilable? ';
            speakOutput2 = `Lo lamento, puedes decirlo de nuevo? Prueba a decir: "Sí lo es" o "No lo es". El ritmo es desfibrilable?`;
            
             return handlerInput.responseBuilder
            .addDirective(
                                    {
                        "type": "Alexa.Presentation.APL.RenderDocument",
                        "token": "documentToken",
                        "document": {
                            "src": "doc://alexa/apl/documents/Escenario1",
                            "type": "Link"
                        },
                        "datasources": {
                            "simpleTextTemplateData": {
                                "type": "object",
                                "properties": {
                                    "backgroundImage": "https://d2o906d8ln7ui1.cloudfront.net/images/response_builder/background-green.png",
                                    "foregroundImageLocation": "left",
                                    "foregroundImageSource": "",
                                    "headerTitle": "Práctica B.L.S",
                                    "headerSubtitle": "",
                                    "hintText": "Prueba a decir: \"Sí lo es\", \"No lo es\", \"Que es el D.E.A\"",
                                    "headerAttributionImage": "https://raw.githubusercontent.com/IbaGPE/Asistente-B.L.S/main/Alexa-Logo.png",
                                    "primaryText": "Compruebe el ritmo cardíaco del paciente con el D.E.A.",
                                    "textAlignment": "start",
                                    "titleText": "Simulación"
                                }
                            }
                        }
                    }
                )
            .speak(speakOutput)
            .reprompt(speakOutput2)
            .getResponse();
        }
        
         if(caso===3)
        {
           speakOutput = 'La escena no es segura, ¿Como has tomado el pulso? Solo llama a emergencias y mantente a salvo!!! Entendido?'; 
                return handlerInput.responseBuilder
            .addDirective(
                                    {
                        "type": "Alexa.Presentation.APL.RenderDocument",
                        "token": "documentToken",
                        "document": {
                            "src": "doc://alexa/apl/documents/Escenario1",
                            "type": "Link"
                        },
                        "datasources": {
                            "simpleTextTemplateData": {
                                "type": "object",
                                "properties": {
                                    "backgroundImage": "https://d2o906d8ln7ui1.cloudfront.net/images/response_builder/background-green.png",
                                    "foregroundImageLocation": "left",
                                    "foregroundImageSource": "",
                                    "headerTitle": "Práctica B.L.S",
                                    "headerSubtitle": "",
                                    "hintText": "Prueba a decir: \"Entendido\", \"Eso es todo\"",
                                    "headerAttributionImage": "https://raw.githubusercontent.com/IbaGPE/Asistente-B.L.S/main/Alexa-Logo.png",
                                    "primaryText": "La escena no es segura. Llama a emergencias y mantente a salvo.",
                                    "textAlignment": "start",
                                    "titleText": "Simulación"
                                }
                            }
                        }
                    }
                )
            .speak(speakOutput)
            .reprompt(speakOutput2)
            .getResponse();
        }
        
        estado=6;
        speakOutput2 = 'Lo lamento no te he entendido, puedes decirlo de nuevo? Prueba a decir: "Entendido" o "Llego el D.E.A" o "Ya tiene pulso" o "El paciente despertó".';
        if (paciente===1)
        {
            speakOutput = 'Okey, pide en voz alta a alguien que solicite un D.E.A. Y que te informe cuando ya lo haya solicitado, inmediatamente inicie la maniobra de R.C.P. Dando 2 ventilaciones por cada 30 compresiones. Entendido?';
                return handlerInput.responseBuilder
            .addDirective(
                                    {
                        "type": "Alexa.Presentation.APL.RenderDocument",
                        "token": "documentToken",
                        "document": {
                            "src": "doc://alexa/apl/documents/Escenario1",
                            "type": "Link"
                        },
                        "datasources": {
                            "simpleTextTemplateData": {
                                "type": "object",
                                "properties": {
                                    "backgroundImage": "https://d2o906d8ln7ui1.cloudfront.net/images/response_builder/background-green.png",
                                    "foregroundImageLocation": "left",
                                    "foregroundImageSource": "",
                                    "headerTitle": "Práctica B.L.S",
                                    "headerSubtitle": "",
                                    "hintText": "Prueba a decir: \"Entendido\", \"Que es R.C.P?\", \"Que es D.E.A?\"",
                                    "headerAttributionImage": "https://raw.githubusercontent.com/IbaGPE/Asistente-B.L.S/main/Alexa-Logo.png",
                                    "primaryText": "Pida en voz alta a alguien que solicite un D.E.A. Y que le informe cuando ya lo haya solicitado. Inicie la maniobra de R.C.P.",
                                    "textAlignment": "start",
                                    "titleText": "Simulación"
                                }
                            }
                        }
                    }
                )
            .speak(speakOutput)
            .reprompt(speakOutput2)
            .getResponse();
        }
        else
        {
            speakOutput = 'Okay, pide en voz alta a alguien que solicite un D.E.A. Y que te informe cuando ya lo haya solicitado, inmediatamente inicie la maniobra de R.C.P. Dando 2 ventilaciones por cada 30 compresiones, si acude un segundo reanimador da 2 ventilaciones por cada 15 compresiones. Entendido?';
                return handlerInput.responseBuilder
            .addDirective(
                                    {
                        "type": "Alexa.Presentation.APL.RenderDocument",
                        "token": "documentToken",
                        "document": {
                            "src": "doc://alexa/apl/documents/Escenario1",
                            "type": "Link"
                        },
                        "datasources": {
                            "simpleTextTemplateData": {
                                "type": "object",
                                "properties": {
                                    "backgroundImage": "https://d2o906d8ln7ui1.cloudfront.net/images/response_builder/background-green.png",
                                    "foregroundImageLocation": "left",
                                    "foregroundImageSource": "",
                                    "headerTitle": "Práctica B.L.S",
                                    "headerSubtitle": "",
                                    "hintText": "Prueba a decir: \"Entendido\", \"Que es R.C.P?\", \"Que es D.E.A?\"",
                                    "headerAttributionImage": "https://raw.githubusercontent.com/IbaGPE/Asistente-B.L.S/main/Alexa-Logo.png",
                                    "primaryText": "Pida en voz alta a alguien que solicite un D.E.A. Y que le informe cuando ya lo haya solicitado. Inicie la maniobra de R.C.P.",
                                    "textAlignment": "start",
                                    "titleText": "Simulación"
                                }
                            }
                        }
                    }
                )
            .speak(speakOutput)
            .reprompt(speakOutput2)
            .getResponse();
        }
    }
};

const MalaPerfusionHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'MalaPerfusion';
    },
    handle(handlerInput) {
        
        var speakOutput;
        var speakOutput2;
        

        if(caso===3)
        {
            speakOutput = 'La escena no es segura. Entendido?';
            speakOutput2 = 'Lo lamento no te he entendido, puedes decirlo de nuevo? Prueba a decir: "Entendido" o "Eso es todo".';
                    return handlerInput.responseBuilder
            .addDirective(
                                    {
                        "type": "Alexa.Presentation.APL.RenderDocument",
                        "token": "documentToken",
                        "document": {
                            "src": "doc://alexa/apl/documents/Escenario1",
                            "type": "Link"
                        },
                        "datasources": {
                            "simpleTextTemplateData": {
                                "type": "object",
                                "properties": {
                                    "backgroundImage": "https://d2o906d8ln7ui1.cloudfront.net/images/response_builder/background-green.png",
                                    "foregroundImageLocation": "left",
                                    "foregroundImageSource": "",
                                    "headerTitle": "Práctica B.L.S",
                                    "headerSubtitle": "",
                                    "hintText": "Prueba a decir: \"Entendido\", \"Eso es todo\"",
                                    "headerAttributionImage": "https://raw.githubusercontent.com/IbaGPE/Asistente-B.L.S/main/Alexa-Logo.png",
                                    "primaryText": "La escena no es segura. Llama a emergencias y mantente a salvo.",
                                    "textAlignment": "start",
                                    "titleText": "Simulación"
                                }
                            }
                        }
                    }
                )
            .speak(speakOutput)
            .reprompt(speakOutput2)
            .getResponse();
        }
        else
        {
            estado=6;
            speakOutput = 'Entiendo, inicia la reanimación de inmediato, se debe de asegurar el mantener una perfusión y oxigenación tisulares adecuadas. Comprueba si el aporte de oxígeno es suficiente o la ventilación espontánea es adecuada. Entendido?';
            speakOutput2 = 'Lo lamento no te he entendido, puedes decirlo de nuevo? Prueba a decir: "Entendido" o "Que es perfusión".';    
                     return handlerInput.responseBuilder
            .addDirective(
                                    {
                        "type": "Alexa.Presentation.APL.RenderDocument",
                        "token": "documentToken",
                        "document": {
                            "src": "doc://alexa/apl/documents/Escenario1",
                            "type": "Link"
                        },
                        "datasources": {
                            "simpleTextTemplateData": {
                                "type": "object",
                                "properties": {
                                    "backgroundImage": "https://d2o906d8ln7ui1.cloudfront.net/images/response_builder/background-green.png",
                                    "foregroundImageLocation": "left",
                                    "foregroundImageSource": "",
                                    "headerTitle": "Práctica B.L.S",
                                    "headerSubtitle": "",
                                    "hintText": "Prueba a decir: \"Entendido\", \"Que es perfusión?\"",
                                    "headerAttributionImage": "https://raw.githubusercontent.com/IbaGPE/Asistente-B.L.S/main/Alexa-Logo.png",
                                    "primaryText": "Inicie la reanimación, se debe de asegurar el mantener una perfusión y oxigenación tisulares adecuadas. Compruebe si el aporte de oxígeno es suficiente o la ventilación espontánea es adecuada.",
                                    "textAlignment": "start",
                                    "titleText": "Simulación"
                                }
                            }
                        }
                    }
                )
            .speak(speakOutput)
            .reprompt(speakOutput2)
            .getResponse();
        }
    }
};

const SiRespiraHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'SiRespira';
    },
    handle(handlerInput) {
        var speakOutput;
        var speakOutput2;
        estado=7;
        
       if(caso===3)
        {
           speakOutput = 'La escena no es segura, ¿Como has comprobado la respiración? Solo llama a emergencias y mantente a salvo!!! Entendido?'; 
           speakOutput2 = 'Lo lamento no te he entendido, puedes decirlo de nuevo? Prueba a decir: "Entendido" o "Eso es todo".';
                  return handlerInput.responseBuilder
            .addDirective(
                                    {
                        "type": "Alexa.Presentation.APL.RenderDocument",
                        "token": "documentToken",
                        "document": {
                            "src": "doc://alexa/apl/documents/Escenario1",
                            "type": "Link"
                        },
                        "datasources": {
                            "simpleTextTemplateData": {
                                "type": "object",
                                "properties": {
                                    "backgroundImage": "https://d2o906d8ln7ui1.cloudfront.net/images/response_builder/background-green.png",
                                    "foregroundImageLocation": "left",
                                    "foregroundImageSource": "",
                                    "headerTitle": "Práctica B.L.S",
                                    "headerSubtitle": "",
                                    "hintText": "Prueba a decir: \"Entendido\", \"Eso es todo\"",
                                    "headerAttributionImage": "https://raw.githubusercontent.com/IbaGPE/Asistente-B.L.S/main/Alexa-Logo.png",
                                    "primaryText": "La escena no es segura. Llama a emergencias y mantente a salvo.",
                                    "textAlignment": "start",
                                    "titleText": "Simulación"
                                }
                            }
                        }
                    }
                )
            .speak(speakOutput)
            .reprompt(speakOutput2)
            .getResponse();
        }
        
        if (paciente===1)
        {
            speakOutput = 'Okey, Permanece al lado de la víctima y controla su estado hasta la llegada de los reanimadores de emergencias. Informame si ocurre algún cambio en el estado del paciente.';
            speakOutput2 = 'Lo lamento no te he entendido, puedes decirlo de nuevo? Prueba a decir: "Entendido" o "Eso es todo" o "Entro en paro".';      
                          return handlerInput.responseBuilder
            .addDirective(
                                    {
                        "type": "Alexa.Presentation.APL.RenderDocument",
                        "token": "documentToken",
                        "document": {
                            "src": "doc://alexa/apl/documents/Escenario1",
                            "type": "Link"
                        },
                        "datasources": {
                            "simpleTextTemplateData": {
                                "type": "object",
                                "properties": {
                                    "backgroundImage": "https://d2o906d8ln7ui1.cloudfront.net/images/response_builder/background-green.png",
                                    "foregroundImageLocation": "left",
                                    "foregroundImageSource": "",
                                    "headerTitle": "Práctica B.L.S",
                                    "headerSubtitle": "",
                                    "hintText": "Prueba a decir: \"Entendido\", \"Eso es todo\", \"Entro en paro\"",
                                    "headerAttributionImage": "https://raw.githubusercontent.com/IbaGPE/Asistente-B.L.S/main/Alexa-Logo.png",
                                    "primaryText": "Permanezca al lado de la víctima y controla su estado hasta la llegada de los reanimadores de emergencias.",
                                    "textAlignment": "start",
                                    "titleText": "Simulación"
                                }
                            }
                        }
                    }
                )
            .speak(speakOutput)
            .reprompt(speakOutput2)
            .getResponse();
        }
        else
        {
            speakOutput = 'Okay, Permanece al lado de la víctima y controla su estado hasta la llegada de los reanimadores de emergencias. Informame si ocurre algún cambio en el estado del paciente.';
            speakOutput2 = 'Lo lamento no te he entendido, puedes decirlo de nuevo? Prueba a decir: "Entendido" o "Eso es todo" o "Entro en paro".';      
                          return handlerInput.responseBuilder
            .addDirective(
                                    {
                        "type": "Alexa.Presentation.APL.RenderDocument",
                        "token": "documentToken",
                        "document": {
                            "src": "doc://alexa/apl/documents/Escenario1",
                            "type": "Link"
                        },
                        "datasources": {
                            "simpleTextTemplateData": {
                                "type": "object",
                                "properties": {
                                    "backgroundImage": "https://d2o906d8ln7ui1.cloudfront.net/images/response_builder/background-green.png",
                                    "foregroundImageLocation": "left",
                                    "foregroundImageSource": "",
                                    "headerTitle": "Práctica B.L.S",
                                    "headerSubtitle": "",
                                    "hintText": "Prueba a decir: \"Entendido\", \"Eso es todo\", \"Entro en paro\"",
                                    "headerAttributionImage": "https://raw.githubusercontent.com/IbaGPE/Asistente-B.L.S/main/Alexa-Logo.png",
                                    "primaryText": "Permanezca al lado del lactante y controla su estado hasta la llegada de los reanimadores de emergencias.",
                                    "textAlignment": "start",
                                    "titleText": "Simulación"
                                }
                            }
                        }
                    }
                )
            .speak(speakOutput)
            .reprompt(speakOutput2)
            .getResponse();
        }
    }
};

const NoRespiraHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'NoRespira';
    },
    handle(handlerInput) {
        var speakOutput;
        var speakOutput2;
       
        if(caso===3)
            {
               speakOutput = 'La escena no es segura, ¿Como has comprobado la respiración? Solo llama a emergencias y mantente a salvo!!! Entendido?'; 
               speakOutput2 = 'Lo lamento no te he entendido, puedes decirlo de nuevo? Prueba a decir: "Entendido" o "Eso es todo".';
                  return handlerInput.responseBuilder
            .addDirective(
                                    {
                        "type": "Alexa.Presentation.APL.RenderDocument",
                        "token": "documentToken",
                        "document": {
                            "src": "doc://alexa/apl/documents/Escenario1",
                            "type": "Link"
                        },
                        "datasources": {
                            "simpleTextTemplateData": {
                                "type": "object",
                                "properties": {
                                    "backgroundImage": "https://d2o906d8ln7ui1.cloudfront.net/images/response_builder/background-green.png",
                                    "foregroundImageLocation": "left",
                                    "foregroundImageSource": "",
                                    "headerTitle": "Práctica B.L.S",
                                    "headerSubtitle": "",
                                    "hintText": "Prueba a decir: \"Entendido\", \"Eso es todo\"",
                                    "headerAttributionImage": "https://raw.githubusercontent.com/IbaGPE/Asistente-B.L.S/main/Alexa-Logo.png",
                                    "primaryText": "La escena no es segura. Llama a emergencias y mantente a salvo.",
                                    "textAlignment": "start",
                                    "titleText": "Simulación"
                                }
                            }
                        }
                    }
                )
            .speak(speakOutput)
            .reprompt(speakOutput2)
            .getResponse();
            }
       
        if(estado===75||estado===6)
        {
            speakOutput = 'Eso es debido a que el paciente no cuenta con pulso cardíaco, continúa con la reanimación de inmediato. Entendido?.';
            speakOutput2= 'Lo lamento no te he entendido, puedes decirlo de nuevo? Prueba a decir: "Entendido" o "Tenemos el D.E.A" o "Que es compresión?".';
            
            return handlerInput.responseBuilder
           .addDirective(
                                    {
                        "type": "Alexa.Presentation.APL.RenderDocument",
                        "token": "documentToken",
                        "document": {
                            "src": "doc://alexa/apl/documents/Escenario1",
                            "type": "Link"
                        },
                        "datasources": {
                            "simpleTextTemplateData": {
                                "type": "object",
                                "properties": {
                                    "backgroundImage": "https://d2o906d8ln7ui1.cloudfront.net/images/response_builder/background-green.png",
                                    "foregroundImageLocation": "left",
                                    "foregroundImageSource": "",
                                    "headerTitle": "Práctica B.L.S",
                                    "headerSubtitle": "",
                                    "hintText": "Prueba a decir: \"Entendido\", \"Tenemos el D.E.A\", \"Que es compresión?\"",
                                    "headerAttributionImage": "https://raw.githubusercontent.com/IbaGPE/Asistente-B.L.S/main/Alexa-Logo.png",
                                    "primaryText": "Eso es debido a que el paciente no cuenta con pulso cardíaco, continúe con la reanimación.",
                                    "textAlignment": "start",
                                    "titleText": "Simulación"
                                }
                            }
                        }
                    }
                )
           .speak(speakOutput)
           .reprompt(speakOutput2)
           .getResponse();
        }
        if (estado===70&&dea===1)
        {
            estado=71;
            if (paciente===1)
            {
                speakOutput = 'Entiendo, proporciona ventilación de rescate a razón de 1 ventilación cada 5 o 6 segundos, unas 11 ventilaciones por minuto. Mantente atento a las indicaciones del D.E.A. Entendido?';
                speakOutput2= 'Lo lamento no te he entendido, puedes decirlo de nuevo? Prueba a decir: "Entendido" o "Entro en paro" o "Que es ventilación?".';       
                        return handlerInput.responseBuilder
           .addDirective(
                                    {
                        "type": "Alexa.Presentation.APL.RenderDocument",
                        "token": "documentToken",
                        "document": {
                            "src": "doc://alexa/apl/documents/Escenario1",
                            "type": "Link"
                        },
                        "datasources": {
                            "simpleTextTemplateData": {
                                "type": "object",
                                "properties": {
                                    "backgroundImage": "https://d2o906d8ln7ui1.cloudfront.net/images/response_builder/background-green.png",
                                    "foregroundImageLocation": "left",
                                    "foregroundImageSource": "",
                                    "headerTitle": "Práctica B.L.S",
                                    "headerSubtitle": "",
                                    "hintText": "Prueba a decir: \"Entendido\", \"Entro en paro\", \"Que es ventilación?\"",
                                    "headerAttributionImage": "https://raw.githubusercontent.com/IbaGPE/Asistente-B.L.S/main/Alexa-Logo.png",
                                    "primaryText": "Proporcione ventilación de rescate a razón de 1 ventilación cada 5 o 6 segundos. Mantengace atento a las indicaciones del D.E.A.",
                                    "textAlignment": "start",
                                    "titleText": "Simulación"
                                }
                            }
                        }
                    }
                )
           .speak(speakOutput)
           .reprompt(speakOutput2)
           .getResponse();
            }
            else
            {
                speakOutput = 'Entiendo, proporciona ventilación de rescate a razón de 1 ventilación cada 3 o 5 segundos, unas 17 ventilaciones por minuto. Mantente atento a las indicaciones del D.E.A. Entendido?';
                speakOutput2= 'Lo lamento no te he entendido, puedes decirlo de nuevo? Prueba a decir: "Entendido" o "Entro en paro" o "Que es ventilación?".';       
                        return handlerInput.responseBuilder
           .addDirective(
                                    {
                        "type": "Alexa.Presentation.APL.RenderDocument",
                        "token": "documentToken",
                        "document": {
                            "src": "doc://alexa/apl/documents/Escenario1",
                            "type": "Link"
                        },
                        "datasources": {
                            "simpleTextTemplateData": {
                                "type": "object",
                                "properties": {
                                    "backgroundImage": "https://d2o906d8ln7ui1.cloudfront.net/images/response_builder/background-green.png",
                                    "foregroundImageLocation": "left",
                                    "foregroundImageSource": "",
                                    "headerTitle": "Práctica B.L.S",
                                    "headerSubtitle": "",
                                    "hintText": "Prueba a decir: \"Entendido\", \"Entro en paro\", \"Que es ventilación?\"",
                                    "headerAttributionImage": "https://raw.githubusercontent.com/IbaGPE/Asistente-B.L.S/main/Alexa-Logo.png",
                                    "primaryText": "Proporcione ventilación de rescate a razón de 1 ventilación cada 5 o 6 segundos. Mantengace atento a las indicaciones del D.E.A.",
                                    "textAlignment": "start",
                                    "titleText": "Simulación"
                                }
                            }
                        }
                    }
                )
           .speak(speakOutput)
           .reprompt(speakOutput2)
           .getResponse();
            }
        }
        else
        {
            if(estado===5||estado===7)
            {
                estado=50;
            }
            else
            {
                estado=8;
            }
            
            if (paciente===1)
            {
                speakOutput = 'Okey, proporciona ventilación de rescate a razón de 1 ventilación cada 5 o 6 segundos, unas 11 ventilaciones por minuto. Además comprueba el pulso cada 2 minutos aproximadamente, en caso de sospecha de sobredosis de opiáceos, administrar naloxona si está disponible siguiendo el protocolo. Entendido?';
                speakOutput2= 'Lo lamento no te he entendido, puedes decirlo de nuevo? Prueba a decir: "Entendido" o "Entro en paro" o "Que es ventilación?".';       
                        return handlerInput.responseBuilder
           .addDirective(
                                    {
                        "type": "Alexa.Presentation.APL.RenderDocument",
                        "token": "documentToken",
                        "document": {
                            "src": "doc://alexa/apl/documents/Escenario1",
                            "type": "Link"
                        },
                        "datasources": {
                            "simpleTextTemplateData": {
                                "type": "object",
                                "properties": {
                                    "backgroundImage": "https://d2o906d8ln7ui1.cloudfront.net/images/response_builder/background-green.png",
                                    "foregroundImageLocation": "left",
                                    "foregroundImageSource": "",
                                    "headerTitle": "Práctica B.L.S",
                                    "headerSubtitle": "",
                                    "hintText": "Prueba a decir: \"Entendido\", \"Entro en paro\", \"Que es ventilación?\"",
                                    "headerAttributionImage": "https://raw.githubusercontent.com/IbaGPE/Asistente-B.L.S/main/Alexa-Logo.png",
                                    "primaryText": "Proporcione ventilación de rescate a razón de 1 ventilación cada 5 o 6 segundos. Compruebe el pulso cada 2 minutos.",
                                    "textAlignment": "start",
                                    "titleText": "Simulación"
                                }
                            }
                        }
                    }
                )
           .speak(speakOutput)
           .reprompt(speakOutput2)
           .getResponse();
            }
            else
            {
                speakOutput = 'Okay, proporciona ventilación de rescate a razón de 1 ventilación cada 3 o 5 segundos, unas 17 ventilaciones por minuto. Si el pulso se mantiene menor o igual a 60 I.P.M. Con signos de mala perfusión, añada compresiones. Además comprueba el pulso cada 2 minutos aproximadamente. Entendido?';
                speakOutput2= 'Lo lamento no te he entendido, puedes decirlo de nuevo? Prueba a decir: "Entendido" o "Entro en paro" o "Que es ventilación?".';       
                        return handlerInput.responseBuilder
           .addDirective(
                                    {
                        "type": "Alexa.Presentation.APL.RenderDocument",
                        "token": "documentToken",
                        "document": {
                            "src": "doc://alexa/apl/documents/Escenario1",
                            "type": "Link"
                        },
                        "datasources": {
                            "simpleTextTemplateData": {
                                "type": "object",
                                "properties": {
                                    "backgroundImage": "https://d2o906d8ln7ui1.cloudfront.net/images/response_builder/background-green.png",
                                    "foregroundImageLocation": "left",
                                    "foregroundImageSource": "",
                                    "headerTitle": "Práctica B.L.S",
                                    "headerSubtitle": "",
                                    "hintText": "Prueba a decir: \"Entendido\", \"Entro en paro\", \"Que es ventilación?\", \"Que es perfusión?\", \"Tiene una mala perfusión\"",
                                    "headerAttributionImage": "https://raw.githubusercontent.com/IbaGPE/Asistente-B.L.S/main/Alexa-Logo.png",
                                    "primaryText": "Proporcione ventilación de rescate a razón de 1 ventilación cada 3 o 5 segundos. Compruebe el pulso cada 2 minutos. Si el pulso se mantiene menor o igual a 60 I.P.M. Con signos de mala perfusión, añada compresiones.",
                                    "textAlignment": "start",
                                    "titleText": "Simulación"
                                }
                            }
                        }
                    }
                )
           .speak(speakOutput)
           .reprompt(speakOutput2)
           .getResponse();
            }
        }
    }
};

const FinDePracticaEscenaNoSeguraHandler = {
     canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AsistenciaContracciones'
            && (caso===3||estado===3);
    },
    handle(handlerInput) {

        var final = new Date();
        var tiempo = final-inicio;
        var totalminutos = Math.trunc(tiempo/60000);
        var totalsegundos = (Math.trunc(tiempo/1000))-(60*(Math.trunc(tiempo/60000)));
        const speakOutput='Bien, la práctica ha finalizado. Tuvo una duración de: ';

        return handlerInput.responseBuilder
            .speak(speakOutput + totalminutos + ' minutos con ' + totalsegundos + ' segundos. Ahora solo tienes que decir: "Alexa, cierra la Skill".')
            .addDirective({
    "type": "Alexa.Presentation.APL.RenderDocument",
    "token": "documentToken",
    "document": {
        "src": "doc://alexa/apl/documents/Audio",
        "type": "Link"
    },
    "datasources": {
        "audioPlayerTemplateData": {
            "type": "object",
            "properties": {
                "audioControlType": "none",
                "audioSources": [
                    "https://github.com/IbaGPE/Asistente-B.L.S/blob/main/Elfen%20Lied%20-%20Lilium%20(Piano%20Version)%20%E3%82%A8%E3%83%AB%E3%83%95%E3%82%A7%E3%83%B3%E3%83%AA%E3%83%BC%E3%83%88.mp3?raw=true"
                ],
                "backgroundImage": "https://d2o906d8ln7ui1.cloudfront.net/images/response_builder/background-green.png",
                "coverImageSource": "",
                "headerTitle": "Práctica B.L.S",
                "logoUrl": "https://raw.githubusercontent.com/IbaGPE/Asistente-B.L.S/main/Alexa-Logo.png",
                "primaryText": "Simulación",
                "secondaryText": "La Práctica ha finalizado.",
                "sliderType": "indeterminate"
            }
        }
    }
})
            .addDirective({
    "type": "Alexa.Presentation.APL.RenderDocument",
    "token": "documentToken",
    "document": {
        "src": "doc://alexa/apl/documents/Final",
        "type": "Link"
    },
    "datasources": {
        "headlineTemplateData": {
            "type": "object",
            "objectId": "headlineSample",
            "properties": {
                "backgroundImage": {
                    "contentDescription": null,
                    "smallSourceUrl": null,
                    "largeSourceUrl": null,
                    "sources": [
                        {
                            "url": "https://d2o906d8ln7ui1.cloudfront.net/images/response_builder/background-green.png",
                            "size": "large"
                        }
                    ]
                },
                "textContent": {
                    "primaryText": {
                        "type": "PlainText",
                        "text": "La práctica finalizó"
                    }
                },
                "logoUrl": "https://raw.githubusercontent.com/IbaGPE/Asistente-B.L.S/main/Alexa-Logo.png",
                "hintText": "Prueba a decir: \"Alexa cierra la Skill\""
            }
        }
    }
})
            .getResponse();
    }
    
};

const AsistenciaContraccionesHandler = {
     canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AsistenciaContracciones'
            && (estado===7||estado===6||estado===75)
            && caso!==3;
    },
    handle(handlerInput) {
        var speakOutput
        var speakOutput2 = 'Lo lamento, puedes decirlo de nuevo? Prueba a decir: "Listo" o "Llego el D.E.A." o "Ya tiene pulso" o "El paciente despertó".';
        
        if(estado===7)
        {
            speakOutput = 'Eso me agrada.';
            speakOutput2 = 'Lo lamento, puedes decirlo de nuevo? Prueba a decir: "Ya no respira" o "Entro en paro" o "El paciente despertó".';
            
            return handlerInput.responseBuilder
            .addDirective(
                                    {
                        "type": "Alexa.Presentation.APL.RenderDocument",
                        "token": "documentToken",
                        "document": {
                            "src": "doc://alexa/apl/documents/Escenario1",
                            "type": "Link"
                        },
                        "datasources": {
                            "simpleTextTemplateData": {
                                "type": "object",
                                "properties": {
                                    "backgroundImage": "https://d2o906d8ln7ui1.cloudfront.net/images/response_builder/background-green.png",
                                    "foregroundImageLocation": "left",
                                    "foregroundImageSource": "",
                                    "headerTitle": "Práctica B.L.S",
                                    "headerSubtitle": "",
                                    "hintText": "Prueba a decir: \"El paciente despertó\", \"Llego el D.E.A\", \"Entro en paro\"",
                                    "headerAttributionImage": "https://raw.githubusercontent.com/IbaGPE/Asistente-B.L.S/main/Alexa-Logo.png",
                                    "primaryText": "Mantengace al tanto del paciente.",
                                    "textAlignment": "start",
                                    "titleText": "Simulación"
                                }
                            }
                        }
                    }
                )
            .speak(speakOutput)
            .reprompt(speakOutput2)
            .getResponse();
        }
        if(estado===6)
        {
            estado=75;
            speakOutput = 'Continúa a razón de 100 a 120 compresiones por minuto.';
                        return handlerInput.responseBuilder
            /*.addDirective({
            "type": "Alexa.Presentation.APLA.RenderDocument",
            "token": "launch_a",
            "document": {
    "type": "APLA",
    "version": "0.91",
    "mainTemplate": {
        "parameters": [
            "payload"
        ],
        "item": {
            "type": "Sequencer",
            "description": "This sample plays a series of audio clips one after another.",
            "items": [
                {
                    "type": "Speech",
                    "contentType": "SSML",
                    "content": "<audio     src=\"soundbank://soundlibrary/computers/beeps_tones/beeps_tones_06\" />"
                },
                {
                    "type": "Silence",
                    "duration": 180
                },
                {
                    "type": "Speech",
                    "contentType": "SSML",
                    "content": "<audio     src=\"soundbank://soundlibrary/computers/beeps_tones/beeps_tones_06\" />"
                },
                {
                    "type": "Silence",
                    "duration": 180
                },{
                    "type": "Speech",
                    "contentType": "SSML",
                    "content": "<audio     src=\"soundbank://soundlibrary/computers/beeps_tones/beeps_tones_06\" />"
                },
                {
                    "type": "Silence",
                    "duration": 180
                },{
                    "type": "Speech",
                    "contentType": "SSML",
                    "content": "<audio     src=\"soundbank://soundlibrary/computers/beeps_tones/beeps_tones_06\" />"
                },
                {
                    "type": "Silence",
                    "duration": 180
                },{
                    "type": "Speech",
                    "contentType": "SSML",
                    "content": "<audio     src=\"soundbank://soundlibrary/computers/beeps_tones/beeps_tones_06\" />"
                },
                {
                    "type": "Silence",
                    "duration": 180
                },{
                    "type": "Speech",
                    "contentType": "SSML",
                    "content": "<audio     src=\"soundbank://soundlibrary/computers/beeps_tones/beeps_tones_06\" />"
                },
                {
                    "type": "Silence",
                    "duration": 180
                },{
                    "type": "Speech",
                    "contentType": "SSML",
                    "content": "<audio     src=\"soundbank://soundlibrary/computers/beeps_tones/beeps_tones_06\" />"
                },
                {
                    "type": "Silence",
                    "duration": 180
                },{
                    "type": "Speech",
                    "contentType": "SSML",
                    "content": "<audio     src=\"soundbank://soundlibrary/computers/beeps_tones/beeps_tones_06\" />"
                },
                {
                    "type": "Silence",
                    "duration": 180
                },{
                    "type": "Speech",
                    "contentType": "SSML",
                    "content": "<audio     src=\"soundbank://soundlibrary/computers/beeps_tones/beeps_tones_06\" />"
                },
                {
                    "type": "Silence",
                    "duration": 180
                },{
                    "type": "Speech",
                    "contentType": "SSML",
                    "content": "<audio     src=\"soundbank://soundlibrary/computers/beeps_tones/beeps_tones_06\" />"
                },
                {
                    "type": "Silence",
                    "duration": 180
                },{
                    "type": "Speech",
                    "contentType": "SSML",
                    "content": "<audio     src=\"soundbank://soundlibrary/computers/beeps_tones/beeps_tones_06\" />"
                },
                {
                    "type": "Silence",
                    "duration": 180
                },{
                    "type": "Speech",
                    "contentType": "SSML",
                    "content": "<audio     src=\"soundbank://soundlibrary/computers/beeps_tones/beeps_tones_06\" />"
                },
                {
                    "type": "Silence",
                    "duration": 180
                },{
                    "type": "Speech",
                    "contentType": "SSML",
                    "content": "<audio     src=\"soundbank://soundlibrary/computers/beeps_tones/beeps_tones_06\" />"
                },
                {
                    "type": "Silence",
                    "duration": 180
                },{
                    "type": "Speech",
                    "contentType": "SSML",
                    "content": "<audio     src=\"soundbank://soundlibrary/computers/beeps_tones/beeps_tones_06\" />"
                },
                {
                    "type": "Silence",
                    "duration": 180
                },{
                    "type": "Speech",
                    "contentType": "SSML",
                    "content": "<audio     src=\"soundbank://soundlibrary/computers/beeps_tones/beeps_tones_06\" />"
                },
                {
                    "type": "Silence",
                    "duration": 180
                },{
                    "type": "Speech",
                    "contentType": "SSML",
                    "content": "<audio     src=\"soundbank://soundlibrary/computers/beeps_tones/beeps_tones_06\" />"
                },
                {
                    "type": "Silence",
                    "duration": 180
                },{
                    "type": "Speech",
                    "contentType": "SSML",
                    "content": "<audio     src=\"soundbank://soundlibrary/computers/beeps_tones/beeps_tones_06\" />"
                },
                {
                    "type": "Silence",
                    "duration": 180
                },{
                    "type": "Speech",
                    "contentType": "SSML",
                    "content": "<audio     src=\"soundbank://soundlibrary/computers/beeps_tones/beeps_tones_06\" />"
                },
                {
                    "type": "Silence",
                    "duration": 180
                },{
                    "type": "Speech",
                    "contentType": "SSML",
                    "content": "<audio     src=\"soundbank://soundlibrary/computers/beeps_tones/beeps_tones_06\" />"
                },
                {
                    "type": "Silence",
                    "duration": 180
                },{
                    "type": "Speech",
                    "contentType": "SSML",
                    "content": "<audio     src=\"soundbank://soundlibrary/computers/beeps_tones/beeps_tones_06\" />"
                },
                {
                    "type": "Silence",
                    "duration": 180
                },{
                    "type": "Speech",
                    "contentType": "SSML",
                    "content": "<audio     src=\"soundbank://soundlibrary/computers/beeps_tones/beeps_tones_06\" />"
                },
                {
                    "type": "Silence",
                    "duration": 180
                },{
                    "type": "Speech",
                    "contentType": "SSML",
                    "content": "<audio     src=\"soundbank://soundlibrary/computers/beeps_tones/beeps_tones_06\" />"
                },
                {
                    "type": "Silence",
                    "duration": 180
                },{
                    "type": "Speech",
                    "contentType": "SSML",
                    "content": "<audio     src=\"soundbank://soundlibrary/computers/beeps_tones/beeps_tones_06\" />"
                },
                {
                    "type": "Silence",
                    "duration": 180
                },{
                    "type": "Speech",
                    "contentType": "SSML",
                    "content": "<audio     src=\"soundbank://soundlibrary/computers/beeps_tones/beeps_tones_06\" />"
                },
                {
                    "type": "Silence",
                    "duration": 180
                },{
                    "type": "Speech",
                    "contentType": "SSML",
                    "content": "<audio     src=\"soundbank://soundlibrary/computers/beeps_tones/beeps_tones_06\" />"
                },
                {
                    "type": "Silence",
                    "duration": 180
                },{
                    "type": "Speech",
                    "contentType": "SSML",
                    "content": "<audio     src=\"soundbank://soundlibrary/computers/beeps_tones/beeps_tones_06\" />"
                },
                {
                    "type": "Silence",
                    "duration": 180
                },{
                    "type": "Speech",
                    "contentType": "SSML",
                    "content": "<audio     src=\"soundbank://soundlibrary/computers/beeps_tones/beeps_tones_06\" />"
                },
                {
                    "type": "Silence",
                    "duration": 180
                },{
                    "type": "Speech",
                    "contentType": "SSML",
                    "content": "<audio     src=\"soundbank://soundlibrary/computers/beeps_tones/beeps_tones_06\" />"
                },
                {
                    "type": "Silence",
                    "duration": 180
                },{
                    "type": "Speech",
                    "contentType": "SSML",
                    "content": "<audio     src=\"soundbank://soundlibrary/computers/beeps_tones/beeps_tones_06\" />"
                },
                {
                    "type": "Silence",
                    "duration": 180
                },{
                    "type": "Speech",
                    "contentType": "SSML",
                    "content": "<audio     src=\"soundbank://soundlibrary/computers/beeps_tones/beeps_tones_06\" />"
                },
                {
                    "type": "Silence",
                    "duration": 180
                },{
                    "type": "Speech",
                    "content": "<speak> Ahora da dos ventilaciones.</speak>"
                },
                {
                    "type": "Silence",
                    "duration": 500
                },{
                    "type": "Speech",
                    "content": "<speak> Listo?</speak>"
                }
            ]
        }
    }
}
    })*/
            .addDirective({
    "type": "Alexa.Presentation.APL.RenderDocument",
    "token": "documentToken",
    "document": {
        "src": "doc://alexa/apl/documents/Audio",
        "type": "Link"
    },
    "datasources": {
        "audioPlayerTemplateData": {
            "type": "object",
            "properties": {
                "audioControlType": "none",
                "audioSources": [
                    "https://github.com/IbaGPE/Asistente-B.L.S/blob/main/115bpm.mp3?raw=true"
                ],
                "backgroundImage": "https://d2o906d8ln7ui1.cloudfront.net/images/response_builder/background-green.png",
                "coverImageSource": "",
                "headerTitle": "Práctica B.L.S",
                "logoUrl": "https://raw.githubusercontent.com/IbaGPE/Asistente-B.L.S/main/Alexa-Logo.png",
                "primaryText": "Simulación",
                "secondaryText": "Realice compresiones torácicas al ritmo.",
                "sliderType": "indeterminate"
            }
        }
    }
})
            .addDirective({
            "type": "Alexa.Presentation.APLA.RenderDocument",
            "token": "launch_a",
            "document": {
    "type": "APLA",
    "version": "0.91",
    "mainTemplate": {
        "parameters": [
            "payload"
        ],
        "item": {
            "type": "Sequencer",
            "description": "This sample plays a series of audio clips one after another.",
            "items": [
                {
                    "type": "Silence",
                    "duration": 12500
                },{
                    "type": "Speech",
                    "content": "<speak> Ahora de dos ventilaciones. </speak>"
                },{
                    "type": "Silence",
                    "duration": 3000
                },{
                    "type": "Speech",
                    "content": "<speak> Listo? </speak>"
                }]}}}})
            .speak(speakOutput)
            .reprompt(speakOutput2)
            .getResponse();
        }
        else
        {
            speakOutput = 'Continúa.';
                        return handlerInput.responseBuilder
            /*.addDirective({
            "type": "Alexa.Presentation.APLA.RenderDocument",
            "token": "launch_a",
            "document": {
    "type": "APLA",
    "version": "0.91",
    "mainTemplate": {
        "parameters": [
            "payload"
        ],
        "item": {
            "type": "Sequencer",
            "description": "This sample plays a series of audio clips one after another.",
            "items": [
                {
                    "type": "Speech",
                    "contentType": "SSML",
                    "content": "<audio     src=\"soundbank://soundlibrary/computers/beeps_tones/beeps_tones_06\" />"
                },
                {
                    "type": "Silence",
                    "duration": 180
                },
                {
                    "type": "Speech",
                    "contentType": "SSML",
                    "content": "<audio     src=\"soundbank://soundlibrary/computers/beeps_tones/beeps_tones_06\" />"
                },
                {
                    "type": "Silence",
                    "duration": 180
                },{
                    "type": "Speech",
                    "contentType": "SSML",
                    "content": "<audio     src=\"soundbank://soundlibrary/computers/beeps_tones/beeps_tones_06\" />"
                },
                {
                    "type": "Silence",
                    "duration": 180
                },{
                    "type": "Speech",
                    "contentType": "SSML",
                    "content": "<audio     src=\"soundbank://soundlibrary/computers/beeps_tones/beeps_tones_06\" />"
                },
                {
                    "type": "Silence",
                    "duration": 180
                },{
                    "type": "Speech",
                    "contentType": "SSML",
                    "content": "<audio     src=\"soundbank://soundlibrary/computers/beeps_tones/beeps_tones_06\" />"
                },
                {
                    "type": "Silence",
                    "duration": 180
                },{
                    "type": "Speech",
                    "contentType": "SSML",
                    "content": "<audio     src=\"soundbank://soundlibrary/computers/beeps_tones/beeps_tones_06\" />"
                },
                {
                    "type": "Silence",
                    "duration": 180
                },{
                    "type": "Speech",
                    "contentType": "SSML",
                    "content": "<audio     src=\"soundbank://soundlibrary/computers/beeps_tones/beeps_tones_06\" />"
                },
                {
                    "type": "Silence",
                    "duration": 180
                },{
                    "type": "Speech",
                    "contentType": "SSML",
                    "content": "<audio     src=\"soundbank://soundlibrary/computers/beeps_tones/beeps_tones_06\" />"
                },
                {
                    "type": "Silence",
                    "duration": 180
                },{
                    "type": "Speech",
                    "contentType": "SSML",
                    "content": "<audio     src=\"soundbank://soundlibrary/computers/beeps_tones/beeps_tones_06\" />"
                },
                {
                    "type": "Silence",
                    "duration": 180
                },{
                    "type": "Speech",
                    "contentType": "SSML",
                    "content": "<audio     src=\"soundbank://soundlibrary/computers/beeps_tones/beeps_tones_06\" />"
                },
                {
                    "type": "Silence",
                    "duration": 180
                },{
                    "type": "Speech",
                    "contentType": "SSML",
                    "content": "<audio     src=\"soundbank://soundlibrary/computers/beeps_tones/beeps_tones_06\" />"
                },
                {
                    "type": "Silence",
                    "duration": 180
                },{
                    "type": "Speech",
                    "contentType": "SSML",
                    "content": "<audio     src=\"soundbank://soundlibrary/computers/beeps_tones/beeps_tones_06\" />"
                },
                {
                    "type": "Silence",
                    "duration": 180
                },{
                    "type": "Speech",
                    "contentType": "SSML",
                    "content": "<audio     src=\"soundbank://soundlibrary/computers/beeps_tones/beeps_tones_06\" />"
                },
                {
                    "type": "Silence",
                    "duration": 180
                },{
                    "type": "Speech",
                    "contentType": "SSML",
                    "content": "<audio     src=\"soundbank://soundlibrary/computers/beeps_tones/beeps_tones_06\" />"
                },
                {
                    "type": "Silence",
                    "duration": 180
                },{
                    "type": "Speech",
                    "contentType": "SSML",
                    "content": "<audio     src=\"soundbank://soundlibrary/computers/beeps_tones/beeps_tones_06\" />"
                },
                {
                    "type": "Silence",
                    "duration": 180
                },{
                    "type": "Speech",
                    "contentType": "SSML",
                    "content": "<audio     src=\"soundbank://soundlibrary/computers/beeps_tones/beeps_tones_06\" />"
                },
                {
                    "type": "Silence",
                    "duration": 180
                },{
                    "type": "Speech",
                    "contentType": "SSML",
                    "content": "<audio     src=\"soundbank://soundlibrary/computers/beeps_tones/beeps_tones_06\" />"
                },
                {
                    "type": "Silence",
                    "duration": 180
                },{
                    "type": "Speech",
                    "contentType": "SSML",
                    "content": "<audio     src=\"soundbank://soundlibrary/computers/beeps_tones/beeps_tones_06\" />"
                },
                {
                    "type": "Silence",
                    "duration": 180
                },{
                    "type": "Speech",
                    "contentType": "SSML",
                    "content": "<audio     src=\"soundbank://soundlibrary/computers/beeps_tones/beeps_tones_06\" />"
                },
                {
                    "type": "Silence",
                    "duration": 180
                },{
                    "type": "Speech",
                    "contentType": "SSML",
                    "content": "<audio     src=\"soundbank://soundlibrary/computers/beeps_tones/beeps_tones_06\" />"
                },
                {
                    "type": "Silence",
                    "duration": 180
                },{
                    "type": "Speech",
                    "contentType": "SSML",
                    "content": "<audio     src=\"soundbank://soundlibrary/computers/beeps_tones/beeps_tones_06\" />"
                },
                {
                    "type": "Silence",
                    "duration": 180
                },{
                    "type": "Speech",
                    "contentType": "SSML",
                    "content": "<audio     src=\"soundbank://soundlibrary/computers/beeps_tones/beeps_tones_06\" />"
                },
                {
                    "type": "Silence",
                    "duration": 180
                },{
                    "type": "Speech",
                    "contentType": "SSML",
                    "content": "<audio     src=\"soundbank://soundlibrary/computers/beeps_tones/beeps_tones_06\" />"
                },
                {
                    "type": "Silence",
                    "duration": 180
                },{
                    "type": "Speech",
                    "contentType": "SSML",
                    "content": "<audio     src=\"soundbank://soundlibrary/computers/beeps_tones/beeps_tones_06\" />"
                },
                {
                    "type": "Silence",
                    "duration": 180
                },{
                    "type": "Speech",
                    "contentType": "SSML",
                    "content": "<audio     src=\"soundbank://soundlibrary/computers/beeps_tones/beeps_tones_06\" />"
                },
                {
                    "type": "Silence",
                    "duration": 180
                },{
                    "type": "Speech",
                    "contentType": "SSML",
                    "content": "<audio     src=\"soundbank://soundlibrary/computers/beeps_tones/beeps_tones_06\" />"
                },
                {
                    "type": "Silence",
                    "duration": 180
                },{
                    "type": "Speech",
                    "contentType": "SSML",
                    "content": "<audio     src=\"soundbank://soundlibrary/computers/beeps_tones/beeps_tones_06\" />"
                },
                {
                    "type": "Silence",
                    "duration": 180
                },{
                    "type": "Speech",
                    "contentType": "SSML",
                    "content": "<audio     src=\"soundbank://soundlibrary/computers/beeps_tones/beeps_tones_06\" />"
                },
                {
                    "type": "Silence",
                    "duration": 180
                },{
                    "type": "Speech",
                    "contentType": "SSML",
                    "content": "<audio     src=\"soundbank://soundlibrary/computers/beeps_tones/beeps_tones_06\" />"
                },
                {
                    "type": "Silence",
                    "duration": 180
                },{
                    "type": "Speech",
                    "contentType": "SSML",
                    "content": "<audio     src=\"soundbank://soundlibrary/computers/beeps_tones/beeps_tones_06\" />"
                },
                {
                    "type": "Silence",
                    "duration": 180
                },{
                    "type": "Speech",
                    "content": "<speak> Ahora da dos ventilaciones.</speak>"
                },
                {
                    "type": "Silence",
                    "duration": 500
                },{
                    "type": "Speech",
                    "content": "<speak> Listo?</speak>"
                }
            ]
        }
    }
}
    })*/
            .addDirective({
    "type": "Alexa.Presentation.APL.RenderDocument",
    "token": "documentToken",
    "document": {
        "src": "doc://alexa/apl/documents/Audio",
        "type": "Link"
    },
    "datasources": {
        "audioPlayerTemplateData": {
            "type": "object",
            "properties": {
                "audioControlType": "none",
                "audioSources": [
                    "https://github.com/IbaGPE/Asistente-B.L.S/blob/main/115bpm.mp3?raw=true"
                ],
                "backgroundImage": "https://d2o906d8ln7ui1.cloudfront.net/images/response_builder/background-green.png",
                "coverImageSource": "",
                "headerTitle": "Práctica B.L.S",
                "logoUrl": "https://raw.githubusercontent.com/IbaGPE/Asistente-B.L.S/main/Alexa-Logo.png",
                "primaryText": "Simulación",
                "secondaryText": "Realice compresiones torácicas al ritmo.",
                "sliderType": "indeterminate"
            }
        }
    }
})
            .addDirective({
            "type": "Alexa.Presentation.APLA.RenderDocument",
            "token": "launch_a",
            "document": {
    "type": "APLA",
    "version": "0.91",
    "mainTemplate": {
        "parameters": [
            "payload"
        ],
        "item": {
            "type": "Sequencer",
            "description": "This sample plays a series of audio clips one after another.",
            "items": [
                {
                    "type": "Silence",
                    "duration": 16500
                },{
                    "type": "Speech",
                    "content": "<speak> Ahora de dos ventilaciones. </speak>"
                },{
                    "type": "Silence",
                    "duration": 3000
                },{
                    "type": "Speech",
                    "content": "<speak> Listo? </speak>"
                }]}}}})
            .speak(speakOutput)
            .reprompt(speakOutput2)
            .getResponse();
        }
    }
};

const AsistenciaVentilacionesHandler = {
     canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AsistenciaContracciones'
            && estado>=50
            && caso!==3;
    },
    handle(handlerInput) {
        var speakOutput;
        var speakOutput2;
        if(estado===70)
        {
            speakOutput = 'Perfecto, llámame si ocurre cualquier cambio, no descuides en ningún momento a tu paciente.';
            speakOutput2 = 'Lo lamento, puedes decirlo de nuevo? Prueba a decir: "Ya no respira" o "Entro en paro" o "El paciente despertó".';
            
            return handlerInput.responseBuilder
            .addDirective(
                                    {
                        "type": "Alexa.Presentation.APL.RenderDocument",
                        "token": "documentToken",
                        "document": {
                            "src": "doc://alexa/apl/documents/Escenario1",
                            "type": "Link"
                        },
                        "datasources": {
                            "simpleTextTemplateData": {
                                "type": "object",
                                "properties": {
                                    "backgroundImage": "https://d2o906d8ln7ui1.cloudfront.net/images/response_builder/background-green.png",
                                    "foregroundImageLocation": "left",
                                    "foregroundImageSource": "",
                                    "headerTitle": "Práctica B.L.S",
                                    "headerSubtitle": "",
                                    "hintText": "Prueba a decir: \"El paciente despertó\", \"El ritmo es desfibrilable\", \"Entro en paro\"",
                                    "headerAttributionImage": "https://raw.githubusercontent.com/IbaGPE/Asistente-B.L.S/main/Alexa-Logo.png",
                                    "primaryText": "Mantengace al tanto del paciente.",
                                    "textAlignment": "start",
                                    "titleText": "Simulación"
                                }
                            }
                        }
                    }
                )
           .speak(speakOutput)
           .reprompt(speakOutput2)
           .getResponse();
        }

        var comprobacion = new Date();
        if(estado>=50)
        {
            if(estado===50||estado===71)
            {
                estado=51;
                cronometro = new Date();
            }
            if(paciente===1)
            {
    
                speakOutput = 'Realiza una ventilación cada 5 o 6 segundos, no olvides estar comprobando su ritmo cardíaco.';
            }
            else
            {
                
                speakOutput = 'Realiza una ventilación cada 3 o 5 segundos, no olvides estar comprobando su ritmo cardíaco.';
            }
            if(estado===51)
            {
                var respuesta = (Math.floor((Math.random() * (6 - 1 + 1)) + 1));
                switch (respuesta)
                {
                    case 1: speakOutput = 'Bien.'; break;
                    case 2: speakOutput = 'Okey.'; break;
                    case 3: speakOutput = 'Perfecto.'; break;
                    case 4: speakOutput = 'Eso es.'; break;
                    case 5: speakOutput = 'Claro.'; break;
                    case 6: speakOutput = 'Excelente.'; break;
                    default: speakOutput = 'Valla.'; break;
                }
                
                if (comprobacion-cronometro>90000)
                {
                    estado=50;
                    speakOutput = 'Comprueba el ritmo cardíaco del paciente. El paciente tiene pulso?';
                    const speakOutput2 = `Lo lamento, puedes decirlo de nuevo? Prueba a decir: "Sí tiene pulso" o "No tiene pulso". La víctima tiene pulso?`;
                    return handlerInput.responseBuilder
                    .addDirective(
                                    {
                        "type": "Alexa.Presentation.APL.RenderDocument",
                        "token": "documentToken",
                        "document": {
                            "src": "doc://alexa/apl/documents/Escenario1",
                            "type": "Link"
                        },
                        "datasources": {
                            "simpleTextTemplateData": {
                                "type": "object",
                                "properties": {
                                    "backgroundImage": "https://d2o906d8ln7ui1.cloudfront.net/images/response_builder/background-green.png",
                                    "foregroundImageLocation": "left",
                                    "foregroundImageSource": "",
                                    "headerTitle": "Práctica B.L.S",
                                    "headerSubtitle": "",
                                    "hintText": "Prueba a decir: \"Sí tiene pulso\", \"No tiene pulso\"",
                                    "headerAttributionImage": "https://raw.githubusercontent.com/IbaGPE/Asistente-B.L.S/main/Alexa-Logo.png",
                                    "primaryText": "Compruebe el ritmo cardíaco del paciente.",
                                    "textAlignment": "start",
                                    "titleText": "Simulación"
                                }
                            }
                        }
                    }
                )
                    .speak(speakOutput)
                    .reprompt(speakOutput2)
                    .getResponse();
                }
            }
        }
        
        if (paciente===1)
        {
                return handlerInput.responseBuilder
                .addDirective(
                                    {
                        "type": "Alexa.Presentation.APL.RenderDocument",
                        "token": "documentToken",
                        "document": {
                            "src": "doc://alexa/apl/documents/Escenario1",
                            "type": "Link"
                        },
                        "datasources": {
                            "simpleTextTemplateData": {
                                "type": "object",
                                "properties": {
                                    "backgroundImage": "https://d2o906d8ln7ui1.cloudfront.net/images/response_builder/background-green.png",
                                    "foregroundImageLocation": "left",
                                    "foregroundImageSource": "",
                                    "headerTitle": "Práctica B.L.S",
                                    "headerSubtitle": "",
                                    "hintText": "Prueba a decir: \"Listo\", \"Ya no tiene pulso\"",
                                    "headerAttributionImage": "https://raw.githubusercontent.com/IbaGPE/Asistente-B.L.S/main/Alexa-Logo.png",
                                    "primaryText": "Realice ventilaciones. Compruebe cada 2 minutos el ritmo cardíaco del paciente.",
                                    "textAlignment": "start",
                                    "titleText": "Simulación"
                                }
                            }
                        }
                    }
                )
                .addDirective({
            "type": "Alexa.Presentation.APLA.RenderDocument",
            "token": "launch_a",
            "document": {
    "type": "APLA",
    "version": "0.91",
    "mainTemplate": {
        "parameters": [
            "payload"
        ],
        "item": {
            "type": "Sequencer",
            "description": "This sample plays a series of audio clips one after another.",
            "items": [
                {
                    "type": "Silence",
                    "duration": 3000
                },{
                    "type": "Speech",
                    "content": "<speak> Ventila ahora. Listo? </speak>"
                }]}}}})
                .speak(speakOutput)
                .reprompt(speakOutput)
                .getResponse();
        }
        else
        {
                 return handlerInput.responseBuilder
                .addDirective(
                                    {
                        "type": "Alexa.Presentation.APL.RenderDocument",
                        "token": "documentToken",
                        "document": {
                            "src": "doc://alexa/apl/documents/Escenario1",
                            "type": "Link"
                        },
                        "datasources": {
                            "simpleTextTemplateData": {
                                "type": "object",
                                "properties": {
                                    "backgroundImage": "https://d2o906d8ln7ui1.cloudfront.net/images/response_builder/background-green.png",
                                    "foregroundImageLocation": "left",
                                    "foregroundImageSource": "",
                                    "headerTitle": "Práctica B.L.S",
                                    "headerSubtitle": "",
                                    "hintText": "Prueba a decir: \"Listo\", \"Ya no tiene pulso\"",
                                    "headerAttributionImage": "https://raw.githubusercontent.com/IbaGPE/Asistente-B.L.S/main/Alexa-Logo.png",
                                    "primaryText": "Realice ventilaciones. Compruebe cada 2 minutos el ritmo cardíaco del lactante.",
                                    "textAlignment": "start",
                                    "titleText": "Simulación"
                                }
                            }
                        }
                    }
                )
                .addDirective({
            "type": "Alexa.Presentation.APLA.RenderDocument",
            "token": "launch_a",
            "document": {
    "type": "APLA",
    "version": "0.91",
    "mainTemplate": {
        "parameters": [
            "payload"
        ],
        "item": {
            "type": "Sequencer",
            "description": "This sample plays a series of audio clips one after another.",
            "items": [
                {
                    "type": "Silence",
                    "duration": 1500
                },{
                    "type": "Speech",
                    "content": "<speak> Ventila ahora. Listo? </speak>"
                }]}}}})
                .speak(speakOutput)
                .reprompt(speakOutput)
                .getResponse();
        }
    }
};


const DeaHandler = {
     canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'Dea';
    },
    handle(handlerInput) {
        var speakOutput;
        var speakOutput2;
        var speakOutput3;
        
         if(caso===3)
        {
           speakOutput = '¿Pero que dices? ';
           speakOutput2 = 'Te encuentras en una escena insegura. Entendido?'; 
           speakOutput3 = `Prueba a decir: "Eso es todo" o "la práctica ha terminado" y a continuación "Alexa, cierra la Skill".`;
            return handlerInput.responseBuilder
            .addDirective(
                                    {
                        "type": "Alexa.Presentation.APL.RenderDocument",
                        "token": "documentToken",
                        "document": {
                            "src": "doc://alexa/apl/documents/Escenario1",
                            "type": "Link"
                        },
                        "datasources": {
                            "simpleTextTemplateData": {
                                "type": "object",
                                "properties": {
                                    "backgroundImage": "https://d2o906d8ln7ui1.cloudfront.net/images/response_builder/background-green.png",
                                    "foregroundImageLocation": "left",
                                    "foregroundImageSource": "",
                                    "headerTitle": "Práctica B.L.S",
                                    "headerSubtitle": "",
                                    "hintText": "Prueba a decir: \"Entendido\", \"Eso es todo\"",
                                    "headerAttributionImage": "https://raw.githubusercontent.com/IbaGPE/Asistente-B.L.S/main/Alexa-Logo.png",
                                    "primaryText": "La escena no es segura. Llama a emergencias y mantente a salvo.",
                                    "textAlignment": "start",
                                    "titleText": "Simulación"
                                }
                            }
                        }
                    }
                )
            .speak(speakOutput+speakOutput2)
            .reprompt(speakOutput3)
            .getResponse();
        }
        
        if(dea===1)
        {
           speakOutput = 'Lo sé. ';
           speakOutput2 = 'Ya colocaste los parches en el paciente? No descuides a tu paciente, su vida depende de ti. Entendido?'; 
           speakOutput3 = `Lo lamento, puedes decirlo de nuevo? Prueba a decir: "Entendido".`;
           
                   return handlerInput.responseBuilder
            .addDirective(
                                    {
                        "type": "Alexa.Presentation.APL.RenderDocument",
                        "token": "documentToken",
                        "document": {
                            "src": "doc://alexa/apl/documents/Escenario1",
                            "type": "Link"
                        },
                        "datasources": {
                            "simpleTextTemplateData": {
                                "type": "object",
                                "properties": {
                                    "backgroundImage": "https://d2o906d8ln7ui1.cloudfront.net/images/response_builder/background-green.png",
                                    "foregroundImageLocation": "left",
                                    "foregroundImageSource": "",
                                    "headerTitle": "Práctica B.L.S",
                                    "headerSubtitle": "",
                                    "hintText": "Prueba a decir: \"Entendido\", \"Que es D.E.A?\"",
                                    "headerAttributionImage": "https://raw.githubusercontent.com/IbaGPE/Asistente-B.L.S/main/Alexa-Logo.png",
                                    "primaryText": "Coloque los parches en el paciente.",
                                    "textAlignment": "start",
                                    "titleText": "Simulación"
                                }
                            }
                        }
                    }
                )
            .speak(speakOutput+speakOutput2)
            .reprompt(speakOutput3)
            .getResponse();
        }
        
        if (estado===7)
        {
            speakOutput = 'Excelente, conecte los parches como se indica en el D.E.A. Y continúe monitorizando al paciente hasta que lleguen a la zona los servicios de urgencias. ';
            speakOutput2 = 'Siga las instrucciones que dé el D.E.A. Y compruebe constantemente los signos vitales del paciente.';
            speakOutput3 = `Lo lamento, puedes decirlo de nuevo? Prueba a decir: "Entendido" o "Entro en paro".`;
            estado=70;
            dea=1;
            return handlerInput.responseBuilder
            .addDirective(
                                    {
                        "type": "Alexa.Presentation.APL.RenderDocument",
                        "token": "documentToken",
                        "document": {
                            "src": "doc://alexa/apl/documents/Escenario1",
                            "type": "Link"
                        },
                        "datasources": {
                            "simpleTextTemplateData": {
                                "type": "object",
                                "properties": {
                                    "backgroundImage": "https://d2o906d8ln7ui1.cloudfront.net/images/response_builder/background-green.png",
                                    "foregroundImageLocation": "left",
                                    "foregroundImageSource": "",
                                    "headerTitle": "Práctica B.L.S",
                                    "headerSubtitle": "",
                                    "hintText": "Prueba a decir: \"Entendido\", \"Entro en paro\"",
                                    "headerAttributionImage": "https://raw.githubusercontent.com/IbaGPE/Asistente-B.L.S/main/Alexa-Logo.png",
                                    "primaryText": "Conecte los parches como se indica en el D.E.A. Y continúe monitorizando al paciente hasta que lleguen a la zona los servicios de urgencias.",
                                    "textAlignment": "start",
                                    "titleText": "Simulación"
                                }
                            }
                        }
                    }
                )
            .speak(speakOutput+speakOutput2)
            .reprompt(speakOutput3)
            .getResponse();
        }
        
        if(paciente===1)
        {
            speakOutput = 'Excelente, comprueba el ritmo cardíaco del paciente con el D.E.A. ';
            speakOutput2 = 'El ritmo es desfibrilable?';
            speakOutput3 = `Lo lamento, puedes decirlo de nuevo? Prueba a decir: "Sí lo es" o "No lo es". El ritmo es desfibrilable?`;
            dea=1;
        }
        else
        {
            speakOutput = 'Excelente, comprueba el ritmo cardíaco del paciente con el D.E.A. ';
            speakOutput2 = 'El ritmo es desfibrilable?';
            speakOutput3 = `Lo lamento, puedes decirlo de nuevo? Prueba a decir: "Sí lo es" o "No lo es". El ritmo es desfibrilable?`;
            dea=1;
        }
             return handlerInput.responseBuilder
            .addDirective(
                                    {
                        "type": "Alexa.Presentation.APL.RenderDocument",
                        "token": "documentToken",
                        "document": {
                            "src": "doc://alexa/apl/documents/Escenario1",
                            "type": "Link"
                        },
                        "datasources": {
                            "simpleTextTemplateData": {
                                "type": "object",
                                "properties": {
                                    "backgroundImage": "https://d2o906d8ln7ui1.cloudfront.net/images/response_builder/background-green.png",
                                    "foregroundImageLocation": "left",
                                    "foregroundImageSource": "",
                                    "headerTitle": "Práctica B.L.S",
                                    "headerSubtitle": "",
                                    "hintText": "Prueba a decir: \"Sí lo es\", \"No lo es\", \"Que es el D.E.A\"",
                                    "headerAttributionImage": "https://raw.githubusercontent.com/IbaGPE/Asistente-B.L.S/main/Alexa-Logo.png",
                                    "primaryText": "Compruebe el ritmo cardíaco del paciente con el D.E.A.",
                                    "textAlignment": "start",
                                    "titleText": "Simulación"
                                }
                            }
                        }
                    }
                )
            .speak(speakOutput+speakOutput2)
            .reprompt(speakOutput3)
            .getResponse();
    }
    
};

const SiDesfibrilableHandler = {
     canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'SiDesfibrilable';
    },
    handle(handlerInput) {
        var speakOutput;
        var speakOutput2 = 'Lo lamento, puedes decirlo de nuevo? Prueba a decir: "Entendido" o "El paciente despertó".';
        
        if(caso===3)
        {
           speakOutput = 'Me gustan las bromas, pero, este no es un buen momento para ellas. Ya llamaste al servicio de emergencias? solo llama a emergencias y deja que ellos se hagan cargo de la situación. Mantente a salvo lejos de la escena. Entendido?'; 
           speakOutput2 = `Lo lamento, puedes decirlo de nuevo? Prueba a decir: "Eso es todo" o "la práctica ha terminado" y a continuación "Alexa, cierra la Skill".`;
           return handlerInput.responseBuilder
            .addDirective(
                                    {
                        "type": "Alexa.Presentation.APL.RenderDocument",
                        "token": "documentToken",
                        "document": {
                            "src": "doc://alexa/apl/documents/Escenario1",
                            "type": "Link"
                        },
                        "datasources": {
                            "simpleTextTemplateData": {
                                "type": "object",
                                "properties": {
                                    "backgroundImage": "https://d2o906d8ln7ui1.cloudfront.net/images/response_builder/background-green.png",
                                    "foregroundImageLocation": "left",
                                    "foregroundImageSource": "",
                                    "headerTitle": "Práctica B.L.S",
                                    "headerSubtitle": "",
                                    "hintText": "Prueba a decir: \"Entendido\", \"Eso es todo\"",
                                    "headerAttributionImage": "https://raw.githubusercontent.com/IbaGPE/Asistente-B.L.S/main/Alexa-Logo.png",
                                    "primaryText": "La escena no es segura. Llama a emergencias y mantente a salvo.",
                                    "textAlignment": "start",
                                    "titleText": "Simulación"
                                }
                            }
                        }
                    }
                )
            .speak(speakOutput)
            .reprompt(speakOutput2)
            .getResponse();
        }
        if(paciente===1)
        {
            speakOutput = 'De acuerdo, Administra 1 descarga.';
        }
        else
        {
            speakOutput = 'De acuerdo, Administra 1 descarga.';
        }
        estado=6;
        
        return handlerInput.responseBuilder
            .addDirective(
                                    {
                        "type": "Alexa.Presentation.APL.RenderDocument",
                        "token": "documentToken",
                        "document": {
                            "src": "doc://alexa/apl/documents/Escenario1",
                            "type": "Link"
                        },
                        "datasources": {
                            "simpleTextTemplateData": {
                                "type": "object",
                                "properties": {
                                    "backgroundImage": "https://d2o906d8ln7ui1.cloudfront.net/images/response_builder/background-green.png",
                                    "foregroundImageLocation": "left",
                                    "foregroundImageSource": "",
                                    "headerTitle": "Práctica B.L.S",
                                    "headerSubtitle": "",
                                    "hintText": "Prueba a decir: \"Entendido\", \"Listo\"",
                                    "headerAttributionImage": "https://raw.githubusercontent.com/IbaGPE/Asistente-B.L.S/main/Alexa-Logo.png",
                                    "primaryText": "Administre una descarga.",
                                    "textAlignment": "start",
                                    "titleText": "Simulación"
                                }
                            }
                        }
                    }
                )
            .addDirective({
            "type": "Alexa.Presentation.APLA.RenderDocument",
            "token": "launch_a",
            "document": {
    "type": "APLA",
    "version": "0.91",
    "mainTemplate": {
        "parameters": [
            "payload"
        ],
        "item": {
            "type": "Sequencer",
            "description": "This sample plays a series of audio clips one after another.",
            "items": [
                {
                    "type": "Silence",
                    "duration": 3000
                },{
                    "type": "Speech",
                    "content": "<speak> Ahora reanuda la maniobra de R.C.P. De inmediato, hasta que lo indique el D.E.A. Para permitir la comprobación del ritmo. Continúa así hasta que lo sustituyan los profesionales de soporte vital avanzado o la víctima comience a moverse. Entendido?</speak>"
                }]}}}})
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
    
};

const NoDesfibrilableHandler = {
     canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'NoDesfibrilable';
    },
    handle(handlerInput) {
        var speakOutput;
        var speakOutput2 = 'Lo lamento, puedes decirlo de nuevo? Prueba a decir: "Entendido" o "El paciente despertó".';
        
        if(caso===3)
        {
           speakOutput = 'Me gustan las bromas, pero, este no es un buen momento para ellas. Ya llamaste al servicio de emergencias? solo llama a emergencias y deja que ellos se hagan cargo de la situación. Mantente a salvo lejos de la escena. Entendido?'; 
           speakOutput2 = `Lo lamento, puedes decirlo de nuevo? Prueba a decir: "Eso es todo" o "la práctica ha terminado" y a continuación "Alexa, cierra la Skill".`;
           return handlerInput.responseBuilder
            .addDirective(
                                    {
                        "type": "Alexa.Presentation.APL.RenderDocument",
                        "token": "documentToken",
                        "document": {
                            "src": "doc://alexa/apl/documents/Escenario1",
                            "type": "Link"
                        },
                        "datasources": {
                            "simpleTextTemplateData": {
                                "type": "object",
                                "properties": {
                                    "backgroundImage": "https://d2o906d8ln7ui1.cloudfront.net/images/response_builder/background-green.png",
                                    "foregroundImageLocation": "left",
                                    "foregroundImageSource": "",
                                    "headerTitle": "Práctica B.L.S",
                                    "headerSubtitle": "",
                                    "hintText": "Prueba a decir: \"Entendido\", \"Eso es todo\"",
                                    "headerAttributionImage": "https://raw.githubusercontent.com/IbaGPE/Asistente-B.L.S/main/Alexa-Logo.png",
                                    "primaryText": "La escena no es segura. Llama a emergencias y mantente a salvo.",
                                    "textAlignment": "start",
                                    "titleText": "Simulación"
                                }
                            }
                        }
                    }
                )
            .speak(speakOutput)
            .reprompt(speakOutput2)
            .getResponse();
        }
        
        if(paciente===1)
        {
            speakOutput = 'Entiendo, comprueba nuevamente pulso carotídeo por no mas de 10 segundos, en caso de no detectar pulso reanuda la maniobra de R.C.P. De inmediato, hasta que lo indique el D.E.A. Para permitir la comprobación del ritmo. Continúa así hasta que lo sustituyan los profesionales de soporte vital avanzado o la víctima comience a moverse. Entendido?';
            estado=75;
        }
        else
        {
            speakOutput = 'Entiendo, comprueba nuevamente pulso braquial por no mas de 10 segundos, en caso de no detectar pulso reanuda la maniobra de R.C.P. De inmediato, hasta que lo indique el D.E.A. Para permitir la comprobación del ritmo. Continúa así hasta que lo sustituyan los profesionales de soporte vital avanzado o la víctima comience a moverse. Entendido?';
            estado=75;
        }

        

        return handlerInput.responseBuilder
            .addDirective(
                                    {
                        "type": "Alexa.Presentation.APL.RenderDocument",
                        "token": "documentToken",
                        "document": {
                            "src": "doc://alexa/apl/documents/Escenario1",
                            "type": "Link"
                        },
                        "datasources": {
                            "simpleTextTemplateData": {
                                "type": "object",
                                "properties": {
                                    "backgroundImage": "https://d2o906d8ln7ui1.cloudfront.net/images/response_builder/background-green.png",
                                    "foregroundImageLocation": "left",
                                    "foregroundImageSource": "",
                                    "headerTitle": "Práctica B.L.S",
                                    "headerSubtitle": "",
                                    "hintText": "Prueba a decir: \"Entendido\", \"El paciente despertó\"",
                                    "headerAttributionImage": "https://raw.githubusercontent.com/IbaGPE/Asistente-B.L.S/main/Alexa-Logo.png",
                                    "primaryText": "compruebe pulso carotídeo. En caso de no detectar pulso reanude la maniobra de R.C.P.",
                                    "textAlignment": "start",
                                    "titleText": "Simulación"
                                }
                            }
                        }
                    }
                )
            .speak(speakOutput)
            .reprompt(speakOutput2)
            .getResponse();
    }
    
};

const FinDePracticaHandler = {
     canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'FinDePractica';
    },
    handle(handlerInput) {

        var final = new Date();
        var tiempo = final-inicio;
        var totalminutos = Math.trunc(tiempo/60000);
        var totalsegundos = (Math.trunc(tiempo/1000))-(60*(Math.trunc(tiempo/60000)));
        const speakOutput='Bien, la práctica ha finalizado. Tuvo una duración de: ';

        return handlerInput.responseBuilder
            .speak(speakOutput + totalminutos + ' minutos con ' + totalsegundos + ' segundos. Ahora solo tienes que decir: "Alexa, cierra la Skill".')
            .addDirective({
    "type": "Alexa.Presentation.APL.RenderDocument",
    "token": "documentToken",
    "document": {
        "src": "doc://alexa/apl/documents/Audio",
        "type": "Link"
    },
    "datasources": {
        "audioPlayerTemplateData": {
            "type": "object",
            "properties": {
                "audioControlType": "none",
                "audioSources": [
                    "https://github.com/IbaGPE/Asistente-B.L.S/blob/main/Elfen%20Lied%20-%20Lilium%20(Piano%20Version)%20%E3%82%A8%E3%83%AB%E3%83%95%E3%82%A7%E3%83%B3%E3%83%AA%E3%83%BC%E3%83%88.mp3?raw=true"
                ],
                "backgroundImage": "https://d2o906d8ln7ui1.cloudfront.net/images/response_builder/background-green.png",
                "coverImageSource": "",
                "headerTitle": "Práctica B.L.S",
                "logoUrl": "https://raw.githubusercontent.com/IbaGPE/Asistente-B.L.S/main/Alexa-Logo.png",
                "primaryText": "Simulación",
                "secondaryText": "La Práctica ha finalizado.",
                "sliderType": "indeterminate"
            }
        }
    }
})
            .addDirective({
    "type": "Alexa.Presentation.APL.RenderDocument",
    "token": "documentToken",
    "document": {
        "src": "doc://alexa/apl/documents/Final",
        "type": "Link"
    },
    "datasources": {
        "headlineTemplateData": {
            "type": "object",
            "objectId": "headlineSample",
            "properties": {
                "backgroundImage": {
                    "contentDescription": null,
                    "smallSourceUrl": null,
                    "largeSourceUrl": null,
                    "sources": [
                        {
                            "url": "https://d2o906d8ln7ui1.cloudfront.net/images/response_builder/background-green.png",
                            "size": "large"
                        }
                    ]
                },
                "textContent": {
                    "primaryText": {
                        "type": "PlainText",
                        "text": "La práctica finalizó"
                    }
                },
                "logoUrl": "https://raw.githubusercontent.com/IbaGPE/Asistente-B.L.S/main/Alexa-Logo.png",
                "hintText": "Prueba a decir: \"Alexa cierra la Skill\""
            }
        }
    }
})
            .getResponse();
    }
    
};

const QueEsCompresionHandler = {
     canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'QueEsCompresion';
    },
    handle(handlerInput) {
        
        
        const speakOutput = 'Las compresiones torácicas son las compresiones utilizadas para mantener con vida a alguien inconsciente, cuando su corazón no late. Estas compresiones sirven para hacer circular la sangre y permitir que el paciente se recupere. La mejor forma de realizar compresiones torácicas o R.C.P. Es dejar caer el peso del cuerpo sobre el del pecho de la persona afectada, es muy importante mantener los brazos extendidos durante todo el tiempo y dejar caer todo nuestro peso sobre estos. A continuación, debemos colocar una mano sobre la otra y entrelazar los dedos para hundirlas sobre el pecho entre unos 5 y 6 cm a una frecuencia de 100 a 120 compresiones por minuto. Después de cada compresión es importante realizar una descompresión, de forma que el corazón pueda llenarse de sangre de nuevo. No es recomendable disminuir la pausa más de 10 segundos entre compresiones ya que de lo contrario se perdería el ritmo cardíaco y podría afectar a la supervivencia del paciente. Se debe seguir una secuencia de compresiones constantes hasta que el paciente obtenga signos de vida o haya llegado la ayuda médica. Si las compresiones no son lo suficientemente profundas la sangre no llega al cerebro, lo mismo sucede si las compresiones no son los suficientemente rápidas y si se empuja muy rápidamente el corazón no tiene tiempo de volverse a llenar de sangre por lo tanto no se bombea suficiente sangre, así mismo si no se permite la descompresión torácica el corazón no tiene la posibilidad de volverse a llenar de sangre por lo tanto no se bombea ninguna sangre. Recuerda que el objetivo principal de las compresiones es mantener la sangre oxigenada circulando a través del corazón y cerebro para mantenerlo vivo. Entendido?';
        return handlerInput.responseBuilder
            .addDirective(
                {
                    "type": "Alexa.Presentation.APL.RenderDocument",
                    "token": "documentToken",
                    "document": {
                        "src": "doc://alexa/apl/documents/Compresiones",
                        "type": "Link"
                    },
                    "datasources": {
                        "videoPlayerTemplateData": {
                            "type": "object",
                            "properties": {
                                "backgroundImage": "https://d2o906d8ln7ui1.cloudfront.net/images/response_builder/background-green.png",
                                "displayFullscreen": false,
                                "headerTitle": "Compresiones Torácicas",
                                "headerSubtitle": "",
                                "logoUrl": "https://raw.githubusercontent.com/IbaGPE/Asistente-B.L.S/main/Alexa-Logo.png",
                                "videoControlType": "none",
                                "videoSources": [
                                    "https://github.com/IbaGPE/Asistente-B.L.S/blob/main/Que%20es%20Compresi%C3%B3n%20Tor%C3%A1cica.mp4?raw=true"
                                ],
                                "sliderType": "indeterminate"
                            }
                        }
                    }
                }
            )
           // .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
    
};



const QueEsPerfusionHandler = {
     canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'QueEsPerfusion';
    },
    handle(handlerInput) {
        const speakOutput = 'Es un concepto empleado en medicina para explicar el mecanismo por el cual el flujo de sangre permite el transporte de los requerimientos metabólicos regionales y sistémicos a todo el cuerpo. La principal función de la perfusión es el transporte de nutrientes a todas las células al traspasar desde el capilar sanguíneo hasta los tejidos. Dentro de los principales elementos que transportar la perfusión tenemos al oxígeno. La mala perfusión o estado de choque, se define como un síndrome fisiológico que refleja el intento del cuerpo por preservar sus funciones vitales, pese a que reciba una lesión física severa. Por lo cual en un estado de mala perfusión hay un aporte inadecuado de oxígeno, lo que impacta la integridad funcional y estructural de los tejidos. Los signos más frecuentes de una perfusión tisular inadecuada son los siguientes: palidez, piel fría, pulsos débiles, retrase del llenado capilar, oliguria y alteración del estado mental.';


        return handlerInput.responseBuilder
        .speak(speakOutput)
        .reprompt(speakOutput)
        .getResponse();
    }
    
};

const QueEsVentilacionHandler = {
     canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'QueEsVentilacion';
    },
    handle(handlerInput) {
        const speakOutput = 'La ventilación pulmonar es el proceso funcional por el que el gas es transportado desde el entorno del sujeto hasta los alveolos pulmonares y viceversa. Para dar ventilación asistida a un paciente, abra la boca, (vía aérea), extendiendo la cabeza del paciente y elevando su mentón, Con sus dedos cierre la nariz de la víctima y ponga la mascarilla o su boca sobre la boca del paciente. Realice dos ventilaciones (espire durante 1 segundo en cada una de ellas dentro de la boca del paciente). Habitualmente, al hacerlo, el tórax de la víctima se elevará. Al finalizar las ventilaciones deberá comenzar una nueva serie de 30 compresiones torácicas y 2 ventilaciones, continuando esta secuencia hasta que el paciente comience a moverse o respirar o hasta que lleguen los servicios de emergencia prehospitalarios.';
        

        return handlerInput.responseBuilder
            .addDirective({
    "type": "Alexa.Presentation.APL.RenderDocument",
    "token": "documentToken",
    "document": {
        "src": "doc://alexa/apl/documents/TextoImagen",
        "type": "Link"
    },
    "datasources": {
        "simpleTextTemplateData": {
            "type": "object",
            "properties": {
                "backgroundImage": "https://d2o906d8ln7ui1.cloudfront.net/images/response_builder/background-green.png",
                "foregroundImageLocation": "left",
                "foregroundImageSource": "https://raw.githubusercontent.com/IbaGPE/Asistente-B.L.S/main/Ventilaci%C3%B3n.jpeg",
                "headerTitle": "Práctica B.L.S",
                "headerSubtitle": "",
                "hintText": "Prueba a decir: \"Es segura\", \"No es segura\"",
                "headerAttributionImage": "https://raw.githubusercontent.com/IbaGPE/Asistente-B.L.S/main/Alexa-Logo.png",
                "primaryText": "Para dar ventilación asistida a un paciente, abra la boca, (vía aérea), extendiendo la cabeza del paciente y elevando su mentón. Con sus dedos cierre la nariz de la víctima y ponga la mascarilla o su boca sobre la boca del paciente. Realice dos ventilaciones. Habitualmente, al hacerlo, el tórax de la víctima se elevará. Al finalizar deberá comenzar una nueva serie.",
                "textAlignment": "start",
                "titleText": "Ventilación pulmonar."
            }
        }
    }
})
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
    
};

const QueEsEscenaSeguraHandler = {
     canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'QueEsEscenaSegura';
    },
    handle(handlerInput) {
        const speakOutput = 'Una escena segura es aquella que no amenaza la integridad del auxiliador. nunca se debe olvidar que antes de prestar auxilio a un paciente, hay que evitar convertirse en víctima. Se debe evitar la visión de túnel, que consiste en limitar el campo visual a un túnel donde se encuentra únicamente el paciente, sin evaluar el resto de la escena, esto compromete la seguridad del primer respondiente, ya que le impide identificar los riesgos potenciales para su persona. La evaluación de la escena se lleva a cabo con una vista panorámica total del lugar de abajo hacia arriba, de izquierda a derecha y de adelante a atrás. Se observa qué puede haber tirado, colgado, si hay líquidos con los que se pueda resbalar, cables, vidrios, animales, etc. Oír el paso de vehículos, voces de alarma, detonaciones, etc. OLER si hay gas, gasolina, fertilizantes, y demás sustancias potencialmente nocivas. En general aplicar todos los sentidos en búsqueda de peligros potenciales para el rescatador. ¿QUÉ PASÓ?, ¿CÓMO PASÓ?, ¿QUÉ PUEDE PASAR? ';
        

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
    
};

const QueEsEscenaInseguraHandler = {
     canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'QueEsEscenaInsegura';
    },
    handle(handlerInput) {
        const speakOutput = 'Una escena no segura es aquella que amenaza la integridad del auxiliador. nunca se debe olvidar que antes de prestar auxilio a un paciente, hay que evitar convertirse en víctima. Se debe evitar la visión de túnel, que consiste en limitar el campo visual a un túnel donde se encuentra únicamente el paciente, sin evaluar el resto de la escena, compromete la seguridad del primer respondiente, ya que le impide identificar los riesgos potenciales para su persona. La evaluación de la escena se lleva a cabo con una vista panorámica total del lugar de abajo hacia arriba, de izquierda a derecha y de adelante a atrás. Se observa qué puede haber tirado, colgado, si hay líquidos con los que se pueda resbalar, cables, vidrios, animales, etc. Oír el paso de vehículos, voces de alarma, detonaciones, etc. OLER si hay gas, gasolina, fertilizantes, y demás sustancias potencialmente nocivas. En general aplicar todos los sentidos en búsqueda de peligros potenciales para el rescatador. ¿QUÉ PASÓ?, ¿CÓMO PASÓ?, ¿QUÉ PUEDE PASAR? ';
        

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
    
};

const QueEsDeaHandler = {
     canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'QueEsDEA';
    },
    handle(handlerInput) {
        const speakOutput = 'El D.E.A. Es un tipo de desfibrilador computarizado que analiza automáticamente el ritmo cardíaco de una persona que está sufriendo un paro. Cuando sea necesario, libera una descarga eléctrica al corazón para restablecer su ritmo normal. Para usarlo enciendé el D.E.A. Y sigue las instrucciones de voz. Algunos dispositivos se encienden automáticamente cuando el usuario abre la tapa. Coloca las dos almohadillas adhesivas con electrodos en el pecho del paciente que sufre el paro cardíaco. Los electrodos envían información acerca del ritmo cardíaco del paciente a un procesador ubicado en el D.E.A., el cual entonces analiza el ritmo para determinar si es necesario liberar una descarga eléctrica. Usted solo debe seguir las instrucciones de voz. El D.E.A. analizará y determinará si el ritmo cardíaco es normal o si necesita una descarga, en este caso por ejemplo, el corazón esta en fibrilación ventricular, el ritmo más común cuando alguien experimenta un paro cardíaco repentino. El corazón no está palpitando efectivamente, tiene actividad eléctrica pero está descoordinado, por lo que no esta bombeando efectivamente la sangre. Debido a que este ritmo es letal debe ser detenido. Cuando el D.E.A. Detecta un ritmo desfibrilable instruirá a administrar una descarga, en ese momento nadie debe de estar tocando al paciente. El D.E.A. Enviará una corriente eléctrica a través del corazón que regresará al D.E.A. cerrando el circuito. El objetivo de dicha descarga es detener el corazón completamente del ritmo descoordinado por un periodo de tiempo corto, para que el corazón se reajuste, esto puede tardar hasta 2 minutos, durante este tiempo se debe aplicar compresiones para bombear la sangre de forma manual hasta que el D.E.A. Indique que se deben detener las compresiones, entonces el D.E.A. Evaluará nuevamente el ritmo para determinar si es necesaria otra descarga o no. Entendido?';
        

        return handlerInput.responseBuilder
            .addDirective(
                {
                    "type": "Alexa.Presentation.APL.RenderDocument",
                    "token": "documentToken",
                    "document": {
                        "src": "doc://alexa/apl/documents/Compresiones",
                        "type": "Link"
                    },
                    "datasources": {
                        "videoPlayerTemplateData": {
                            "type": "object",
                            "properties": {
                                "backgroundImage": "https://d2o906d8ln7ui1.cloudfront.net/images/response_builder/background-green.png",
                                "displayFullscreen": false,
                                "headerTitle": "D.E.A",
                                "headerSubtitle": "",
                                "logoUrl": "https://raw.githubusercontent.com/IbaGPE/Asistente-B.L.S/main/Alexa-Logo.png",
                                "videoControlType": "none",
                                "videoSources": [
                                    "https://github.com/IbaGPE/Asistente-B.L.S/blob/main/Que%20es%20D.E.A.mp4?raw=true"
                                ],
                                "sliderType": "indeterminate"
                            }
                        }
                    }
                }
            )
           // .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
    
};

const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Con esta skill puedes prácticar el procedimiento de B.L.S por simulación.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speakOutput = 'Adios!';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const FallbackIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.FallbackIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Lo siento, no se sobre eso. Por favor intenta de nuevo.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        console.log(`~~~~ Session ended: ${JSON.stringify(handlerInput.requestEnvelope)}`);
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse(); // notice we send an empty response
    }
};

const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
        const speakOutput = `Lo lamento, no puedo responder a ${intentName}`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        const speakOutput = 'Lo siento, tengo problemas haciendo lo que dijiste. Creo que mi programador no lo ha hecho tan bien como se esperaba. Por favor intenta de nuevo.';
        console.log(`~~~~ Error handled: ${JSON.stringify(error)}`);

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const LoadDataPatientInterceptor = {
    async process(handlerInput) {
        const attributesManager = handlerInput.attributesManager;
        const sessionAttributes = await attributesManager.getPersistentAttributes() || {};
        
        const Memoria_1 = sessionAttributes.hasOwnProperty('Memoria_uno') ? sessionAttributes.Memoria_1 : 0;
        const Memoria_2 = sessionAttributes.hasOwnProperty('Memoria_dos') ? sessionAttributes.Memoria_2 : 0;
        const Memoria_3 = sessionAttributes.hasOwnProperty('Memoria_tres') ? sessionAttributes.Memoria_3 : 0;
        const Memoria_4 = sessionAttributes.hasOwnProperty('Memoria_cuatro') ? sessionAttributes.Memoria_4 : 0;
        const Memoria_5 = sessionAttributes.hasOwnProperty('Memoria_cinco') ? sessionAttributes.Memoria_5 : 0;
        const Memoria_6 = sessionAttributes.hasOwnProperty('Memoria_seis') ? sessionAttributes.Memoria_6 : 0;
        
        if (Memoria_1 && Memoria_2 && Memoria_3  && Memoria_4 && Memoria_5 && Memoria_6) {
            attributesManager.setSessionAttributes(sessionAttributes);
        }
    }
}


/**
 * This handler acts as the entry point for your skill, routing all request and response
 * payloads to the handlers above. Make sure any new handlers or interceptors you've
 * defined are included below. The order matters - they're processed top to bottom 
 * */
 
exports.handler = Alexa.SkillBuilders.custom()
    .withPersistenceAdapter(
        new persistenceAdapter.S3PersistenceAdapter({bucketName:process.env.S3_PERSISTENCE_BUCKET})
    )
    .addRequestHandlers(
        
        LaunchRequestHandler,
        EscenaNoSeguraHandler,
        EscenaSeguraHandler,
        RespondeHandler,
        NoRespondeHandler,
        SiPulsoHandler,
        NoPulsoHandler,
        SiRespiraHandler,
        NoRespiraHandler,
        MalaPerfusionHandler,
        AsistenciaContraccionesHandler,
        AsistenciaVentilacionesHandler,
        DeaHandler,
        SiDesfibrilableHandler,
        NoDesfibrilableHandler,
        FinDePracticaHandler,
        FinDePracticaEscenaNoSeguraHandler,
        QueEsCompresionHandler,
        QueEsVentilacionHandler,
        QueEsEscenaSeguraHandler,
        QueEsEscenaInseguraHandler,
        QueEsDeaHandler,
        QueEsPerfusionHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        FallbackIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler)
    .addRequestInterceptors(
        LoadDataPatientInterceptor
    )
    .addErrorHandlers(
        ErrorHandler)
    .lambda();