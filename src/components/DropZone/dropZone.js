import React from 'react'
// import { StyledDropZone } from 'react-drop-zone'
import 'react-drop-zone/dist/styles.css'
import './dropZone.css'  

export default class DropZoneClass extends React.Component{
    // const classes = useStyles();
    constructor(props) {
        super(props)
        this.state = {
            file: ''
        }
    }

    render(){
        return (
            <div>
                <StyledDropZone onDrop={this.props.onDrop} />
            </div>
        )
    }
}