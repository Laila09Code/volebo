import SidebarElement from "../../sidebar-element/SidebarElement";

function Mixed() {
    return (
        <div className="grid">
            <div className="main">
                <h1>Mixed</h1>
            </div>
            <div className="sidebar">
                <SidebarElement title="Migros-Vereinsbons"></SidebarElement>
                <SidebarElement title="NEWS"></SidebarElement>
            </div>
        </div>
    )
}

export default Mixed