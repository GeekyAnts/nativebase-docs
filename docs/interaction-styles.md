---
id: interaction-styles
title: Adding pressed, hover and focus styles
---

NativeBase provides a way to add interaction styles using psuedo CSS selector like syntax. i.e. psuedo style props.

```jsx live
function Clock(props) {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    var timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(new Date());
  }

  return (
    <div>
      <NativeBaseProvider>
        <Box>hello world</Box>
      </NativeBaseProvider>
    </div>
  );
}
```
