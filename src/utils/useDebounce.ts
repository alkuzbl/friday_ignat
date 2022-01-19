import { useEffect, useState } from 'react';
//
// export default function useDebounce(
//   func: Function,
//   delay: number,
//   cleanUp: boolean = false,
// ) {
//   const timeoutRef = useRef();
//
//   function clearTimer() {
//     if (timeoutRef.current) {
//       clearTimeout(timeoutRef.current);
//       timeoutRef.current = undefined;
//     }
//   }
//
//   useEffect(() => (cleanUp ? clearTimer : undefined), [cleanUp]);
//
//   return (...args: any) => {
//     clearTimer();
//     // @ts-ignore
//     timeoutRef.current = setTimeout(() => func(...args), delay);
//   };
// }
export default function useDebounce(value: any, delay: number) {
  // Value - стартовое значения для значения, которое возвращает хук
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Вернуть функцию очистки, которая будет вызываться каждый раз, когда ...
    // ... useEffect вызван снова. useEffect будет вызван снова, только если ...
    // ... value будет изменено (смотри ниже массив зависимостей).
    // Так мы избегаем изменений debouncedValue, если значение value ...
    // ... поменялось в рамках интервала задержки.
    // Таймаут очищается и стартует снова.
    // Что бы сложить это воедино: если пользователь печатает что-то внутри ...
    // ... нашего приложения в поле поиска, мы не хотим, чтобы debouncedValue...
    // ... не менялось до тех пор, пока он не прекратит печатать дольше, чем 500ms.
    return () => {
      clearTimeout(handler);
    };
  }, [value]);

  return debouncedValue;
}
