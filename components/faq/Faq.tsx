import FaqCategorySelection from "./FaqCategorySelection";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FaqCategory = { id: number; title: string }[];
export type FaqContents = {
  question: string;
  answer: string;
}[];

type FaqContent = {
  id: number;
  content: FaqContents;
}[];

const faqCategories: FaqCategory = [
  {
    id: 1,
    title: "Eligibility and Requirements",
  },
  {
    id: 2,
    title: "Application Process",
  },
  {
    id: 3,
    title: "Special Services",
  },
];

const faqContent: FaqContent = [
  {
    id: 1,
    content: [
      {
        question: "Who can apply for a passport?",
        answer:
          "A person who is a citizen of Trinidad and Tobago by Birth, Descent, Registration, Naturalisation or Adoption can apply for a Trinidad and Tobago passport",
      },
      {
        question:
          "Does an applicant need to have the newest birth certificate?",
        answer:
          "Persons with Trinidad and Tobago Birth Certificates must submit a computerized birth certificate with the Personal Identification Number (PIN)",
      },
    ],
  },
  {
    id: 2,
    content: [
      {
        question: "How do I make an appointment to apply for my passport?",
        answer:
          "To make an appointment to apply for your passport, please call 225-IMMI/225-4664 between the hours of 8am to 4pm, Mondays to Fridays (except public holidays)",
      },
      {
        question: "Are photos required?",
        answer:
          "Applicants who have made appointments will have their pictures taken at the Immigration Office",
      },
      {
        question: "Are there any special services for the disabled?",
        answer:
          "As far as practicable, persons with disabilities are facilitated.            ",
      },
    ],
  },
];

function Faq() {
  return (
    <>
      <header className="tracking-widest font-extralight text-[50px] text-center w-full mb-16">
        Frequently Asked Questions
      </header>
      <div className="flex space-x-10 flex-between">
        <div className="rounded-md p-6 ">
          {faqCategories.map((category) => {
            return (
              <div key={category.id}>
                <FaqCategorySelection id={category.id} title={category.title} />
              </div>
            );
          })}
        </div>
        <div className="flex-1 border-gray-300 border-l-2 pl-14 p-3 ">
          {faqContent.map((content) => {
            return (
              <div key={content.id} className="">
                <Accordion type="single" collapsible>
                  {content.content.map((contentChild) => {
                    return (
                      <AccordionItem
                        key={contentChild.question}
                        value={contentChild.question}
                      >
                        <AccordionTrigger>
                          {contentChild.question}
                        </AccordionTrigger>
                        <AccordionContent className="w-[80%] ">
                          {contentChild.answer}
                        </AccordionContent>
                      </AccordionItem>
                    );
                  })}
                </Accordion>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Faq;
