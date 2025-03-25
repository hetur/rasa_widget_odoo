(function () {
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/rasa-webchat@1.0.1/lib/index.js';
    script.async = true;
    script.onload = function () {
      window.WebChat.default({
        initPayload: '/saludo',
        customData: { language: 'es' },
        socketUrl: 'https://98f4-181-1-53-69.ngrok-free.app',
        socketPath: '/socket.io/',
        title: 'Asistente Virtual',
        subtitle: '¿En qué puedo ayudarte?',
        inputTextFieldHint: 'Escribe tu consulta...',
        showFullScreenButton: true,
      }, null);
    };
    document.head.appendChild(script);
  })();
  