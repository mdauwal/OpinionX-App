import React from "react";

function Entry (props) {
    return (
        <div className="term">
          <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">{props.emoji}
            </span>
            <span>{props.heading}</span>
          </dt>
          <dd>{props.subheading}
          </dd>
        </div>
    )
}


export default Entry