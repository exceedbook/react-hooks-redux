# Правила использования хуков

* Хуки следует вызывать только **на верхнем уровне**. Не вызывайте хуки внутри циклов, условий или вложенных функций.
* Хуки следует вызывать только **из функциональных компонентов React**. Не вызывайте хуки из обычных JavaScript-функций. 
* Есть только одно исключение, откуда можно вызывать хуки — это ваши пользовательские хуки.


