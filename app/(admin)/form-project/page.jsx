"use client";

import FormDivProject from "@/app/utils/FormDivProject";
import styles from "../../style/pages/projectPage.module.css";
import FormTextProject from "@/app/utils/FormTextProject";
import { useState } from "react";
import { useRouter } from "next/navigation";

const FormProjects = () => {
  const [formData, setFormData] = useState({
    title: "",
    subTitle: "",
    entreprise: "",
    year: "",
    description: "",
    shortDescription: "",
    technologies: "",
    siteWeb: "",
    image1: "",
    image2: "",
    image3: "",
  });

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/projects", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          title: formData.title,
          subTitle: formData.subTitle,
          entreprise: formData.entreprise,
          year: formData.year,
          description: formData.description,
          shortDescription: formData.shortDescription,
          technologies: formData.technologies,
          siteWeb: formData.siteWeb,
          image1: formData.image1,
          image2: formData.image2,
          image3: formData.image3,
        }),
      });

      if (res.ok) {
        alert("Projet créé");
        setFormData({ ...formData, title: ""})        
        setFormData({ ...formData, subTitle: ""})        
        router.refresh()        
        router.push("/form-project");
      } else {
        throw new Error("failed to fetch");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1 className={styles["h1-project"]}>Ajouter un nouveau projet</h1>
      <form onSubmit={handleSubmit} className={styles.formProjet}>
        <FormDivProject
          htmlFor="title"
          label="Titre"
          type="text"
          id="title"
          placeholder="Titre du projet"
          onChange={(value) => setFormData({ ...formData, title: value })}
        />
        <FormDivProject
          htmlFor="subtitle"
          label="Sous Titre"
          type="text"
          id="subtitle"
          placeholder="Sous Titre du projet"
          onChange={(value) => setFormData({ ...formData, subTitle: value })}
        />
        <FormDivProject
          htmlFor="entreprise"
          label="Entreprise"
          type="text"
          id="entreprise"
          placeholder="Entreprise"
          onChange={(value) => setFormData({ ...formData, entreprise: value })}
        />
        <FormDivProject
          htmlFor="year"
          label="Années"
          type="text"
          id="year"
          placeholder="Année du projet"
          onChange={(value) => setFormData({ ...formData, year: value })}
        />
        <FormTextProject
          htmlFor="description"
          label="Description"
          id="description"
          placeholder="Entrez votre description"
          onChange={(value) => setFormData({ ...formData, description: value })}
        />
        <FormTextProject
          htmlFor="shortDescription"
          label="Petit Description"
          id="shortDescription"
          placeholder="Décrire de façon courte le projet"
          onChange={(value) =>
            setFormData({ ...formData, shortDescription: value })
          }
        />
        <FormTextProject
          htmlFor="technologies"
          label="Technos"
          id="technologies"
          placeholder="Quelles sont les technos utilisés"
          onChange={(value) =>
            setFormData({ ...formData, technologies: value })
          }
        />
        <FormDivProject
          htmlFor="site"
          label="Site web"
          type="text"
          id="site"
          placeholder="lien du site"
          onChange={(value) => setFormData({ ...formData, siteWeb: value })}
        />
        <FormDivProject
          htmlFor="image1"
          label="Image 1"
          type="text"
          id="image1"
          placeholder="lien de l'image 1"
          onChange={(value) => setFormData({ ...formData, image1: value })}
        />
        <FormDivProject
          htmlFor="image2"
          label="Image 2"
          type="text"
          id="image2"
          placeholder="lien de l'image 2"
          onChange={(value) => setFormData({ ...formData, image2: value })}
        />
        <FormDivProject
          htmlFor="image3"
          label="Image 3"
          type="text"
          id="image3"
          placeholder="lien de l'image 3"
          onChange={(value) => setFormData({ ...formData, image3: value })}
        />
        <button type="submit">Valider</button>
      </form>
    </>
  );
};

export default FormProjects;
