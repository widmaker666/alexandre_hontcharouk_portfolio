"use client";

import { useEffect, useState } from "react";
import DivProject from "./DivProject";

const AllProjects = () => {
    const [allProjectsArray, setAllProjectsArray] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    
    const getAllProjects = async () => {

      try {
        setIsLoading(true);
        const response = await fetch("/api/projects");
        const data = await response.json(); // Utiliser un nom de variable différent
        console.log(data);
        setAllProjectsArray(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

  useEffect(() => {
    getAllProjects();
  }, []); // Vous n'avez pas besoin de déclencher getAllProjects lorsque allProjectsArray change

  if (isLoading) {
    return <div>isloading</div>;
  }

  if (!allProjectsArray || allProjectsArray.length === 0) {
    return <p>There are no projects.</p>;
  }
  
  return allProjectsArray.map((project) => (
    <DivProject key={project._id} project={project} />
  ));
};

export default AllProjects;
