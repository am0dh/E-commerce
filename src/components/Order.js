import React from 'react';
import './Order.css'

const Order = (props) => {
    return (
        <div className="panel panel-default">
        <div className="panel-heading" role="tab" id={`heading${props.id}`}>
          <h4 className="panel-title">
          <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href={`#collapse${props.id}`} aria-expanded="false" aria-controls={`collapse${props.id}`}>
            Collapsible Group Item #2
          </a>
        </h4>
        </div>
        <div id={`collapse${props.id}`} className="panel-collapse collapse" role="tabpanel" aria-labelledby={`heading${props.data}`}>
          <div className="panel-body">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
            on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table,
            raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
          </div>
        </div>
      </div>
    );
};

export default Order;