# Как закешировать вычисления?

Иногда полезно закешировать какие нибудь вычисления требующие больших вычислительных мощностей. Помочь в этом может хук `useMemo` , он позволяет вам закешировать вычисления между несколькими рендерами, путём запоминания прошлого результата:

```jsx
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

Этот код вызовет `computeExpensiveValue(a, b)`. Но если зависимости `[a, b]`не изменились с прошлого рендера, `useMemo` пропустит повторный вызов и повторно использует значения, которые он вернул в прошлый раз.

Помните, что функция, передаваемая в `useMemo`, выполняется во время рендера. Не стоит делать в ней что-то, что вы обычно не делаете во время рендера. Например, побочные эффекты выполняются в хуке `useEffect`, а не в `useMemo`.

**Рассматриваете `useMemo`, как оптимизацию производительности, но не стоит полагаться на неё на 100%.** В будущем React сможет `забыть` прошлые закешированные значения и провести перерасчёт на следующем рендере, например, для освобождения памяти, занятой компонентами вне экрана. Пишите ваш код так, чтобы он мог работать без `useMemo`, и только тогда добавляйте оптимизацию производительности.

Также удобно, что `useMemo` позволяет пропускать затратные повторные рендеры дочерних компонентов:

```jsx
function Parent({ a, b }) {
  // Рендерится повторно, только если `a` изменится:
  const child1 = useMemo(() => <Child1 a={a} />, [a]);
  // Рендерится повторно, только если `b` изменится:
  const child2 = useMemo(() => <Child2 b={b} />, [b]);
  return (
    <>
      {child1}
      {child2}
    </>
  )
}
```

Обратите внимание, что этот подход не будет работать внутри циклов, так как вызовы хуков **не могут быть помещены внутрь циклов**. Но вы можете создать отдельный компонент для элемента списка, и вызвать `useMemo` там.

## 
