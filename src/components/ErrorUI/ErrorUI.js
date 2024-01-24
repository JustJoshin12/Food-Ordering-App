import "../ErrorUI/ErrorUI.css"

function ErrorUI({title, message}) {
return(
    <div className="error">
        <h2 className="error-title">{title}</h2>
        <p className="error-description">{message}</p>
    </div>
)
}

export default ErrorUI