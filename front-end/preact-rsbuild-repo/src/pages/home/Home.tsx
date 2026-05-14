import Shared from '../../components/shared/Shared';
import './Home.css';

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <a href="/about">Go to About</a>
      <div class="home">This is a simple text.</div>
      <Shared />
    </div>
  );
}