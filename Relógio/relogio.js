 let timeZone = "America/Sao_Paulo"; // Fuso horário padrão

    function atualizarRelogio() {
      const agora = new Date();

      // Hora formatada de acordo com o fuso
      let horaFormatada = agora.toLocaleTimeString("pt-BR", {
        timeZone: timeZone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
      });

      document.getElementById("hora").textContent = horaFormatada;

      // Data formatada de acordo com o fuso
      let dataFormatada = agora.toLocaleDateString("pt-BR", {
        timeZone: timeZone,
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      });

      document.getElementById("data").textContent = dataFormatada;
    }

    // Atualiza relógio a cada segundo
    setInterval(atualizarRelogio, 1000);
    atualizarRelogio();

    // Troca fuso horário quando usuário seleciona outro local
    document.getElementById("cidade").addEventListener("change", (e) => {
      timeZone = e.target.value;
      atualizarRelogio();
    });