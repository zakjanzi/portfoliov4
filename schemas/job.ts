import { BiBriefcase } from "react-icons/bi";

const job = {
  name: "job",
  title: "Job",
  type: "document",
  icon: BiBriefcase,
  fields: [
    {
      name: "name",
      title: "Company Name",
      type: "string",
      description: "What is the name of the company?",
    },
    {
      name: "jobTitle",
      title: "Job Title",
      type: "string",
      description: "Enter the job title. E.g: Software Developer",
    },
    {
      name: "logo",
      title: "Company Logo",
      type: "image",
    },
    {
      name: "url",
      title: "Company Website",
      type: "url",
    },
    {
      name: "description",
      title: "Job Description",
      type: "text",
      rows: 3,
      description: "Write a brief description about this role",
    },
    {
      name: "contractType",
      title: "Contract Type",
      type: "string",
      options: {
        list: [
          { title: "Full-time", value: "full-time" },
          { title: "Part-time", value: "part-time" },
          { title: "Contract", value: "contract" },
          { title: "Internship", value: "internship" },
          { title: "Freelance", value: "freelance" },
        ],
        layout: "radio",
      },
      description: "Specify the nature of the employment",
    },
    {
      name: "startDate",
      title: "Start Date",
      type: "date",
    },
    {
      name: "endDate",
      title: "End Date",
      type: "date",
    },
  ],
};

export default job;
