/* ==========================================================
   LANGUAGES.  Each row = [English text, Ukrainian, Russian].
   TO ADD A LANGUAGE (e.g. German):
     1) add its code to LC below:      const LC=['uk','ru','de'];
     2) add its name to LN:            de:'Deutsch'
     3) add a 4th text to every row:   ['Diary','Щоденник','Дневник','Tagebuch']
   Missing texts simply stay in English.
   Test texts live in tests.js (add a block like  de:{title:..., qs:[...]}  ).
   ========================================================== */
const LC=['uk','ru'],LN={en:'English',uk:'Українська',ru:'Русский'};
const W=[
['White & purple','Біло-фіолетова','Бело-фиолетовая'],['Black & silver','Чорно-срібна','Чёрно-серебристая'],
['🔔 Time for today’s check-in. How are you feeling?','🔔 Час для щоденної відмітки. Як ви почуваєтесь?','🔔 Время для ежедневной отметки. Как вы себя чувствуете?'],
['Mood (on your animal)','Настрій (на персонажі)','Настроение (на персонаже)'],['Anxiety today:','Тривога сьогодні:','Тревога сегодня:'],
['Alcohol','Алкоголь','Алкоголь'],['No','Ні','Нет'],['Yes','Так','Да'],['Headache','Головний біль','Головная боль'],['None','Немає','Нет'],
['Mild','Легкий','Лёгкая'],['Moderate','Помірний','Умеренная'],['Severe','Сильний','Сильная'],
['Smoked today','Курив(ла) сьогодні','Курил(а) сегодня'],['Nothing','Нічого','Ничего'],['Cigarettes','Сигарети','Сигареты'],['Vape','Вейп','Вейп'],['Hookah','Кальян','Кальян'],['Cannabis','Канабіс','Каннабис'],['Other','Інше','Другое'],
['How much? (e.g. 2 glasses)','Скільки? (напр. 2 келихи)','Сколько? (напр. 2 бокала)'],['How much? (e.g. 5 cigarettes)','Скільки? (напр. 5 сигарет)','Сколько? (напр. 5 сигарет)'],
['Today','Сьогодні','Сегодня'],['Character','Персонаж','Персонаж'],['Diary','Щоденник','Дневник'],['Charts','Графіки','Графики'],['Tests','Тести','Тесты'],['Settings','Налаштування','Настройки'],
['🔒 Diary is locked','🔒 Щоденник заблоковано','🔒 Дневник заблокирован'],['Password','Пароль','Пароль'],['Unlock','Розблокувати','Разблокировать'],['Wrong password.','Невірний пароль.','Неверный пароль.'],
['Private diary','Особистий щоденник','Личный дневник'],['How are you feeling today? What happened?','Як ви почуваєтесь сьогодні? Що сталося?','Как вы себя чувствуете сегодня? Что произошло?'],
['Save entry','Зберегти запис','Сохранить запись'],['🔒 Lock now','🔒 Заблокувати','🔒 Заблокировать'],['Remove password','Прибрати пароль','Убрать пароль'],
['Optional password','Пароль (необов’язково)','Пароль (необязательно)'],['Set password','Встановити пароль','Установить пароль'],
['This diary is encrypted on your device.','Щоденник зашифровано на вашому пристрої.','Дневник зашифрован на вашем устройстве.'],
['Without a password, entries are stored unencrypted.','Без пароля записи зберігаються без шифрування.','Без пароля записи хранятся без шифрования.'],
['No entries yet.','Записів ще немає.','Записей пока нет.'],
['Mood (last 14 days)','Настрій (14 днів)','Настроение (14 дней)'],['Anxiety (0–10)','Тривога (0–10)','Тревога (0–10)'],['Daily check-ins','Щоденні відмітки','Ежедневные отметки'],
['No check-ins yet.','Відміток ще немає.','Отметок пока нет.'],['Test results','Результати тестів','Результаты тестов'],['No tests taken yet.','Тестів ще не було.','Тестов ещё не было.'],
['Psychological tests','Психологічні тести','Психологические тесты'],['No tests yet. Add them in tests.js.','Тестів ще немає.','Тестов пока нет.'],['Start','Почати','Начать'],
['Please answer every question.','Дайте відповідь на всі питання.','Ответьте на все вопросы.'],['See result','Показати результат','Показать результат'],['Back','Назад','Назад'],
['This is a self-reflection tool, not a diagnosis.','Це інструмент самоспостереження, а не діагноз.','Это инструмент самонаблюдения, а не диагноз.'],
['anxiety','тривога','тревога'],['headache','головний біль','головная боль'],['yes','так','да'],['no','ні','нет'],['Smoked','Курив(ла)','Курил(а)'],['Score','Результат','Результат'],
['Daily reminder','Щоденне нагадування','Ежедневное напоминание'],['Remind me','Нагадувати','Напоминать'],['Allow notifications','Дозволити сповіщення','Разрешить уведомления'],
['Reminders appear as a banner and (if allowed) a notification while the app is open or installed on your device.','Нагадування з’являються як банер і (за дозволу) сповіщення, поки застосунок відкритий або встановлений на пристрої.','Напоминания появляются как баннер и (с разрешения) уведомление, пока приложение открыто или установлено на устройстве.'],
['About your data','Про ваші дані','О ваших данных'],
['Everything is stored only on this device, in this browser. Use a password for the diary: entries are then encrypted (AES-256). If the password is forgotten, the diary cannot be recovered.','Усе зберігається лише на цьому пристрої, в цьому браузері. Встановіть пароль для щоденника: записи будуть зашифровані (AES-256). Якщо пароль забути, щоденник не відновити.','Всё хранится только на этом устройстве, в этом браузере. Установите пароль для дневника: записи будут зашифрованы (AES-256). Если пароль забыть, дневник не восстановить.'],
['Very low','Дуже погано','Очень плохо'],['Low','Погано','Плохо'],['Okay','Нормально','Нормально'],['Good','Добре','Хорошо'],['Great','Чудово','Отлично'],
['Your companion','Ваш персонаж','Ваш персонаж'],['Change the mood with the faces at the top.','Змініть настрій смайлами угорі.','Измените настроение смайлами вверху.'],
['Edit character','Редагувати персонажа','Редактировать персонажа'],
['Welcome! Create your character first. It will be your daily companion.','Ласкаво просимо! Спершу створіть персонажа — він буде вашим щоденним помічником.','Добро пожаловать! Сначала создайте персонажа — он будет вашим ежедневным помощником.'],
['Name','Ім’я','Имя'],['Age','Вік','Возраст'],['Gender','Стать','Пол'],['Female','Жіноча','Женский'],['Male','Чоловіча','Мужской'],['Non-binary','Небінарна','Небинарный'],
['Zodiac sign','Знак зодіаку','Знак зодиака'],['Not chosen','Не обрано','Не выбран'],['Type','Тип','Тип'],['Animal','Тварина','Животное'],['Person','Людина','Человек'],
['Hairstyle','Зачіска','Причёска'],['Skin','Шкіра','Кожа'],['Eyes','Очі','Глаза'],['Lips','Губи','Губы'],['Eyebrows','Брови','Брови'],['Hair','Волосся','Волосы'],
['Fur colour','Колір шерсті','Цвет шерсти'],['Clothes colour','Колір одягу','Цвет одежды'],['Hat','Капелюх','Головной убор'],['Glasses','Окуляри','Очки'],['Neck / body','Шия / тіло','Шея / тело'],
['Save character','Зберегти персонажа','Сохранить персонажа'],['Please enter a name.','Введіть ім’я.','Введите имя.'],['years old','р.','лет'],
['short','коротка','короткая'],['long','довга','длинная'],['bob','каре','каре'],['curly','кучерява','кудрявая'],['bun','пучок','пучок'],['bald','без волосся','без волос'],
['Raccoon','Єнот','Енот'],['Cat','Кіт','Кот'],['Dog','Пес','Пёс'],['Teddy bear','Ведмедик','Мишка'],['Fox','Лис','Лиса'],['Bunny','Зайчик','Зайчик'],['Capybara','Капібара','Капибара'],['Ferret','Тхір','Хорёк'],
['crown','корона','корона'],['beanie','шапка','шапка'],['tophat','циліндр','цилиндр'],['party','ковпак','колпак'],['round','круглі','круглые'],['sun','сонцезахисні','солнцезащитные'],['heart','серця','сердечки'],['scarf','шарф','шарф'],['bowtie','метелик','бабочка'],['sweater','светр','свитер'],
['Aries','Овен','Овен'],['Taurus','Телець','Телец'],['Gemini','Близнюки','Близнецы'],['Cancer','Рак','Рак'],['Leo','Лев','Лев'],['Virgo','Діва','Дева'],['Libra','Терези','Весы'],['Scorpio','Скорпіон','Скорпион'],['Sagittarius','Стрілець','Стрелец'],['Capricorn','Козоріг','Козерог'],['Aquarius','Водолій','Водолей'],['Pisces','Риби','Рыбы']
];
const I18N={};W.forEach(w=>LC.forEach((c,i)=>{(I18N[c]=I18N[c]||{})[w[0]]=w[i+1]}));
let LANG='en';try{LANG=localStorage.getItem('mc_lang')||'en'}catch(e){}
const tr=s=>LANG=='en'?s:(I18N[LANG]&&I18N[LANG][s])||s;      // translate one text
const tt=x=>Object.assign({},x,x[LANG]||{});                     // translate a test (see tests.js)

