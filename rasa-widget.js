window.WebChat.default({
    initPayload: "/saludo",
    customData: { language: "es" },
    socketUrl: "https://cc44-181-1-53-69.ngrok-free.app",  // reemplazar por el real
    socketPath: "/socket.io/",
    title: "Asistente Virtual",
    subtitle: "¿En qué puedo ayudarte?",
    inputTextFieldHint: "Escribe tu consulta...",
    showFullScreenButton: true,
  }, null);
  