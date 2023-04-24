import {
  CardItem,
  CardSections,
  docType,
} from "../LandingPage/TutorialCard";
import { MODULES } from "../../constants";

/* Define the cards - start */

  // Docs
  export const docsCards: CardSections = [
    {
      name: "",
      description:
        "",
      list: [
        {
          title: "Amazon ECR",
          module: MODULES.ci,
          description:
            "Publish an Image to an Amazon Elastic Container Registry.",
          link: "/tutorials/ci-pipelines/publish/amazon-ecr",
        },
        {
          title: "Google GAR",
          module: MODULES.ci,
          description:
            "Publish an Image to a Google Artifact Registry.",
          link: "/tutorials/ci-pipelines/publish/google-gar",
        },
      ],
    },
  ];
  /* Define the cards - end */