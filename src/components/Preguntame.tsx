import "./../assets/css/Preguntame.css";
import contexto_proyecto_path from "./../assets/data/contexto_proyecto.txt";

import { useState, useRef, useEffect } from "react";

interface ChatMessage {
    role: string;
    parts: { text: string }[];
}

export const Preguntame = () => {

    const chat_body = useRef<HTMLDivElement>(null);

    const [contexto_proyecto, setContextoProyecto] = useState<string>("");
    const [chat_open, setChatOpen] = useState(false);
    const [chat_input, setChatInput] = useState<string>("");
    const [mensajes, setMensajes] = useState<ChatMessage[]>([
        {
            role: "model",
            parts: [{
                text: "Hola, puedes preguntarme lo que quieras sobre el proyecto Pintura Fotoluminicente"
            }]
        }
    ]);

    async function fetch_chat(mensajes: ChatMessage[]) {
        const API_key = "AIzaSyBHvdnUc6b9iKImFGmYZK8_27_M7yAfjho";

            const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_key}`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        system_instruction: {
                            parts: {
                                text: `
                                    eres un chatbot que responde preguntas sobre el proyecto de pintura fotoluminicente, da respuestas cortas, concisas, claras, en español, en texto plano

                                    el contexto del proyecto de pintura fotoluminicente en texto plano es: 
                                    ${contexto_proyecto}
                                `
                            }
                        },
                        contents: mensajes
                    })
                }
            );

            const data = await res.json();

            setMensajes([
                ...mensajes,
                {
                    role: "model",
                    parts: data.candidates[0].content.parts
                }
            ]);

    }

    function scrollToBottom() {
        chat_body.current?.scrollTo({
            top: chat_body.current.scrollHeight,
            behavior: "smooth"
        });
    }

    function send_message() {

        if (chat_input.trim() === "") return;

        const nuevos_mensajes = [
            ...mensajes,
            { role: "user", parts: [{ text: chat_input }] }
        ]

        setMensajes(nuevos_mensajes);
        setChatInput("");

        fetch_chat(nuevos_mensajes);
    }

    useEffect(scrollToBottom, [mensajes]);

    useEffect(() => {
        fetch(contexto_proyecto_path)
            .then((res) => res.text())
            .then((data) => setContextoProyecto(data));
    }, []);

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

                <div className="chat-window-body" ref={chat_body}>
                    <div className="row">

                        {mensajes.map((mensaje, i) => (
                            <div key={i} className={"row pe-0 justify-content-" + ( mensaje.role === "user" ? "end" : "start" )}>
                                <div className="col-11 pe-0">
                                    <div className={`chat-message ${mensaje.role} text-${mensaje.role === "user" ? "end" : "start"}`}>

                                        {mensaje.parts[0].text}

                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>

                <div className="chat-input-container">
                    <textarea
                     rows={1}
                     className="chat-input"
                     placeholder="Escribeme tu pregunta ..."
                    value={chat_input}
                    onChange={(e) => setChatInput(e.target.value)}
                    />
                    <button className="send-button" onClick={send_message}><i className="bi bi-send"></i></button>
                </div>
            </div>
        </>
    )
}