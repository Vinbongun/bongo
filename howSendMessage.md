База: users\_${modelName}

- username
- badge
- modelHref
- isBestUser
- isUserSubscribeOnModel
- lastMessage
- lastTimeMessage

Подписаться на пользователей

1. Получить список пользователей
2. Открыть профиль пользователя по ссылке https://ru.bongamodels.com/profile/${username}
3. Добавить как лучшего пользователя нажав на кнопку с классом "add_remove_best_member"
4. Подтвердить действие всплывающего окна "Ок"
5. Добавить username и isBestUser:true в базу users\_${modelName}

Написать лучшим пользователям

1. Взять массив пользователей из базы users\_${modelName}
2. Выбрать пользователей у которых есть значение isBestUser:true
3. Выбрать пользователей у которых разница между текущей датой и lastTimeMessage более 1 часа
4. Выбрать всех пользователей, кроме тех у кого значение badge:member_free или пустое
5. Из массива приветственных сообщенией выбрать одно значение
6. Открыть вкладку лучший пользователь https://ru.bongamodels.com/followings/best_members
7.
