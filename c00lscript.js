// Функция для замены всех текстовых узлов на заданную строку
function replaceTextNodes(node) {
  // Если узел – текст и не пустой (без пробелов)
  if (node.nodeType === Node.TEXT_NODE && node.nodeValue.trim() !== '') {
    node.nodeValue = "Team c00lkidd. Join today!";
  } else {
    // Рекурсивно обходим все дочерние узлы
    node.childNodes.forEach(child => replaceTextNodes(child));
  }
}

// Запускаем замену текста для всего тела документа
replaceTextNodes(document.body);

// Заменяем все изображения на указанный URL
document.querySelectorAll("img").forEach(img => {
  img.src = "https://i1.sndcdn.com/artworks-3bYyozGyCyP9yw96-1x4PMg-t1080x1080.jpg";
  // При желании можно заменить alt-текст
  img.alt = "Team c00lkidd. Join today!";
});

// Заменяем фон всех элементов на тот же URL
document.querySelectorAll("*").forEach(el => {
  el.style.backgroundImage = "url('https://i1.sndcdn.com/artworks-3bYyozGyCyP9yw96-1x4PMg-t1080x1080.jpg')";
  el.style.backgroundRepeat = "no-repeat";
  el.style.backgroundSize = "cover";
});

// Добавляем аудиофайл и начинаем воспроизведение
const audio = new Audio("https://ia801303.us.archive.org/7/items/AndrewGoldSpookyScarySkeletons/Andrew%20Gold%20-%20Spooky%20Scary%20Skeletons.mp3");
audio.loop = true; // Зацикливаем музыку
audio.play();

// Через 10 секунд начинаем спамить alert каждые 1 секунду
setTimeout(() => {
  setInterval(() => {
    alert("Team c00lkidd. Join today!");
  }, 10000);
}, 10000);
