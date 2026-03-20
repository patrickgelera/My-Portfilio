import { useState, useEffect } from "react";

const phrases = [
  "Building secure & scalable web solutions",
  "Learning ethical hacking & pen testing",
  "Crafting clean code, one line at a time",
  "Open to full-stack & cybersecurity roles",
];

const Typewriter = () => {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) {
      const t = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, 2200);
      return () => clearTimeout(t);
    }

    const current = phrases[phraseIndex];
    const speed = isDeleting ? 32 : 65;

    const t = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < current.length) {
          setText(current.slice(0, charIndex + 1));
          setCharIndex((c) => c + 1);
        } else {
          setIsPaused(true);
        }
      } else {
        if (charIndex > 0) {
          setText(current.slice(0, charIndex - 1));
          setCharIndex((c) => c - 1);
        } else {
          setIsDeleting(false);
          setPhraseIndex((i) => (i + 1) % phrases.length);
        }
      }
    }, speed);

    return () => clearTimeout(t);
  }, [charIndex, isDeleting, isPaused, phraseIndex]);

  return (
    <div className="typewriter">
      <span className="typeText">{text}</span>
      <span className="typeCursor">▋</span>
    </div>
  );
};

export default Typewriter;
