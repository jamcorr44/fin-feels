import * as React from "react";
import PersonInterface from './PersonInterface';
import { Link } from 'react-router-dom';

class ProfileBubble extends React.Component<PersonInterface, {}> {

	constructor (props: PersonInterface){
		super(props);
	}
  
  	render() {
    	return (
			<div className="profile">
                        <img src={this.props.image} width="140"/>
                             <div><Link to='/profile'>{this.props.name}</Link></div>

			</div>
        );
	}
}

export default ProfileBubble;