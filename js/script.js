document.addEventListener('DOMContentLoaded', function () {
    pagina = window.location.pathname

    // Emergencia - Selecionar tipo de ajuda.
    if (pagina == '/Equipe6_2B_CalmU/emergencia__menu.html' || pagina == '/emergencia__menu.html') {
        bot_autoaj = document.querySelector('.autoaj');
        bot_ajudar = document.querySelector('.ajudar');
        tipo_de_ajuda = document.querySelector('.tipo_de_ajuda');
        guias = document.querySelectorAll('.guia');

        bot_autoaj.addEventListener('click', function () {
            tipo_de_ajuda.innerHTML = 'Auto Ajuda';
            guias.forEach(function (guia) {
                guia.style.backgroundColor = '#A6D49F';
                guia.href = 'emergencia_video_autoaj.html';
            });
        });

        bot_ajudar.addEventListener('click', function () {
            tipo_de_ajuda.innerHTML = 'Ajudar Alguém';
            guias.forEach(function (guia) {
                guia.style.backgroundColor = '#56adc6';
                guia.href = 'emergencia_video.html';
            });
        });
    }
    
    // Exercicios - Meta de exercicios.
    if (pagina == '/Equipe6_2B_CalmU/exercicios__menu.html' || pagina == '/exercicios__menu.html') {
        num_med = document.querySelector('#num_med');
        mais_med = document.querySelector('#mais_med');
        menos_med = document.querySelector('#menos_med');
        num_al = document.querySelector('#num_al');
        mais_al = document.querySelector('#mais_al');
        menos_al = document.querySelector('#menos_al');

        num_med.innerHTML = sessionStorage.getItem('num_med') || 5;
        num_al.innerHTML = sessionStorage.getItem('num_al') || 5;

        mais_med.addEventListener('click', function () {
            num_med.innerHTML = parseInt(num_med.innerHTML) + 1;
            sessionStorage.setItem('num_med', num_med.innerHTML);
        });
        menos_med.addEventListener('click', function () {
            var valorAtual = parseInt(num_med.innerHTML);
            if (valorAtual > 0) {
                num_med.innerHTML = valorAtual - 1;
                sessionStorage.setItem('num_med', num_med.innerHTML);
            }
        });

        mais_al.addEventListener('click', function () {
            num_al.innerHTML = parseInt(num_al.innerHTML) + 1;
            sessionStorage.setItem('num_al', num_al.innerHTML);
        });
        menos_al.addEventListener('click', function () {
            var valorAtual = parseInt(num_al.innerHTML);
            if (valorAtual > 0) {
                num_al.innerHTML = valorAtual - 1;
                sessionStorage.setItem('num_al', num_al.innerHTML);
            }
        });
    }
    
    // Botao de voltar funcionando certo
    botao_voltar = document.querySelector('.img_seta')
    botao_voltar.addEventListener('click', function(){
        window.history.back()
    })

    console.log(pagina)
});
