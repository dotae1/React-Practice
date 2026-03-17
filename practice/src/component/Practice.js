import './Practice.css'

function Practice({
    img,
    tags,
    title,
    firstDate,
    types
}) {
    return (
        <div className = "Practice">
            <div className = "cover">
                <img alt ="" src = {img} />
            </div>
            <div className = "info">
                <ul className="tags">
                    {tags.map((item, i) => (
                        <li key = {i} class="tag">{item}</li>
                    ))}
                </ul>
                <h4 className="name">{title}</h4>
                <h2 className="firstDate">{firstDate}</h2>
                <ul className = "types">
                    {types.map((item, i) => ( 
                        <li key = {i} class="type">{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
export default Practice;