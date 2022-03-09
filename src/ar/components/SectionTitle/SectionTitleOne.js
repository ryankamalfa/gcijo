const SectionTitleOne = ({ title, subtitle }) => {
  return (
    <div className="section-title-container text-center space-mb--r80x mb-3">
      <h2 className={`section-title ${subtitle ? "space-mb--20" : ""}`} style={{fontWeight: "lighter"}}>
        {title}
      </h2>
      {subtitle ? <h4 className="section-title--secondary">{subtitle}</h4> : ""}
    </div>
  );
};

export default SectionTitleOne;
