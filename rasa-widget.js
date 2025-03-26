window.onload = () => {
    WebChat.default({
      initPayload: "/saludo",
      customData: { language: "es" },
      socketUrl: "https://65a4-181-1-53-69.ngrok-free.app",  // cambia por tu URL activa
      socketPath: "/socket.io/",
      title: "Asistente Virtual",
      subtitle: "¿En qué puedo ayudarte?",
      inputTextFieldHint: "Escribe tu consulta...",
      showFullScreenButton: true,
    }, null);
  };
  