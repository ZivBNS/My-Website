const SkillsCard = ({ title, icon, text }) => {
  return (
    <div>
      <i className="h-16 w-16">{icon} </i>
      <h5 className="mt-6 font-bold text">{title}</h5>
      <p className="mt-2 sub-text">{text}</p>
    </div>
  );
};
export default SkillsCard;
