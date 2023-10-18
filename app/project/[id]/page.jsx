import SinglePageProject from "@/app/components/SinglePageProject";

const getProjectById = async (id) => {
  const apiUrl = process.env.API_URL;

  try {
    const res = await fetch(`${apiUrl}/api/projects/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch project");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function PageProjectId({ params }) {
  const { id } = params;
  const { projects } = await getProjectById(id);
  const {
    title,
    entreprise,
    subTitle,
    year,
    description,
    shortDescription,
    technologies,
    siteWeb,
    image1,
    image2,
    image3,
  } = projects;

  return (
    <>
      <SinglePageProject
        id={id}
        title={title}
        entreprise={entreprise}
        subTitle={subTitle}
        year={year}
        description={description}
        shortDescription={shortDescription}
        technologies={technologies}
        siteWeb={siteWeb}
        image1={image1}
        image2={image2}
        image3={image3}
      />
    </>
  );
}
