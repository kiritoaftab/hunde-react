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

/* Board & Train images */
import boardAndTrainBanner from "../images/dogs/dog-1.jpeg";
import batImg1 from "../images/dogs/dog-4.jpeg";
import batImg2 from "../images/dogs/dog-5.jpeg";
import batImg3 from "../images/dogs/dog-6.jpeg";
import batImg4 from "../images/dogs/dog-7.jpeg";
import batImg5 from "../images/dogs/dog-max.jpeg";

/* Day Training images */
import dayTrainingBanner from "../images/whatsapp/day-training-banner.jpeg";
import dayTrainingImg1 from "../images/whatsapp/day-training-1.jpeg";
import dayTrainingImg2 from "../images/whatsapp/day-training-2.jpeg";
import dayTrainingImg3 from "../images/whatsapp/day-training-3.jpeg";
import dayTrainingImg4 from "../images/whatsapp/day-training-4.jpeg";

/* Puppy Jumpstart images */
import puppyJumpstartBanner from "../images/whatsapp/puppy-jumpstart-banner.jpeg";
import puppyJumpstartImg1 from "../images/whatsapp/puppy-jumpstart-1.jpeg";
import puppyJumpstartImg2 from "../images/whatsapp/puppy-jumpstart-2.jpeg";

/* Virtual Sessions - reuse trainer images */
import virtualSessionsBanner from "../images/whatsapp/pack-walks-banner.jpeg";

/* Visiting Sessions images */
import visitingSessionsBanner from "../images/whatsapp/visiting-sessions-banner.jpeg";
import visitingSessionsImg1 from "../images/whatsapp/visiting-sessions-1.jpeg";
import visitingSessionsImg2 from "../images/whatsapp/visiting-sessions-2.jpeg";
import visitingSessionsImg3 from "../images/whatsapp/visiting-sessions-3.jpeg";
import visitingSessionsImg4 from "../images/whatsapp/visiting-sessions-4.jpeg";
import visitingSessionsImg5 from "../images/whatsapp/visiting-sessions-5.jpeg";

/* Neutrality Sessions images */
import neutralitySessionsBanner from "../images/whatsapp/neutrality-sessions-banner.jpeg";
import neutralitySessionsImg1 from "../images/whatsapp/neutrality-sessions-1.jpeg";
import neutralitySessionsImg2 from "../images/whatsapp/neutrality-sessions-2.jpeg";
import neutralitySessionsImg3 from "../images/whatsapp/neutrality-sessions-3.jpeg";
import neutralitySessionsImg4 from "../images/whatsapp/neutrality-sessions-4.jpeg";
import neutralitySessionsImg5 from "../images/whatsapp/neutrality-sessions-5.jpeg";

/* Pack Walks images */
import packWalksBanner from "../images/whatsapp/pack-walks-banner.jpeg";
import packWalksImg1 from "../images/whatsapp/pack-walks-1.jpeg";

/* Shadow/Mentorship - reuse training images */
import shadowMentorshipBanner from "../images/whatsapp/day-training-banner.jpeg";
import shadowMentorshipImg1 from "../images/whatsapp/day-training-1.jpeg";
import shadowMentorshipImg2 from "../images/whatsapp/day-training-2.jpeg";
import shadowMentorshipImg3 from "../images/whatsapp/neutrality-sessions-5.jpeg";

