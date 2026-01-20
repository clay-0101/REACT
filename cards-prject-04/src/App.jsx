import Card1 from "./COMPONENTS/card1"
const App = () => {
  const jobs = [
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      comp: "Google",
      time: "2 days ago",
      need: "Senior UI/UX Designer",
      job1: "Full-Time",
      job2: "Senior Level",
      pay: "$140/hr",
      area: "Bangalore, India"
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      comp: "Apple",
      time: "4 days ago",
      need: "Product Designer",
      job1: "Full-Time",
      job2: "Mid-Senior Level",
      pay: "$150/hr",
      area: "Hyderabad, India"
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      comp: "Amazon",
      time: "5 days ago",
      need: "Senior UI/UX Designer",
      job1: "Part-Time",
      job2: "Senior Level",
      pay: "$120/hr",
      area: "Mumbai, India"
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/0/05/Meta_Platforms_Inc._logo.svg",
      comp: "Meta",
      time: "1 day ago",
      need: "UX Researcher",
      job1: "Full-Time",
      job2: "Senior Level",
      pay: "$145/hr",
      area: "Gurgaon, India"
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
      comp: "Netflix",
      time: "3 days ago",
      need: "UI Designer",
      job1: "Contract",
      job2: "Senior Level",
      pay: "$160/hr",
      area: "Remote"
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      comp: "Microsoft",
      time: "6 days ago",
      need: "Design Lead",
      job1: "Full-Time",
      job2: "Lead Level",
      pay: "$155/hr",
      area: "Noida, India"
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png",
      comp: "Tesla",
      time: "2 days ago",
      need: "UX Engineer",
      job1: "Full-Time",
      job2: "Senior Level",
      pay: "$170/hr",
      area: "Pune, India"
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg",
      comp: "NVIDIA",
      time: "1 week ago",
      need: "Product UX Designer",
      job1: "Full-Time",
      job2: "Senior Level",
      pay: "$165/hr",
      area: "Bangalore, India"
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
      comp: "IBM",
      time: "3 days ago",
      need: "UI Engineer",
      job1: "Full-Time",
      job2: "Mid-Senior Level",
      pay: "$130/hr",
      area: "Pune, India"
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Oracle_logo.svg",
      comp: "Oracle",
      time: "5 days ago",
      need: "UX Designer",
      job1: "Full-Time",
      job2: "Senior Level",
      pay: "$135/hr",
      area: "Bangalore, India"
    }
  ];
  return (
    <div className="parent">
      {jobs.map((elem) => {
        return <Card1 img={elem.img} comp={elem.comp} time={elem.time} need={elem.need} job1={elem.job1} job2={elem.job2} pay={elem.pay} area={elem.area} />
      })}
    </div>
  )
}

export default App