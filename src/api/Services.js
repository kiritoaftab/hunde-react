/* Single image */
import simg1 from "../images/service-single/1.jpg";
import simg2 from "../images/service-single/2.jpg";
import simg3 from "../images/service-single/3.jpg";
import simg4 from "../images/service-single/4.jpg";

/* icon image */
import icon1 from "../images/service/1.svg";
import icon2 from "../images/service/2.svg";
import icon3 from "../images/service/3.svg";
import icon4 from "../images/service/4.svg";

const Services = [
  {
    id: 1,
    icon: icon1,
    simage: simg1,
    title: "Board & Train",
    description:
      "Intensive training program where your dog stays with me for structured learning, socialisation, and behaviour shaping.",
    slug: "board-and-train",
  },
  {
    id: 2,
    icon: icon2,
    simage: simg2,
    title: "Day Training",
    description:
      "Drop your dog for daily training sessions focused on obedience, manners, and confidence-building.",
    slug: "day-training",
  },
  {
    id: 3,
    icon: icon3,
    simage: simg3,
    title: "Puppy Jumpstart",
    description:
      "Perfect for young puppies to build foundations like toilet training, crate training, socialisation and basic commands.",
    slug: "puppy-jumpstart",
  },
  {
    id: 4,
    icon: icon4,
    simage: simg4,
    title: "Virtual Sessions",
    description:
      "Online guidance for training, behaviour, and troubleshooting — ideal for owners outside Bangalore or needing remote support.",
    slug: "virtual-sessions",
  },
  {
    id: 5,
    icon: icon1,
    simage: simg2,
    title: "Visiting Sessions",
    description:
      "One-on-one training at your home to help with obedience, manners, or specific behavioural issues.",
    slug: "visiting-sessions",
  },
  {
    id: 6,
    icon: icon2,
    simage: simg2,
    title: "Neutrality Sessions",
    description:
      "Focused sessions to help your dog stay calm and neutral around triggers, dogs, people, or distractions.",
    slug: "neutrality-sessions",
  },
  {
    id: 7,
    icon: icon3,
    simage: simg2,
    title: "Pack Walks",
    description:
      "Structured group walks to build confidence, reduce reactivity, and improve leash manners around other dogs.",
    slug: "pack-walks",
  },
  {
    id: 8,
    icon: icon4,
    simage: simg2,
    title: "Shadow / Mentorship Programs",
    description:
      "Special learning program for aspiring dog trainers to shadow and learn professional training methods.",
    slug: "shadow-mentorship",
  },
];
export default Services;
