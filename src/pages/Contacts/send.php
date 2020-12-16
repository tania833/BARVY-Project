<?php

//В переменную $token нужно вставить токен, который нам прислал @botFather
$token = "1487028718:AAGtQvG4SPUx1lkBk4jbb0d053GGDIhBfy8";

//Сюда вставляем chat_id
$chat_id = "371339798";

//Определяем переменные для передачи данных из нашей формы
if ($_POST['act'] == 'order') {
    $name = ($_POST['name']);
    $email = ($_POST['email']);
    $text = ($_POST['text']);

//Собираем в массив то, что будет передаваться боту
    $arr = array(
        'Імʼя та прізвище:' => $name,
        'Email:' => $phone,
        'Текст повідомлення:' => $text
    );
//Настраиваем внешний вид сообщения в телеграме
foreach($arr as $key => $value) {
    $txt .= "<b>".$key."</b> ".$value."%0A";
};

//Передаем данные боту
$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

//Выводим сообщение об успешной отправке
if ($sendToTelegram) {
    alert('Ваше повідомлення отримано! Ми звʼяжемось з Вами найближчим часом.');
}

//А здесь сообщение об ошибке при отправке
else {
    alert('Щось пішло не так...Спробуйте ще раз :)');
}
}

?>