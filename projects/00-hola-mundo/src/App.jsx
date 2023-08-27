import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  return (
    <section className="App">
      <TwitterFollowCard userName="midudev">
        Miguel Angel Duran
      </TwitterFollowCard>
      <TwitterFollowCard userName="tomc">
        Pela4job
      </TwitterFollowCard>
      <TwitterFollowCard userName="papulo79">
        Papulo
      </TwitterFollowCard>
      <TwitterFollowCard userName="bitmachin">
        Bitmachin
      </TwitterFollowCard>
    </section>
  );
}
