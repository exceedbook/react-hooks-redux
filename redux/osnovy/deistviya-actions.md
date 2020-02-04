# Действия \(Actions\)

Действие \(action\) — это JavaScript-объект, который лаконично описывает суть изменения:

```jsx
{ 
  type: 'SELECTED_USER', 
  payload 
}
```

Действия должны иметь поле `type`, которое указывает на тип исполняемого действия. И поле `payload`принимающее данные которые мы хотим изменить.

**Типы действий должны быть константами!**

В простом приложении тип действия задаётся строкой. По мере разрастания функциональности приложения лучше переходить на константы:

```jsx
const ADD_ITEM = 'ADD_ITEM' 
const action = { type: ADD_ITEM, title: 'Third item' }
```

и выносить действия в отдельные файлы. А затем их импортировать:

```jsx
import { ADD_ITEM, REMOVE_ITEM } from './actions'
```