/* Translates the static page automatically (text + placeholders) */
const obs=new MutationObserver(()=>apply());
function apply(){
 obs.disconnect();
 const w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);let n;
 while(n=w.nextNode()){const p=n.parentNode.nodeName;if(p=='SCRIPT'||p=='STYLE')continue;
  if(n.__o===undefined)n.__o=n.nodeValue;
  const k=n.__o.trim();if(!k)continue;
  const r=LANG!='en'&&I18N[LANG][k],v=r?n.__o.replace(k,r):n.__o;if(n.nodeValue!==v)n.nodeValue=v}
 document.querySelectorAll('[placeholder],[title]').forEach(el=>{el.__a=el.__a||{placeholder:el.getAttribute('placeholder'),title:el.getAttribute('title')};
  for(const a in el.__a){const o=el.__a[a];if(o)el.setAttribute(a,(LANG!='en'&&I18N[LANG][o])||o)}});
 obs.observe(document.body,{childList:true,subtree:true,characterData:true});
}
function setLang(l){
 LANG=l;try{localStorage.setItem('mc_lang',l)}catch(e){}
 document.documentElement.lang=l;
 window.__mo=window.__mo||MOODN.slice();MOODN.splice(0,5,...window.__mo.map(tr));
 const s=document.getElementById('lang');if(s)s.value=l;
 $('today').textContent=new Date().toLocaleDateString(l,{weekday:'short',day:'numeric',month:'short'});
 faces();tabs();render();apply();
}
