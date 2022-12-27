export interface projCardProps {
  id: number;
  title: string;
  imageSrc: string;
  description: string;
  liveLink: string;
  gitHubLink: string;
}
const projectCardListData: projCardProps[] = [
  {
    id: 1,
    title: "Expense Track",
    imageSrc: "/Photos/ExpenseTrackerGif.gif",
    description:
      //"An expense tracker built with Blazor Web Assembly, .NET 5 Web Api, and Postgres. Deployed on Netlify and Heroku(recently migrated from Microsoft SQL Server/Azure)",
      "An expense tracker built with Blazor Web Assembly, .NET 5 Web Api, and Postgres.",
    liveLink: "",
    gitHubLink: "https://github.com/sejogit28/ExpenseTrackerSol",
  },
  {
    id: 2,
    title: "Coding Mind",
    imageSrc: "/Photos/MernBlogGif.gif",
    description:
      "A personal blog application built using the MERN(MongoDb, Express, React and Node).",
    liveLink: "",
    gitHubLink: "https://github.com/sejogit28/MERN-Blog",
  },
  {
    id: 3,
    title: "Bug Track",
    imageSrc: "/Photos/NewBugTrackerGif.gif",
    description:
      "A bug tracker built using .NET 5(MVC), Entity Framework, Bootstrap and Postgres. Deployed on Heroku(recently migrated from Microsoft SQL Server/Azure)",
    liveLink: "http://the-bug-track.herokuapp.com",
    gitHubLink: "https://github.com/sejogit28/BugTrackerTime2Sol",
  },
];

export default projectCardListData;
