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

import boardAndTrainBanner from "../images/dogs/dog-1.jpeg";

import batImg1 from "../images/dogs/dog-4.jpeg";
import batImg2 from "../images/dogs/dog-5.jpeg";
import batImg3 from "../images/dogs/dog-6.jpeg";
import batImg4 from "../images/dogs/dog-7.jpeg";
import batImg5 from "../images/dogs/dog-max.jpeg";

const Services = [
  {
    id: 1,
    icon: icon1,
    simage: simg1,
    title: "Board & Train",
    description:
      "Intensive training program where your dog stays with me for structured learning, socialisation, and behaviour shaping.",
    slug: "board-and-train",

    // NEW FIELDS
    desc1:
      "Your dog stays with me at my Board & Train Studio with a maximum of three training dogs at a time. This ensures personalised attention and structured learning based on your training goals.",

    desc2:
      "I lay the training foundation as per your requirements and behaviour concerns. After the first two weeks, I conduct knowledge-transfer sessions to help you maintain the training successfully at home.",

    ourCapabilitiesDesc:
      "The Board & Train program builds strong foundations, addresses behavioural issues, and teaches essential life skills through structured, daily training routines.",

    ourCapabilitiesList: [
      "Daily structured training sessions",
      "Behaviour modification for specific issues",
      "Confidence building & socialisation",
      "Leash manners & foundational obedience",
      "Regular training summaries and reference videos",
      "Personalised training plan tailored to your goals",
    ],

    ourApproach:
      "With controlled environments, clear communication markers, and consistent practice, I work on transforming behaviour and building reliable habits that last beyond the program.",

    ourWorkProcess: [
      "Initial face-to-face consultation",
      "Understanding your dog’s routine and behaviour concerns",
      "Building a structured training plan",
      "Daily hands-on training sessions",
      "Regular video updates + daily training summary",
      "Knowledge transfer sessions with the pet parent",
      "Final handover with training guidelines",
    ],

    bannerImage: boardAndTrainBanner, // import this at top

    images: [batImg1, batImg2, batImg3, batImg4, batImg5], // imported at top
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
