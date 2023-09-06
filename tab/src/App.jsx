import { useEffect, useState } from "react";
import JobInfo from "./JobInfo";
import BtnContainer from "./BtnContainer";






const url = 'https://course-api.com/react-tabs-project';

const App = () => {
  const[isLoading,setIsLoading]=useState(true)
  const [jobs, setJobs] = useState([]);
  const[currentItem,setCurrentItem]=useState(1)
  // current item


  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setIsLoading(false);
  }
  useEffect(() => {
    fetchJobs();
    
  }, []);
  if (isLoading) {
    return <section className="job-center">
      <div className="loading"></div>
    </section>
  }
  return <section className="job-center">
    {/* btn container */}
    <BtnContainer jobs={jobs} currentItem={currentItem} setCurrentItem={setCurrentItem} />
    {/* jobInfo */}
    <JobInfo jobs={jobs} currentItem={currentItem}  />
    </section>;
};
export default App;
