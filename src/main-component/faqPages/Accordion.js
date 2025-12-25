import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const accordionItems = [
        {
            title: "What age can I start training my dog?",
            content: "Training can begin as early as 8 weeks for puppies. Early socialisation and basic foundation work are crucial during this developmental stage. For older dogs, it's never too late to start — dogs of any age can learn new behaviours with the right approach and consistency."
        },
        {
            title: "How long does it take to see results from training?",
            content: "Results vary depending on the dog, the behaviour being addressed, and consistency at home. Basic obedience typically shows improvement within 2-4 weeks. Behaviour modification for issues like reactivity may take longer — usually 6-12 weeks of consistent work. I provide regular updates so you can track progress throughout the program."
        },
        {
            title: "What training methods do you use?",
            content: "I use positive reinforcement and marker-based training methods. This means rewarding desired behaviours to encourage repetition while setting clear boundaries. I focus on building communication and trust between you and your dog, rather than using fear or punishment-based techniques."
        },
        {
            title: "Which program is right for my dog?",
            content: "The best program depends on your goals, schedule, and your dog's specific needs. Board & Train is ideal for intensive foundation work, Day Training suits busy pet parents, and Visiting Sessions work well for household-specific issues. I offer a free initial consultation to help you choose the right fit."
        },
        {
            title: "Do you offer training outside Bangalore?",
            content: "My in-person services (Board & Train, Day Training, Visiting Sessions, Pack Walks) are currently available only in Bangalore. However, I offer Virtual Sessions for pet parents anywhere in India or abroad, providing guidance via video calls for training and behaviour support."
        },
        {
            title: "Will my dog forget the training after the program ends?",
            content: "Training is a lifelong journey. While I build a strong foundation during our time together, consistency at home is key. I provide detailed knowledge transfer sessions, training guides, and follow-up support to help you maintain and reinforce what your dog has learned."
        },
        {
            title: "Can you help with aggressive or reactive dogs?",
            content: "Yes, I work with reactive and aggressive dogs through my Neutrality Sessions and specialised behaviour modification programs. Every case is assessed individually, and I create a safe, structured plan to address the underlying causes of reactivity. Muzzle conditioning and management strategies are included when needed."
        },
        {
            title: "How do I book a consultation?",
            content: "You can book a consultation by filling out the contact form on this website, or reach out to me directly via WhatsApp or email. I typically respond within 24 hours and will schedule a convenient time to discuss your dog's needs and recommend the best program for you."
        }
    ];

    return (
        <div className="accordion" id="accordionExample">
            {accordionItems.map((item, index) => (
                <div className="accordion-item" key={index}>
                    <h3 className="accordion-header">
                        <button
                            className={`accordion-button ${activeIndex === index ? "" : "collapsed"}`}
                            onClick={() => toggleAccordion(index)}
                        >
                            {item.title}
                        </button>
                    </h3>
                    <div className={`accordion-collapse collapse ${activeIndex === index ? "show" : ""}`}>
                        <div className="accordion-body">
                            <p>{item.content}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Accordion;
