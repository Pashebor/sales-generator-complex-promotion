import React from 'react';
import {connect} from 'react-redux';
import {sendClientsCallback, workPlanShow, showModal} from '../../../actions/index';
import { bindActionCreators } from 'redux';
import ScrollableAnchor from 'react-scrollable-anchor';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PreparePromotion from './stages/PreparePromotion';
import InnerOuterOptimization from './stages/InnerOuterOptimization';
import SemanticCore from './stages/SemanticCore';
import ExpertContent from './stages/ExpertContent';
import Conversion from './stages/Conversion';
import WorkInsurance from './WorkInsurance';

class WorkStages extends React.Component{
    constructor(props) {
        super(props);
        this.orderWorkPlanHandler = this.orderWorkPlanHandler.bind(this);
    }

    orderWorkPlanHandler () {
        this.props.workPlanShow(true);
        this.props.showModal(true);
    }


    render() {
        return(
            <ScrollableAnchor id={'work-stages'}>
            <section className="work-stages">
             <div className="container">
                <h2 className="work-stages__title">Этапы работ:</h2>
                 <BrowserRouter>
                   <Switch>
                     <Route exact path={'/'} component={PreparePromotion}/>
                     <Route path={'/optimization'} component={InnerOuterOptimization}/>
                     <Route path={'/semantic-core'} component={SemanticCore}/>
                     <Route path={'/expert-content'} component={ExpertContent}/>
                     <Route path={'/conversion'} component={Conversion}/>
                   </Switch>
                 </BrowserRouter>
                 <WorkInsurance/>
             </div>
            </section>
                </ScrollableAnchor>
        )
    }
}


const mapStateToProps = (store) => {
    return {
        formState: store.salesReducer
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({sendClientsCallback, workPlanShow, showModal}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(WorkStages);
