import image0 from "../images/decision0.jpg";
import image from "../images/decision1.jpg";
import image9 from "../images/travel.jpg";
import image10 from "../images/meps.jpg";
import image11 from "../images/testing.jpg";
import choiceimage from "../images/choice.jpg";
import graduation from "../images/graduatingstudents.jpg";
import ship from "../images/NavyShip.jpg";
import operator from "../images/Operator.jpg";
import imagee1 from "../images/MSS1.png";
import imagee2 from "../images/MSS2.png";
import imagee3 from "../images/MSS3.png";
import imagee4 from "../images/MSS4.png";
import imagee5 from "../images/MSS5.png";
import imagee6 from "../images/MSS6.png";
import imagee7 from "../images/MSS7.png";
import imagee8 from "../images/MSS8.png";
import imagee9 from "../images/MSS9.png";
import imagee10 from "../images/MSS10.png";

export const scenarioMap = {
  0: {
    style: {
      backgroundImage: `url(${graduation})`,
      backgroundSize: "100% 100%",
      backgroundPosition: "center",

      width: "100%",
      minHeight: "100vh",
    },
    textBox:
      "The Armed Services Vocational Aptitude Battery (ASVAB) is a standardized test used by the United States Armed Forces to assess the aptitude and potential of individuals seeking to enlist in the military. ",

    showContinue: true,
    showTextBox: false,
    treeStyle: {
      backgroundImage: `url(${imagee1})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "100%",
      minHeight: "100vh",
    },
    option1: "",
    option2: "",
  },
  1: {
    style: {
      backgroundImage: `url(${image0})`,
      backgroundSize: "100% 100%",
      backgroundPosition: "center",
      width: "100%",
      minHeight: "100vh",
    },
    treeStyle: {
      backgroundImage: `url(${imagee1})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "100%",
      minHeight: "100vh",
    },
    showContinue: true,
    option1: "",
    option2: "",
  },
  2: {
    style: {
      backgroundImage: `url(${image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "100%",
      minHeight: "100vh",
    },
    showContinue: false,
    treeStyle: {
      backgroundImage: `url(${imagee2})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "100%",
      minHeight: "100vh",
    },
    option1: "Ignore Him",
    option2: "Ask Him More",
  },
  3: {
    style: {
      backgroundImage: `url(${image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "100%",
      minHeight: "100vh",
    },
    showContinue: true,
    treeStyle: {
      backgroundImage: `url(${imagee2})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "100%",
      minHeight: "100vh",
    },
    textBox:
      "The Navy offers a variety of education opportunities to its members, including the Naval Postgraduate School, Navy Tuition Assistance Program, and Navy College Program. These programs support the pursuit of higher education, allowing sailors to earn college degrees, certifications, and licenses while serving in the Navy. Additionally, the Navy provides various training and skill development programs, ensuring continuous learning and personal growth for its personnel throughout their military careers.",
    showTextBox: true,
    option1: "",
    option2: "",
  },
  4: {
    style: {
      backgroundImage: `url(${image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "100%",
      minHeight: "100vh",
    },
    treeStyle: {
      backgroundImage: `url(${imagee2})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "100%",
      minHeight: "100vh",
    },
    showContinue: true,
    option1: "",
    option2: "",
  },

  5: {
    style: {
      backgroundImage: `url(${ship})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "100%",
      minHeight: "100vh",
    },
    showContinue: false,
    treeStyle: {
      backgroundImage: `url(${imagee3})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "100%",
      minHeight: "100vh",
    },
    option1: "Do I get to choose what job I get",
    option2: "What are some benefits offered in the Navy",
  },
  6: {
    style: {
      backgroundImage: `url(${operator})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "100%",
      minHeight: "100vh",
    },
    treeStyle: {
      backgroundImage: `url(${imagee4})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "100%",
      minHeight: "100vh",
    },
    textBox:
      " In the Navy, there is a diverse range of job opportunities across various fields, including surface warfare, aviation, engineering, medical, intelligence, special warfare, logistics, and more. Each job requires specific skills and training, offering individuals the chance to find a career path that suits their interests and expertise. The variety of jobs within the Navy ensures that it can effectively operate and fulfill its mission across a wide range of operations and tasks.",
    showContinue: false,
    showTextBox: true,
    option1: "Ask for elaboration",
    option2: "Ask about how to join",
  },
  7: {
    style: {
      backgroundImage: `url(${image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "100%",
      minHeight: "100vh",
    },
    treeStyle: {
      backgroundImage: `url(${imagee5})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "100%",
      minHeight: "100vh",
    },
    textBox:
      "In the Navy, jobs are categorized into specialized occupational fields called 'ratings.' Recruits can express their preferences for certain ratings, but job availability depends on the Navy's needs and the recruit's qualifications. The ASVAB test helps determine the best-fit rating for each individual, and once enlisted, sailors undergo training specific to their chosen rating. Advancement in ratings and opportunities for cross-training into other specialties are available throughout a sailor's career.",
    showTextBox: true,
    showContinue: false,
    option1: "What are some of the benefits of joining the navy?",
    option2: "What are some of the high demand jobs in the navy? ",
  },
  8: {
    style: {
      backgroundImage: `url(${image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "100%",
      minHeight: "100vh",
    },
    treeStyle: {
      backgroundImage: `url(${imagee5})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "100%",
      minHeight: "100vh",
    },
    textBox:
      "A VA loan is a mortgage loan in the US guaranteed by the US Department of Veterans Affairs. G.I Bill:  Although the original bill expired in 1956, the term 'G.I. Bill' is still used to refer to programs created to assist some of the U.S. military veterans.",
    showTextBox: true,
    showContinue: true,
    option1: "",
    option2: "",
  },
  9: {
    style: {
      backgroundImage: `url(${image9})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "100%",
      minHeight: "100vh",
    },
    treeStyle: {
      backgroundImage: `url(${imagee6})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "100%",
      minHeight: "100vh",
    },
    textBox:
      "Military deployment is the movement of armed forces. Deployment includes any movement from a military Service Member's home station to somewhere outside the continental U.S. and its territories.",
    showTextBox: true,
    showContinue: false,
    option1: "Ask About College",
    option2: "Ask About Travel",
  },
  10: {
    style: {
      backgroundImage: `url(${image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "100%",
      minHeight: "100vh",
    },
    treeStyle: {
      backgroundImage: `url(${imagee7})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "100%",
      minHeight: "100vh",
    },
    textBox: "",
    showTextBox: false,
    showContinue: false,
    option1: "What makes the stand out among the other branches?",
    option2: "How do I get started with the process of joining?",
  },
  11: {
    style: {
      backgroundImage: `url(${image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "100%",
      minHeight: "100vh",
    },
    treeStyle: {
      backgroundImage: `url(${imagee7})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "100%",
      minHeight: "100vh",
    },
    textBox:
      "MEPS determines your mental aptitude, as well as physical and moral qualifications for enlistment. The ASVAB is a standardized test that reveals areas of strength and ability in science, math, and language. Once it's over, you'll get to find a job that matches up to your strengths.  ",
    showTextBox: true,
    showContinue: true,
    option1: "",
    option2: "",
  },
  12: {
    style: {
      backgroundImage: `url(${image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "100%",
      minHeight: "100vh",
    },
    treeStyle: {
      backgroundImage: `url(${imagee7})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "100%",
      minHeight: "100vh",
    },
    textBox: "",
    showTextBox: false,
    showContinue: true,
    option1: "",
    option2: "",
  },
  13: {
    style: {
      backgroundImage: `url(${image10})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "100%",
      minHeight: "100vh",
    },
    treeStyle: {
      backgroundImage: `url(${imagee7})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "100%",
      minHeight: "100vh",
    },
    showContinue: true,
    option1: "",
    option2: "",
  },
  14: {
    style: {
      backgroundImage: `url(${image11})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "100%",
      minHeight: "100vh",
    },
    treeStyle: {
      backgroundImage: `url(${imagee8})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "100%",
      minHeight: "100vh",
    },
    showContinue: false,
    option1: "Corpsman",
    option2: "Builder",
  },
  15: {
    style: {
      backgroundImage: `url(${choiceimage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "100%",
      minHeight: "100vh",
    },
    treeStyle: {
      backgroundImage: `url(${imagee9})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "100%",
      minHeight: "100vh",
    },
    showContinue: false,
    option1:
      "Stick with the current job and sign the contract whenever the job become available",
    option2: "Drop out the process",
  },
  16: {
    style: {
      backgroundImage: `url(${imagee10})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "100%",
      minHeight: "100vh",
    },
    treeStyle: {
      backgroundImage: `url(${imagee10})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      width: "100%",
      minHeight: "100vh",
    },
    showContinue: true,
    option1:
      "",
    option2: "",
  },
};
