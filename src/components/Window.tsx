export type WindowProps = {
  title: string
  content?: React.ReactNode
}



function Window({title, content}: WindowProps) {

  return (
    <div className="window">
      <div className="window-bar">
        <div className="window-bar-title">󰍹 {title}</div>
        <div className="window-icons">
          <span>󰖰</span>
          <span>󰖯</span>
          <span>󰖭</span>
        </div>
      </div>

      <div className="window-content">
        <span className="window-tag">
          <span>Malachite01</span>@<span>BlooSky:~$ </span>
        </span>
        {" " + content}
      </div>
    </div>
  );
}

export default Window
