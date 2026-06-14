import { useState, useEffect } from 'react';

export default function useTypingRotate(words = [], typingSpeed = 100, deletingSpeed = 60, pause = 2000) {
    const [text, setText] = useState('');
    const [wordIndex, setWordIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        if (words.length === 0) return;

        const currentWord = words[wordIndex];
        let timeout;

        if (!isDeleting && charIndex < currentWord.length) {
            // typing forward
            timeout = setTimeout(() => {
                setText(currentWord.substring(0, charIndex + 1));
                setCharIndex(charIndex + 1);
            }, typingSpeed);
        } else if (isDeleting && charIndex > 0) {
            // deleting
            timeout = setTimeout(() => {
                setText(currentWord.substring(0, charIndex - 1));
                setCharIndex(charIndex - 1);
            }, deletingSpeed);
        } else if (!isDeleting && charIndex === currentWord.length) {
            // finished typing, pause then start deleting
            timeout = setTimeout(() => setIsDeleting(true), pause);
        } else if (isDeleting && charIndex === 0) {
            // finished deleting, pause then move to next word
            timeout = setTimeout(() => {
                setIsDeleting(false);
                setWordIndex((prev) => (prev + 1) % words.length);
            }, pause);   // <-- schedule the update, NOT synchronous
        }

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pause]);

    return text;
}