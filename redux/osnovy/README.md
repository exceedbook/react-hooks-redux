# Основы

### Использование Redux

В Redux общее состояние приложения представлено одним объектом JavaScript — state \(состояние\) или state tree \(дерево состояний\). Неизменяемое дерево состояний доступно только для чтения, изменить ничего напрямую нельзя. Изменения возможны только при отправке `action` \(действия\).

### Поток данных в Redux

Передача действий с потоками данных происходит через вызов метода `dispatch()` в хранилище. Само хранилище передаёт действия редуктору и генерирует следующее состояние, а затем обновляет состояние и уведомляет об этом всех слушателей.