const Services = [
  {
    id: 1,
    icon: icon1,
    simage: simg1,
    title: "Board & Train",
    description:
      "Intensive training program where your dog stays with me for structured learning, socialisation, and behaviour shaping.",
    slug: "board-and-train",

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
      "Understanding your dog's routine and behaviour concerns",
      "Building a structured training plan",
      "Daily hands-on training sessions",
      "Regular video updates + daily training summary",
      "Knowledge transfer sessions with the pet parent",
      "Final handover with training guidelines",
    ],

    bannerImage: boardAndTrainBanner,
    images: [batImg1, batImg2, batImg3, batImg4, batImg5],
  },
  {
    id: 2,
    icon: icon2,
    simage: simg2,
    title: "Day Training",
    description:
      "Drop your dog for daily training sessions focused on obedience, manners, and confidence-building.",
    slug: "day-training",

    desc1:
      "Day Training is perfect for pet parents who want professional training without an overnight stay. Your dog spends the day with me at my training facility, receiving focused one-on-one sessions while you go about your day.",

    desc2:
      "Each session is tailored to your dog's needs and your training goals. Whether it's basic obedience, leash manners, or working through specific challenges, I ensure consistent progress with regular updates and homework for you to practice at home.",

    ourCapabilitiesDesc:
      "Day Training provides intensive, professional guidance while allowing your dog to return home each evening. This program is ideal for building skills progressively with real-world application.",

    ourCapabilitiesList: [
      "Focused one-on-one training sessions",
      "Basic to advanced obedience commands",
      "Leash walking and outdoor manners",
      "Impulse control and focus exercises",
      "Socialisation in a controlled environment",
      "Regular progress updates and video summaries",
    ],

    ourApproach:
      "I work on building a strong communication foundation between you and your dog. Through marker-based training and positive reinforcement, your dog learns to make better choices while having fun in the process.",

    ourWorkProcess: [
      "Initial consultation to assess your dog's needs",
      "Creating a customised training schedule",
      "Daily drop-off and structured training sessions",
      "Enrichment activities and supervised play",
      "End-of-day summary with training notes",
      "Weekly knowledge transfer with the pet parent",
      "Graduation with a detailed training guide",
    ],

    bannerImage: dayTrainingBanner,
    images: [dayTrainingImg1, dayTrainingImg2, dayTrainingImg3, dayTrainingImg4],
  },
  {
    id: 3,
    icon: icon3,
    simage: simg3,
    title: "Puppy Jumpstart",
    description:
      "Perfect for young puppies to build foundations like toilet training, crate training, socialisation and basic commands.",
    slug: "puppy-jumpstart",

    desc1:
      "The first few months of your puppy's life are crucial for shaping their behaviour and personality. Puppy Jumpstart is designed to give your young companion the best possible start with age-appropriate training and early socialisation.",

    desc2:
      "From toilet training and crate conditioning to bite inhibition and basic commands, this program covers all the essentials. I work with puppies as young as 8 weeks, helping them develop confidence and good habits from day one.",

    ourCapabilitiesDesc:
      "Puppy Jumpstart focuses on building a well-adjusted, confident puppy through positive experiences, gentle guidance, and early skill development tailored to their developmental stage.",

    ourCapabilitiesList: [
      "Toilet training and schedule establishment",
      "Crate training and alone-time conditioning",
      "Bite inhibition and mouthing management",
      "Basic commands (sit, down, come, stay)",
      "Early socialisation with people and environments",
      "Handling exercises for grooming and vet visits",
    ],

    ourApproach:
      "Puppies learn through play, patience, and positive experiences. I use reward-based methods to make training enjoyable while setting clear boundaries that help your puppy understand what's expected.",

    ourWorkProcess: [
      "Puppy assessment and temperament evaluation",
      "Creating an age-appropriate training plan",
      "Short, engaging training sessions",
      "Socialisation exposure in safe environments",
      "Daily routine establishment guidance",
      "Pet parent coaching on handling and management",
      "Follow-up support as your puppy grows",
    ],

    bannerImage: puppyJumpstartBanner,
    images: [puppyJumpstartImg1, puppyJumpstartImg2],
  },
  {
    id: 4,
    icon: icon4,
    simage: simg4,
    title: "Virtual Sessions",
    description:
      "Online guidance for training, behaviour, and troubleshooting — ideal for owners outside Bangalore or needing remote support.",
    slug: "virtual-sessions",

    desc1:
      "Distance shouldn't be a barrier to quality training support. Virtual Sessions bring professional dog training guidance directly to your home through video calls, making expert help accessible no matter where you are in India or abroad.",

    desc2:
      "Whether you're dealing with a specific behaviour challenge, need guidance on training techniques, or want ongoing support between in-person sessions, virtual consultations provide flexible, convenient access to professional advice.",

    ourCapabilitiesDesc:
      "Virtual Sessions offer personalised training guidance, behaviour consultations, and troubleshooting support through live video calls, complete with follow-up resources and actionable homework.",

    ourCapabilitiesList: [
      "Live video consultations via Zoom or Google Meet",
      "Behaviour assessment and analysis",
      "Step-by-step training demonstrations",
      "Personalised training plans and homework",
      "Follow-up support via chat or email",
      "Video review and feedback on your training",
    ],

    ourApproach:
      "I guide you through training techniques in real-time, observing your dog's behaviour and providing immediate feedback. You become the trainer with me as your coach, building skills that last.",

    ourWorkProcess: [
      "Pre-session questionnaire and video submission",
      "Scheduled video consultation",
      "Live assessment and demonstration",
      "Customised training plan shared digitally",
      "Homework assignments with video guides",
      "Follow-up check-in and progress review",
      "Ongoing support packages available",
    ],

    bannerImage: virtualSessionsBanner,
    images: [packWalksImg1],
  },
  {
    id: 5,
    icon: icon1,
    simage: simg2,
    title: "Visiting Sessions",
    description:
      "One-on-one training at your home to help with obedience, manners, or specific behavioural issues.",
    slug: "visiting-sessions",

    desc1:
      "Some dogs learn best in their own environment. Visiting Sessions bring professional training directly to your home in Bangalore, allowing me to work with your dog where they feel most comfortable and where real-life challenges occur.",

    desc2:
      "This personalised approach is especially effective for addressing household-specific issues like door manners, guest behaviour, resource guarding, or separation anxiety. Training in context leads to faster, more lasting results.",

    ourCapabilitiesDesc:
      "Visiting Sessions provide in-home training that addresses your dog's behaviour in their natural environment, with direct coaching for all family members involved in the dog's daily life.",

    ourCapabilitiesList: [
      "In-home behaviour assessment",
      "Obedience training in real-life contexts",
      "Door manners and guest behaviour",
      "Resource guarding management",
      "Household routine optimisation",
      "Family member coaching and involvement",
    ],

    ourApproach:
      "By training in your home, I can identify environmental triggers and work on solutions that fit your lifestyle. Every family member learns to apply consistent techniques for lasting behaviour change.",

    ourWorkProcess: [
      "Initial home visit and environment assessment",
      "Identifying triggers and behaviour patterns",
      "Creating a home-specific training plan",
      "Hands-on training with your dog",
      "Coaching all family members on techniques",
      "Setting up management and routines",
      "Follow-up sessions to reinforce learning",
    ],

    bannerImage: visitingSessionsBanner,
    images: [
      visitingSessionsImg1,
      visitingSessionsImg2,
      visitingSessionsImg3,
      visitingSessionsImg4,
      visitingSessionsImg5,
    ],
  },
  {
    id: 6,
    icon: icon2,
    simage: simg2,
    title: "Neutrality Sessions",
    description:
      "Focused sessions to help your dog stay calm and neutral around triggers, dogs, people, or distractions.",
    slug: "neutrality-sessions",

    desc1:
      "Reactivity and over-excitement can make walks stressful for both you and your dog. Neutrality Sessions are designed to help your dog learn to stay calm and focused when encountering triggers like other dogs, strangers, vehicles, or environmental distractions.",

    desc2:
      "Through controlled exposure and systematic desensitisation, I teach your dog that triggers are nothing to react to. The goal is a relaxed, neutral response that makes everyday life more enjoyable for everyone.",

    ourCapabilitiesDesc:
      "Neutrality Sessions focus on reducing reactivity and building calm confidence through careful exposure work, helping your dog navigate the world without stress or overreaction.",

    ourCapabilitiesList: [
      "Trigger identification and threshold mapping",
      "Controlled exposure and desensitisation",
      "Focus and engagement exercises",
      "Calm behaviour reinforcement",
      "Muzzle conditioning (if needed)",
      "Real-world proofing in various environments",
    ],

    ourApproach:
      "I use a combination of counter-conditioning and positive reinforcement to change your dog's emotional response to triggers. Progress is gradual and always at your dog's comfort level.",

    ourWorkProcess: [
      "Detailed behaviour history and trigger assessment",
      "Setting realistic goals and expectations",
      "Controlled exposure sessions at safe distances",
      "Gradually decreasing distance as confidence builds",
      "Proofing in different environments",
      "Teaching owner handling and management skills",
      "Maintenance plan for long-term success",
    ],

    bannerImage: neutralitySessionsBanner,
    images: [
      neutralitySessionsImg1,
      neutralitySessionsImg2,
      neutralitySessionsImg3,
      neutralitySessionsImg4,
      neutralitySessionsImg5,
    ],
  },
  {
    id: 7,
    icon: icon3,
    simage: simg2,
    title: "Pack Walks",
    description:
      "Structured group walks to build confidence, reduce reactivity, and improve leash manners around other dogs.",
    slug: "pack-walks",

    desc1:
      "Pack Walks offer a unique opportunity for your dog to learn alongside other dogs in a structured, supervised environment. These group walks are designed to build social confidence, improve leash manners, and reduce reactivity through positive parallel experiences.",

    desc2:
      "Dogs in the pack learn from each other, and the structured format ensures safety while promoting natural social learning. It's an excellent way for your dog to practice neutrality and calm behaviour around other dogs in real-world settings.",

    ourCapabilitiesDesc:
      "Pack Walks combine socialisation, exercise, and training in one enriching experience, helping dogs learn to coexist peacefully while enjoying outdoor adventures.",

    ourCapabilitiesList: [
      "Structured group walking format",
      "Controlled socialisation opportunities",
      "Leash manners practice with distractions",
      "Building confidence around other dogs",
      "Learning from calm, balanced pack members",
      "Outdoor enrichment and exploration",
    ],

    ourApproach:
      "Each pack is carefully curated to ensure compatible energy levels and temperaments. I maintain structure throughout the walk while allowing natural, appropriate interactions between dogs.",

    ourWorkProcess: [
      "Pre-walk assessment of your dog's suitability",
      "Matching with an appropriate pack group",
      "Structured warm-up and pack introduction",
      "Supervised walk with training integration",
      "Controlled rest breaks and water stations",
      "Cool-down and calm dismissal",
      "Post-walk feedback on your dog's progress",
    ],

    bannerImage: packWalksBanner,
    images: [packWalksImg1],
  },
  {
    id: 8,
    icon: icon4,
    simage: simg2,
    title: "Shadow / Mentorship Programs",
    description:
      "Special learning program for aspiring dog trainers to shadow and learn professional training methods.",
    slug: "shadow-mentorship",

    desc1:
      "Are you passionate about dog training and considering it as a career? The Shadow/Mentorship Program offers aspiring trainers the opportunity to learn professional methods through hands-on experience alongside a certified trainer.",

    desc2:
      "This program is designed for those serious about understanding canine behaviour, training methodologies, and the practical aspects of running a dog training practice. Learn by doing, not just watching.",

    ourCapabilitiesDesc:
      "The Shadow/Mentorship Program provides comprehensive exposure to professional dog training, from basic obedience to behaviour modification, client communication, and business practices.",

    ourCapabilitiesList: [
      "Hands-on training experience with various dogs",
      "Learning multiple training methodologies",
      "Understanding canine body language and behaviour",
      "Client consultation and communication skills",
      "Case study analysis and problem-solving",
      "Business aspects of dog training",
    ],

    ourApproach:
      "Learning happens through observation, assisted practice, and gradually taking on more responsibility under supervision. I provide feedback, answer questions, and share real-world insights from years of experience.",

    ourWorkProcess: [
      "Initial interview and goals discussion",
      "Customised mentorship plan based on experience level",
      "Observation of training sessions and consultations",
      "Assisted handling under supervision",
      "Independent practice with feedback",
      "Case discussions and theory sessions",
      "Certificate of completion and ongoing support",
    ],

    bannerImage: shadowMentorshipBanner,
    images: [shadowMentorshipImg1, shadowMentorshipImg2, shadowMentorshipImg3],
  },
];

export default Services;
