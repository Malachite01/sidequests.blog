export type WindowProps = {
  icon: string
  title: string
  content?: React.ReactNode
}



function Window({icon, title, content}: WindowProps) {

  return (
    <div className="window">
      <div className="window-bar">
        <div className="window-bar-title">{icon} {title}</div>
        <div className="window-icons">
          <span title="no can do boss 0_0">󰖰</span>
          <span title="no can do boss 0_0">󰖯</span>
          <span title="no can do boss 0_0">󰖭</span>
        </div>
      </div>

      <div className="window-content">
        <span className="window-tag">
          <span>Malachite01</span>@<span>BlooSky:~$ </span>
        </span>
        <div className="window-body">{content}</div>
      </div>
    </div>
  );
}

export default Window
