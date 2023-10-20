"use client";

import { useEffect, useState } from "react";
import DivProject from "./DivProject";
import Image from "next/image";
import loader from "../assets/images/XVo6.gif";

const AllProjects = () => {
  const [allProjectsArray, setAllProjectsArray] = useState([]);

  const getAllProjects = async () => {
    try {
      const response = await fetch("/api/projects");
      const data = await response.json();
      // Utiliser un nom de variable différent
      
      setAllProjectsArray(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProjects();
  }, []); // Vous n'avez pas besoin de déclencher getAllProjects lorsque allProjectsArray change

  if (!allProjectsArray || allProjectsArray.length === 0) {
    return (
      <Image
        style={{ margin: "0 auto" }}
        src={loader}
        width={100}
        height={100}
        alt="Loader sablier"
      />
    );
  }

  return allProjectsArray.map((project) => (
    <DivProject key={project._id} project={project} />
  ));
};

export default AllProjects;
