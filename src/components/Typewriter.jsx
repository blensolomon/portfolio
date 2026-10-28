import { useEffect, useState } from "react";

const phrases = ["Web Developer", "Video Editor", "AI Automation Specialist"];

export default function Typewriter({ className }) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = phrases[index];
    let timer;
    if (!deleting && text.length < word.length) {
      timer = setTimeout(() => setText(word.slice(0, text.length + 1)), 70);
    } else if (!deleting) {
      timer = setTimeout(() => setDeleting(true), 1600);
    } else if (text.length > 0) {
      timer = setTimeout(() => setText(word.slice(0, text.length - 1)), 38);
    } else {
      setDeleting(false);
      setIndex((index + 1) % phrases.length);
    }
    return () => clearTimeout(timer);
  }, [text, deleting, index]);

  return (
    <span className={className} aria-label={phrases.join(", ")}>
      {text}
      <span className="animate-pulse text-accent">|</span>
    </span>
  );
}
