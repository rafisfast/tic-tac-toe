import React, {Component} from 'react'

class TableHeader extends Component {
    render() {
        return (
            <thead>
                <tr>
                    <th>Job</th>
                    <th>Name</th>
                </tr>
            </thead>
        )
    }
}

const TableBody = (props) => {
    const rows = props.characterData.map((row,index) => {
        console.log(index)
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td><button onClick={() => props.removeCharacter(index)}>Delete</button></td>
            </tr>
        )
    }) 

    return (
        <tbody>{rows}</tbody>
    )
}

/*const TableBody = (props) => {
    console.log(props.characterData)
    const rows = props.characterData.map((row,index) => {
        return (
            <tbody>
                <tr key={index}>
                    <td>{row.name}</td>
                    <td>{row.job}</td>
                </tr>
            </tbody>
        )
    })

    return <tbody>{rows}</tbody>
}*/

const Table = (props) => {

    const {characterData, removeCharacter} = props

    return (
        <table>
            <TableHeader />
            <TableBody characterData={characterData} removeCharacter={removeCharacter} />
        </table>
    )
}

export default Table