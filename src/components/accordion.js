import { useState } from "react";
import './accordion.css'

const faqs = [
    { question: "What is the capital of France?", answer: "The capital of France is Paris." },
    { question: "Who wrote 'Romeo and Juliet'?", answer: "William Shakespeare wrote 'Romeo and Juliet'." },
    { question: "What is the largest planet in our solar system?", answer: "Jupiter is the largest planet in our solar system." },
    { question: "How many continents are there?", answer: "There are seven continents on Earth." },
    { question: "What is the boiling point of water?", answer: "Water boils at 100°C or 212°F at sea level." },
    { question: "Who painted the Mona Lisa?", answer: "Leonardo da Vinci painted the Mona Lisa." },
    { question: "What is the longest river in the world?", answer: "The Nile River is commonly considered the longest river in the world." }

];

export default function FaqAccordion() {
    const [activeIndex, setActiveIndex] = useState(null);
  
    const toggleAccordion = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };
}
