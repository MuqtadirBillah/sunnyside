import React from "react";

function Testimonials(){
    return(
        <div className="testimonialsDiv container">
            <h1 className="testHeading">CLIENT TESTIMONIALS</h1>
            <div className="row">
                <div className="client1 client col-lg-4 col-md-12 col-sm-12">
                    <img src="../images/image-emily.jpg" alt="" />
                    <p className="clientComment">We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
                    <p className="clientName">Emily R.<br /><sub>Chief Operating Officer</sub></p>
                </div>
                <div className="client2 client col-lg-4 col-md-12 col-sm-12">
                    <img src="../images/image-thomas.jpg" alt="" />
                    <p className="clientComment">Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.</p>
                    <p className="clientName">Thomas S.<br /><sub>Chief Operating Officer</sub></p>
                </div>
                <div className="client3 client col-lg-4 col-md-12 col-sm-12">
                    <img src="../images/image-jennie.jpg" alt="" />
                    <p className="clientComment">Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!</p>
                    <p className="clientName">Jennie F.<br /><sub>Chief Operating Officer</sub></p>
                </div>
            </div>
        </div>
    );
}

export default Testimonials;