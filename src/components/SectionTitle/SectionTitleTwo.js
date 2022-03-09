const SectionTitleTwo = ({ title, subtitle }) => {
  return (
    <div className="section-title-container text-center space-mb--r80">
      {subtitle ? <h4 className="section-title--secondary">{subtitle}</h4> : ""}
      <h1 className={`title ${subtitle ? "space-mt--20" : ""}`} style={{ fontWeight: 'normal'}}>
        {title}
      </h1>
    </div>
  );
};

export default SectionTitleTwo;
