База: users_All
- username
- badge
- modelHref
- addTime

База: users_${modelName}
- username
- badge
- modelHref
- isFollowed
- isUserSubscribeOnModel
- lastMessage
- lastTimeMessage

База: model_accounts
- name
- login
- password

База: scraping_accounts
- name
- login
- password

База: sexting_greeting
- text
- locale

Идеи:
- не держать в подписках больше 2000 пользователей


Начать продвижение - (startPromotion.js)
---
1. Администратор выбирает из перечня модель и присваивает это значение переменной $modelName.
2. Из базы model_accounts берет значение login и password по полю переменной $modelName по полю name.
3. Скрипт startPromotion.js входит под учеткой модели. Полученные куки сохраняются в переменную $cookies.
4. Проверка работы куки. Если браузер заходя на главную страницу получает банер "18+", то возвращается на этап назад. Если банера нет, то продолжает выполнение скрипта
5. Взять из базы users_All до 5 000 пользователей.
6. Внести 1 000 уникальных пользователей в базу users_${modelName} с параметром isFollowed = false.
7. Для всех пользователей из базы users_${modelName} isFollowed = false запустить скрипт подписки на пользователя followUser.js и передать значение $cookies, $modelName, $notFollowedUser с интервалом от 1 до 6 секунд.
8. Всем подписанным пользователям из базы users_${modelName} изменить значение isFollowed = false на значение isFollowed = true.
9. Записать в переменную $listUsersForSend всех пользователей из базы users_${modelName} со значением isFollowed = true и у которых lastTimeMessage больше 1 часа.
10. Из базы sexting_greeting взять рандомное значение sexting_greeting.text.
11. Если значение sexting_greeting.text пусто или равно значению users_${modelName}.lastMessage, то получить другое рандомное значение sexting_greeting.text
12. Для всех пользователей из переменной $listUsersForSend запустить скрипт отправки сообщений sendUserMessage.js и передать значение $cookies с интервалом от 1 до 6 секунд.
13. В базу users_${modelName} внести время последней отправки сообщения users_${modelName}.lastTimeMessage и текст последнего сообщения users_${modelName}.lastMessage.


Сбор пользователей - (findMembers.js)
---
1. Cron запускает скрипт каждые 30 минут с помощью https://www.npmjs.com/package/node-schedule
2. Скрипт findMembers.js входит под рандомной учеткой обычного пользователя из базы scraping_accounts. Полученные куки сохраняются в переменную $cookies.
3. Проверка работы куки. Если браузер заходя на главную страницу получает банер "18+", то возвращается на этап назад. Если банера нет, то продолжает выполнение скрипта.
4. Парсим со страницы ссылки на топ стримы и сохраняем в переменную $streamUrls.
5. Для каждого значения $streamUrls запускается скрипт getUsername.js для получения ников пользователей. Скрипт запускается с задержкой от 1 до 4 секунд.
6. Полученные пользователи проверяются на уникальности и записываются в базу users_All.


Подписаться на пользователя - (followUser.js)
---
1. Получить значение $cookies, $modelName, $notFollowedUser.
2. Проверка работы куки. 
3. Если браузер заходя на страницу https://ru.bongamodels.com/profile/${notFollowedUser} получает банер "18+", то на новой вкладке войти под учеткой модели используя данный из базы model_accounts по значению $modelName. Полученные куки сохранить в переменную $cookies. Если банера нет, то продолжает выполнение скрипта
4. Проверить текущую подписку. Если модель не подписанна на пользователя, то добавить пользователья в фоловеры. Если уже подписанна, то ничего не делать.

