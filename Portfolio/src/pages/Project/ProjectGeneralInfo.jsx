import ProjectPeopleInfo from "./ProjectPeopleInfo";
import PropTypes from "prop-types";

const ProjectGeneralInfo = ({ project }) => {
  const {
    title,
    description,
    imageUrl,
    image2Url,
    image3Url,
    image4Url,
    client,
    startingDate,
    endingDate,
    people,
  } = project;

  return (
    <div>
      <h1>{title}</h1>
      <p>Project description: {description}</p>
      <p className="imageP">
        <img src={imageUrl} alt={title} />
      </p>
      <p className="imageP">
        <img src={image2Url} alt={title} />
      </p>
      <p className="imageP">
        <img src={image3Url} alt={title} />
      </p>
      <p className="imageP">
        <img src={image4Url} alt={title} />
      </p>
    </div>
  );
};

ProjectGeneralInfo.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    client: PropTypes.string.isRequired,
    startingDate: PropTypes.string.isRequired,
    endingDate: PropTypes.string.isRequired,
    people: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        surname: PropTypes.string.isRequired,
        position: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
};

export default ProjectGeneralInfo;
