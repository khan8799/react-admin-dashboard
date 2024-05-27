import "./SummaryHeader.css";

function SummaryHeader() {
  const name = "Dashboard";
  const rightMenu = ['overview1', ];
  return (
    <>
      <div className="page-header">
        <h3 className="page-title">
          <span className="page-title-icon bg-gradient-primary text-white me-2">
            <i className="mdi mdi-home"></i>
          </span>
          {name}
        </h3>
        {
              rightMenu.length > 1 && 
              <nav aria-label="breadcrumb">
                <ul className="breadcrumb">
                  {rightMenu.map((item) => (
                    <li className="breadcrumb-item active" aria-current="page">
                      {item}
                      <i className="mdi mdi-alert-circle-outline icon-sm text-primary align-middle"></i>
                    </li>
                  ))}
                </ul>
              </nav>
        }
      
      </div>
    </>
  );
}

export default SummaryHeader;
