import './SidebarElement.css'

function SidebarElement(props: any) {
    return (
        <div className="sidebar">
            <h2>{props.title}</h2>
        </div>
    )
}

export default SidebarElement;