function Breadcrumbs({ name, rightMenu }) {
    console.log(rightMenu);
    return (
        <div className="page-header">
            <h3 className="page-title">
                <span className="page-title-icon bg-gradient-primary text-white me-2">
                    <   i className="mdi mdi-home"></i>
                </span>
                {name}
            </h3>

            {/* {
                rightMenu.length < 0 &&
                <nav aria-label="breadcrumb">
                    <ul className="breadcrumb">
                        <li className="breadcrumb-item active" aria-current="page">
                            <span></span>Overview <i className="mdi mdi-alert-circle-outline icon-sm text-primary align-middle"></i>
                        </li>
                    </ul>
                </nav>
            } */}

            {
                rightMenu.length ? 
                <nav aria-label="breadcrumb">
                    <ul className="breadcrumb">
                        <li className="breadcrumb-item active" aria-current="page">
                            <span></span>Overview <i className="mdi mdi-alert-circle-outline icon-sm text-primary align-middle"></i>
                        </li>
                    </ul>
                </nav> :
                ''
            }


        </div>
    )
}

export default Breadcrumbs;