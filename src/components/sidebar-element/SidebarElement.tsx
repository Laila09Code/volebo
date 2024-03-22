import './SidebarElement.css'

function SidebarElement(props: any) {
    return (
        <div className="sidebar-element">
            <h3>{props.title}</h3>
            <div className="green-bar" />
            <div>
                {props.children}
            </div>
        </div>
    )
}

export default SidebarElement;