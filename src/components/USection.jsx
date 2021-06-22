import React from "react";

function USection(){
    return(
        <div className="uSectionDiv container-fluid">
            <div className="Div1 row">
                <div className="Div1Left DivLeft uSectionTextDiv col-lg-6 col-md-12">
                    <h2>Transform your brand</h2>
                    <p>We are a full-service creative agency specializing in helping brands grow fast. Engage your client through compelling visuals that do most of the marketing for you.</p>
                    <p className="LMore"><a><b>LEARN MORE</b></a></p>
                </div>
                <div className="Div1Right DivRight col-lg-6 col-md-12">
                </div>
            </div>
            <div className="Div2 row">
                <div className="Div2Left DivLeft col-lg-6 col-md-12">

                </div>
                <div className="Div2Right DivRight uSectionTextDiv col-lg-6 col-md-12">
                    <h2>Stand out to the right audience</h2>
                    <p>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places. </p>
                    <p className="LMore"><a><b>LEARN MORE</b></a></p>
                </div>
            </div>
            <div className="Div3 row">
                <div className="Div3Left DivLeft uSectionTextDiv col-lg-6 col-md-12">                    
                    <h2>Graphic Design</h2>
                    <p>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention. </p>
                </div>
                <div className="Div3Right DivRight uSectionTextDiv col-lg-6 col-md-12">                    
                    <h2>Photography</h2>
                    <p>Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>

                </div>
            </div>
        </div>
    );
}

export default USection;