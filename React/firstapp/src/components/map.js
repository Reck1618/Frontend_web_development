function MappingPractice(props){
    const temp = props.data.filter((item) => {
        return item.calories < 400
    }).sort((a, b) => {
            return a.calories - b.calories
    }).map((item) => {
            return <li>{item.name} - {item.calories}</li>
    })
    return <ul>{temp}</ul>
}

export default MappingPractice;