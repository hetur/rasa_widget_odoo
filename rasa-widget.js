  (function () {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/rasa-webchat@1.0.1/lib/index.js";
    script.async = true;
    script.onload = () => {
      WebChat.default({
        initPayload: "/saludo",
        customData: { language: "es" },
        socketUrl: "https://cc44-181-1-53-69.ngrok-free.app", // tu ngrok activo
        socketPath: "/socket.io/",
        title: "Asistente Virtual",
        subtitle: "¿En qué puedo ayudarte?",
        inputTextFieldHint: "Escribe tu consulta...",
        showFullScreenButton: true,
      }, null);
    };
    document.head.appendChild(script);
  })();
  