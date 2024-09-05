import "./../assets/css/Preguntame.css";

import { useState } from "react";

interface ChatMessage {
    role: string;
    parts: { text: string }[];
}

export const Preguntame = () => {

    const [chat_open, setChatOpen] = useState(false);
    const [mensajes, setMensajes] = useState<ChatMessage[]>([
        {
            role: "user",
            parts: [{
                text: "Hola"
            }]
        },
        {
            role: "bot",
            parts: [{
                text: "Hola, puedes preguntarme lo que quieras sobre el proyecto Pintura Fotoluminicente"
            }]
        }
    ]);

    // async function fetch_chat(mensajes: ChatMessage[]) {
    //     const API_key = "AIzaSyBHvdnUc6b9iKImFGmYZK8_27_M7yAfjho";

    //         const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_key}`,
    //             {
    //                 method: "POST",
    //                 headers: {
    //                     "Content-Type": "application/json"
    //                 },
    //                 body: JSON.stringify({
    //                     contents: mensajes
    //                 })
    //             }
    //         );

    //         return res.json();

    // }

    // async function open_chat() {
    //     setChatOpen(true);

    //     // si solo hay un mensaje, enviar primer mensaje
    //     if (mensajes.length === 1) {
    //         const res_chat = await fetch_chat(mensajes);

    //         console.log(res_chat);

    //         setMensajes([
    //             ...mensajes,
    //             { role: "bot", parts: res_chat.candidates[0].content.parts }
    //         ]);
    //     }
    // }

    return (
        <>
            <button
                style={{ display: chat_open ? 'none' : 'block' }}
                className="chat-button"
                onClick={() => setChatOpen(true)}
            >
                💬
            </button>

            <div className="chat-window" style={{ display: chat_open ? 'flex' : 'none' }}>
                <div className="chat-window-header">
                    <div className="row">
                        <div className="col-10 text-start">
                            <h6>¿ Tienes alguna pregunta ?</h6>
                        </div>
                        <div className="col-2 text-end">
                            <button className="btn-close" onClick={() => setChatOpen(false)}></button>
                        </div>
                    </div>
                </div>

                <div className="chat-window-body" id="chatBody">
                    {/* <!-- Contenido del chat --> */}
                    <p>Bienvenido al chat. ¿En qué podemos ayudarte?</p>
                    <p>Bienvenido al chat. ¿En qué podemos ayudarte?</p>
                    <p>Bienvenido al chat. ¿En qué podemos ayudarte?</p>
                    <p>Bienvenido al chat. ¿En qué podemos ayudarte?</p>
                    <p>Bienvenido al chat. ¿En qué podemos ayudarte?</p>
                    <p>Bienvenido al chat. ¿En qué podemos ayudarte?</p>
                    <p>Bienvenido al chat. ¿En qué podemos ayudarte?</p>
                    <p>Bienvenido al chat. ¿En qué podemos ayudarte?</p>
                    <p>Bienvenido al chat. ¿En qué podemos ayudarte?</p>
                    <p>Bienvenido al chat. ¿En qué podemos ayudarte?</p>
                    <p>Bienvenido al chat. ¿En qué podemos ayudarte?</p>
                    <p>Bienvenido al chat. ¿En qué podemos ayudarte?</p>
                    <p>Bienvenido al chat. ¿En qué podemos ayudarte?</p>
                    <p>Bienvenido al chat. ¿En qué podemos ayudarte?</p>
                    <p>Bienvenido al chat. ¿En qué podemos ayudarte?</p>
                    <p>Bienvenido al chat. ¿En qué podemos ayudarte?</p>
                    <p>Bienvenido al chat. ¿En qué podemos ayudarte?</p>
                    <p>Bienvenido al chat. ¿En qué podemos ayudarte?</p>
                    <p>Bienvenido al chat. ¿En qué podemos ayudarte?</p>
                    <p>Bienvenido al chat. ¿En qué podemos ayudarte?</p>
                    <p>Bienvenido al chat. ¿En qué podemos ayudarte?</p>
                    <p>Bienvenido al chat. ¿En qué podemos ayudarte?</p>
                    <p>Bienvenido al chat. ¿En qué podemos ayudarte?</p>
                    <p>Bienvenido al chat. ¿En qué podemos ayudarte?</p>
                    <p>Bienvenido al chat. ¿En qué podemos ayudarte?</p>
                    <p>Bienvenido al chat. ¿En qué podemos ayudarte?</p>
                    <p>Bienvenido al chat. ¿En qué podemos ayudarte?</p>
                    <p>Bienvenido al chat. ¿En qué podemos ayudarte?</p>
                    <p>Bienvenido al chat. ¿En qué podemos ayudarte?</p>
                    <p>Bienvenido al chat. ¿En qué podemos ayudarte?</p>
                    <p>Bienvenido al chat. ¿En qué podemos ayudarte?</p>
                </div>

                <div className="chat-input-container">
                    <textarea rows={1} className="chat-input" placeholder="Escribeme tu pregunta ..." />
                    <button className="send-button"><i className="bi bi-send"></i></button>
                </div>
            </div>
        </>
    )
}