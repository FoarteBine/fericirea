function controlledChaos() {
    // Добавляем хаотичное дрожание элементов
    setInterval(() => {
        document.querySelectorAll('*').forEach(el => {
            el.style.position = 'relative';
            el.style.left = (Math.random() * 20 - 10) + 'px'; // Движение влево-вправо
            el.style.top = (Math.random() * 20 - 10) + 'px';  // Движение вверх-вниз
        });
    }, 100);

    // Изменение текста случайными символами
    setInterval(() => {
        document.querySelectorAll('*').forEach(el => {
            if (el.childNodes.length === 1 && el.childNodes[0].nodeType === 3) {
                el.textContent = el.textContent.split('').map(c => 
                    Math.random() > 0.5 ? String.fromCharCode(33 + Math.random() * 94) : c
                ).join('');
            }
        });
    }, 500);

    // Быстро мигающий фон
    setInterval(() => {
        document.body.style.backgroundColor = `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`;
    }, 300);

    // Переворачивание картинок
    setInterval(() => {
        document.querySelectorAll('img').forEach(img => {
            img.style.transform = `rotate(${Math.random() * 30 - 15}deg)`;
        });
    }, 500);

    // Кнопки убегают при наведении
    document.querySelectorAll('button, a, input, textarea').forEach(el => {
        el.addEventListener('mouseover', () => {
            el.style.position = 'absolute';
            el.style.left = Math.random() * window.innerWidth * 0.8 + 'px';
            el.style.top = Math.random() * window.innerHeight * 0.8 + 'px';
        });
    });
}

controlledChaos();
