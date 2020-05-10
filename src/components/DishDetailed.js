import React from 'react'
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


//component 1 for comments
function RenderComments({ comments, dish }) {
    if (comments != null)
        return (
            <Card>
                <CardBody>
                    <CardTitle> <h4 class="text-sm-left" >Comments</h4></CardTitle>
                    <CardText>
                        <ul class="list-unstyled">
                            {
                                comments.map((val, index) => {
                                    return (
                                        <div>
                                            <li class="text-sm-left pb-2" > {val.comment} </li>
                                            <li class="text-sm-left pb-3" paddi> --{val.author} {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(val.date)))} </li>
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


//component 2 for dish detail
function RenderDish({ dish }) {
    console.log(dish, 'in render dish')

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

// main component in which above are rendering
const DishDetail = (props) => {
    console.log(props.dish)
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish[0]} />
                </div>
                <div className="col-12 col-md-5 m-1">
                    <RenderComments comments={props.dish[0].comments} dish={props.dish[0]} />
                </div>

            </div>
        </div>
    )
}




export default DishDetail