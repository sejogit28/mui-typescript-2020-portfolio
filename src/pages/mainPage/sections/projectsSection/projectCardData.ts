export interface projCardProps {
  id: number;
  title: string;
  imageSrc: string;
  description: string;
  liveLink: string;
  gitHubLink: string;
}
const projectCardListData = [
  {
    id: 1,
    title: "Bug Track",
    imageSrc: "/Photos/NewBugTrackerGif.gif",
    description:
      "A bug tracker built using .NET 5(MVC), Entity Framework, Bootstrap and Microsoft SQL Server",
    liveLink: "https://the-bug-track-dev.herokuapp.com/",
    gitHubLink: "https://github.com/sejogit28/BugTrackerTime2Sol",
  },
  {
    id: 2,
    title: "Expense Track",
    imageSrc: "/Photos/ExpenseTrackerGif.gif",
    description:
      "An expense tracker built with Blazor Web Assembly, .NET 5 Web Api, and Microsoft SQL Server",
    liveLink: "https://loving-turing-d3cc22.netlify.app",
    gitHubLink: "https://github.com/sejogit28/ExpenseTrackerSol",
  },
  {
    id: 3,
    title: "Coding Mind",
    imageSrc: "/Photos/MernBlogGif.gif",
    description:
      "A personal blog application built using the MERN(MongoDb, Express, React and Node).",
    liveLink: "https://tender-bohr-ca754b.netlify.app",
    gitHubLink: "https://github.com/sejogit28/MERN-Blog",
  },
];

export default projectCardListData;
