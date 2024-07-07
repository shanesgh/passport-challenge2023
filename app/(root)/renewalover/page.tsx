import Link from "next/link";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type formProps = {
  formName: string;
  formLink: string;
};

const forms: formProps[] = [
  {
    formName: "Application Form",
    formLink:
      "https://nationalsecurity.gov.tt/wp-content/uploads/2022/11/Application-Form-for-the-Renewal-of-Trinidad-and-Tobago-Machine-Readable-Passport-Applicants-16-yeard-and-over.pdf",
  },
  {
    formName: "Third Party Authorisation Form",
    formLink:
      "https://nationalsecurity.gov.tt/wp-content/uploads/2022/04/THIRD-PARTY-AUTHORISATION-FORM-for-all-new-passport-applicants-from-28-September-2020-1.pdf",
  },
  {
    formName: "Passport Fees",
    formLink:
      "https://nationalsecurity.gov.tt/wp-content/uploads/2022/11/Passport-Fees.jpg",
  },
  {
    formName: "16+ Instructional Guide",
    formLink:
      "https://nationalsecurity.gov.tt/wp-content/uploads/2023/08/PASSPORT-RENEWAL-INSTRUCTIONS-Edited.pdf",
  },
];
function RenewalOver() {
  return (
    <div className="flex flex-col  h-[calc(100vh-85px)] pl-80 mb-4 p-3 space-y-4">
      <div className="flex flex-col items-center justify-center">
        <header className="text-[28px] font-mono">
          Renewal 16 years and over
        </header>
        <div className="text-center pr-10">
          The information below is a formal guide towards completing the
          application for participants 16 years and over. Please take due care
          in reading and understanding the information. Clarity can be provided
          by the original pdf guidelines found in the required forms table to
          the right
        </div>
      </div>
      <div className="flex space-x-8 my-6 p-4">
        <div className=" w-3/5 ">
          <Table className="border  rounded-md ">
            <TableCaption>Renewal Guideline for ages 16 and Over</TableCaption>
            <TableHeader>
              <TableRow className="bg-gray-200">
                <TableHead className="w">Requirements</TableHead>
                <TableHead className="">Guide</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">
                  General Information
                </TableCell>
                <TableCell className="">
                  Schedule a passport appointment at{" "}
                  <Link
                    href="https://appointments.gov.tt/"
                    className="text-blue-800 underline"
                  />{" "}
                  Print and complete the passport application form(s). You may
                  also collect a passport application form at any passport
                  office.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium"></TableCell>
                <TableCell className="">
                  All applicants MUST appear in person for their scheduled
                  appointment
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  Completed Application Form
                </TableCell>
                <TableCell className="">
                  In filling out the application form, please read carefully and
                  fill in only the sections that are relevant to you
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium"></TableCell>
                <TableCell className="">
                  Please sign in the relevant areas.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium"></TableCell>
                <TableCell className="">
                  When signing the specimen signature,{" "}
                  <span className="text-lg underline font-bold">DO NOT</span>{" "}
                  touch the outer borders.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Passport</TableCell>
                <TableCell className="">
                  Original passport{" "}
                  <span className="text-lg underline font-bold">MUST</span> be
                  submitted together with a copy of the bio-data page (passport
                  page containing photo and personal information)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Other</TableCell>
                <TableCell className="">
                  A5 or Foolscap (legal-sized) TTPost TrackPak (available at any
                  TTPost retail outlet)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium"></TableCell>
                <TableCell className="">
                  Third Party Authorization Form (available at all passport
                  offices)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Payment</TableCell>
                <TableCell className="">
                  Visit or Click{" "}
                  <Link
                    className="underline text-blue-800 "
                    href="https://nationalsecurity.gov.tt/divisions/immigrationdivision/"
                  />{" "}
                  for{" "}
                  <Link
                    target="_blank"
                    className="underline text-blue-700 hover:animate-in "
                    href="https://nationalsecurity.gov.tt/wp-content/uploads/2022/11/Passport-Fees.jpg"
                  >
                    PASSPORT FEES
                  </Link>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  On the date of your appointment
                </TableCell>
                <TableCell className="">
                  Payments can be via linx at any Immigration Passport Office –
                  Port-of-Spain, San Fernando, Chaguanas, Sangre Grande, Pt.
                  Fortin and Tobago.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium"></TableCell>
                <TableCell className="">
                  Cash payments can be made at Immigration Passport Offices in
                  Port-of-Spain, San Fernando and Tobago.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  Spectacles and Head Covering:
                </TableCell>
                <TableCell className="">
                  Spectacles are not acceptable in the portrait
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium"></TableCell>
                <TableCell className="">
                  Headdress shall be accepted only in keeping with religious
                  customs or for medical purposes
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  Facial Markings and Piercings:
                </TableCell>
                <TableCell className="">
                  There shall be{" "}
                  <span className="underline font-bold text-lg">
                    NO MARKINGS, TATTOOS OR PIERCINGS
                  </span>{" "}
                  on any part of the applicant’s face as to obscure an even
                  appearance on the portrait
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <div className=" w-2/5 ">
          <Table className="border rounded-md ">
            <TableCaption>Required Forms</TableCaption>
            <TableHeader>
              <TableRow className="bg-gray-200">
                <TableHead className="w-[100px]">Forms</TableHead>
                <TableHead className="">Link</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {forms.map((form) => (
                <TableRow key={form.formLink}>
                  <TableCell className="font-medium">{form.formName}</TableCell>
                  <TableCell className="">
                    <Link
                      href={form.formLink}
                      target="_blank"
                      className=" text-black- transition-all ease-in hover:text-blue-700 hover:animate-in underline"
                    >
                      {form.formLink}
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default RenewalOver;
