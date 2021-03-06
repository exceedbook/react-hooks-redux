# Хук состояния \(useState\)

`useState` — вызывается, чтобы наделить наш функциональный компонент внутренним состоянием. React будет хранить это состояние между рендерами.

```jsx
function Counter (props) {
    const [count, setCounter] = useState(0);

    return (
        <Button onClick={() => setCounter(count + 1)}>Count {count} </Button>
    );
}
```

Вызов `useState` возвращает две вещи: _текущее_ значение состояния и функцию для его обновления. Эту функцию можно использовать где угодно, например, в обработчике событий. Она схожа с `this.setState`в классах, но не сливает новое и старое состояние вместе.

**Важно:** Хук состояния можно использовать в компоненте более одного раза.

```jsx
  // Объявляем несколько переменных состояния!
  const [name, setName] = useState('James');
  const [age, setAge] = useState(32);
  const [todos, setTodos] = useState([{ text: 'Изучить хуки' }]);
  // ...
```

