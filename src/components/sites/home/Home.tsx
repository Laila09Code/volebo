import SidebarElement from "../../sidebar-element/SidebarElement";

function Home() {
    return (
        <div className="grid">
            <div className="main">
                <p style={{ color: "red" }}>So styled man CSS Inline.</p>
                <p className="laila">So styled man CSS mit einer CSS Klasse aus einem anderen File zum Beispiel.</p>
            </div>
            <div className="sidebar">
                <SidebarElement title="Migros-Vereinsbons"></SidebarElement>
                <SidebarElement title="NEWS"></SidebarElement>
                <SidebarElement title="Corona-Schutzkonzept"></SidebarElement>
            </div>
        </div>
    )
}

export default Home