import './Style.css'
const Card = ({id,title,event_date_utc,links}) => {
    return (<div key = {id}>
        <ul  >
            {id}
        <strong>{title}</strong>
            {event_date_utc}
            <a href= {links.article} target = '_blank'>link</a>
        </ul>


    </div>)

}
export default Card;