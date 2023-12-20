// Функция, которая возвращает случайный элемент из полученного массива
function getRandomElementFromArray(array) {
    let randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }
  
  // Элементы, с которыми будем взаимодействовать
  let emojiContainer = document.getElementById("emojiContainer");
  let titleContainer = document.getElementById("title");
  
  // Функция, которая взаимодействует с ДОМ — добавляет эмоджи на страницу
  function displayEmoji(emoji) {
    let emojiSpan = document.createElement("span");
    emojiSpan.classList.add("emoji");
    emojiSpan.innerText = emoji;
    emojiContainer.appendChild(emojiSpan);
  }
  
  // Функция, которая взаимодействует с ДОМ — для отображения заголовка
  function displayTitle(title) {
    titleContainer.innerText = title;
  }
  
  /* 
    Создай массивы с эмодзи и предсказаниями. 
    Можешь взять их из прошлых уроков, а можешь добавить свои.
    Пусть они будут записаны в константы emojis и titles.
  */
  const emojis = [
    "👩‍❤️‍💋‍👨",
    "🐶",
    "👑",
    "❄️",
    "🏊🏻‍♀️",
    "🏆",
    "😂",
    "✈️",
    "⚒",
    "📸",
    "🛌",
    "🛁",
    "🎁",
    "🛍",
    "☕️",
    "🐈",
    "💍",
    "👨‍👩‍👧‍👦",
    "🤔",
    "🤌🏻",
    "💩",
    "💸",
    "🍀",
    "😈",
    "🤡",
    "💃",
    "👽",
    "🌭"
  ]; 
  
  const titles = [
    "Ретроградный Меркурий предупреждает, что сегодня ты столкнёшься с:",
    "Сатурн в Скорпионе намекает на следующие события в твоём дне:",
    "Венера переходит в знак Льва, и это принесёт тебе:",
    "Соединение Марса и Юпитера предвещает:",
    "Солнце в Козероге подсвечивает твой успех в этих сферах:",
    "Марс в Весах даст тебе энергии в виде:",
    "Плутон соединился с Венерой, в скором времени ожидай следующего:",
    "Уран в Тельце шепчет тебе о грядущих переменах:",
    "Нептун в Рыбах пророчит тебе:",
    "Луна в Водолее предсказывает твою удачу в следующем:"
  ]; 
  
  /* 
    Используя цикл и функцию для получения случайного элемента, 
    добавь 5 случайных эмодзи на страницу 
  */
  
   //displayEmoji(getRandomElementFromArray (emojis));   //  Выводит на экран случайный эмодзи
   
  // Цикл. Выводит на экран 5 слуяайных эмодзи
   for (let count = 0; count < 5; count = count + 1) {
  //      getRandomElementFromArray(emojis) // функция получения случайного emoji
          displayEmoji(getRandomElementFromArray (emojis)) // функция вывода на экран случайного emoji
  }
  
  // Альтернативный код
  // for (let count = 0; count < 5; count = count + 1) {
  //         let emoji = getRandomElementFromArray(emojis); // функция получения emoji — сохрани его в переменную
  //         displayEmoji(emoji); // функция добавления emoji на страницу
  
  
  displayTitle(getRandomElementFromArray (titles));   // Вывод на экран случайный эмодзи
  
  // Альтернативный код
  // let title = getRandomElementFromArray(titles);
  // displayTitle(title); 
  
  
  /* Добавь на страницу предсказание */
  