import { useEffect, useState } from "react";

const phrases = ["Web Developer", "Video Editor", "AI Automation Specialist"];

export default function Typewriter({ className }) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = phrases[index];
    const delay = deleting ? 38 : text.length === word.length ? 1600 : 70;
    const timer = setTimeout(() => {
      if (!deleting && text.length < word.length) {
        setText(word.slice(0, text.length + 1));
      } else if (!deleting) {
        setDeleting(true);
      } else if (text.length > 0) {
        setText(word.slice(0, text.length - 1));
      } else {
        setDeleting(false);
        setIndex((index + 1) % phrases.length);
      }
    }, delay);
    return () => clearTimeout(timer);
  }, [text, deleting, index]);

  return (
    <span className={className} aria-label={phrases.join(", ")}>
      {text}
      <span className="animate-pulse text-accent">|</span>
    </span>
  );
}
