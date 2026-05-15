import { Button } from 'antd';
import { useHomeStore } from './store';

export function Home() {
  const { count, increment, clear } = useHomeStore();

  return (
    <div className="App">
      {count}
      <Button type="primary" onClick={increment}>Button</Button>
      <Button type="dashed" onClick={clear}>Clear</Button>
    </div>
  )
}
