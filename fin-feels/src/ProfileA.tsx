import * as React from 'react';
import { Card, CardText, CardBody,
  CardTitle, CardSubtitle, CardImg } from 'reactstrap';
import { Link } from 'react-router-dom';
var girl = '/images/girl0.jpeg';

class ProfileA extends React.Component {
  public render() {
    return (
      <div>
         <Card>
              <CardImg top width="140" src={girl} alt="Card image cap" />
              <CardBody>
                <CardTitle>Jamie Corr</CardTitle>
                <CardSubtitle>Los Angeles</CardSubtitle>
                <CardText>I miss home.</CardText>
              </CardBody>
            </Card>
            <div><Link to='/'>Home</Link></div>
       </div>

    );
  }
}

export default ProfileA;