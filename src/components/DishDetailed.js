import React, { Component } from 'react'
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    renderComments(dish,comments) {
        if (comments != null)
            return (
                <Card>
                    <CardBody>
                        <CardTitle> <h4  class="text-sm-left" >Comments</h4></CardTitle>
                        <CardText>
                            <ul class="list-unstyled">
                                {
                                    comments.map((val, index) => {
                                        return (
                                            <div>
                                                <li  class="text-sm-left pb-2" > {val.comment} </li>
                                                <li class="text-sm-left pb-3" paddi> --{val.author } {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(val.date)))} </li>
                                            </div>
                                        )
                                    })
                                }
                            </ul>
                        </CardText>
                    </CardBody>
                </Card>
            );
        else
            return (
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>No Comments Yet For this</CardTitle>
                    </CardBody>
                </Card>
            )

    }
    renderDish(dish) {

        if (dish != null)
            return (
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>


            );
        else
            return (
                <div></div>
            );
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.dish[0])}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(this.props.dish,this.props.dish[0].comments)}
                    </div>

                </div>
            </div>
        )
    }
}

export default DishDetail