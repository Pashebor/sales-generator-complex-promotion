import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import {setApproachItem} from '../../../actions'

class ApproachNav extends React.Component{
    hoverPaginHandler(event) {
        this.props.setApproachItem(parseInt(event.target.getAttribute('value')));
    }
    render() {
        return(
            <div className="approach-types-wrapper" ref="pagins">
                <div className={`approach-types__item ${this.props.approachesState === 1 ? ' approach-types__item--active': null}`} value={1} ref={'paginator1'} onMouseEnter={this.hoverPaginHandler.bind(this)}>1</div>
                <div className={`approach-types__item ${this.props.approachesState === 2 ? ' approach-types__item--active': null}`} value={2} ref={'paginator2'} onMouseEnter={this.hoverPaginHandler.bind(this)}>2</div>
                <div className={`approach-types__item ${this.props.approachesState === 3 ? ' approach-types__item--active': null}`} value={3} ref={'paginator3'} onMouseEnter={this.hoverPaginHandler.bind(this)}>3</div>
                <div className={`approach-types__item ${this.props.approachesState === 4 ? ' approach-types__item--active': null}`} value={4} ref={'paginator4'} onMouseEnter={this.hoverPaginHandler.bind(this)}>4</div>
                <div className={`approach-types__item ${this.props.approachesState === 5 ? ' approach-types__item--active': null}`} value={5} ref={'paginator5'} onMouseEnter={this.hoverPaginHandler.bind(this)}>5</div>
                <div className={`approach-types__item ${this.props.approachesState === 6 ? ' approach-types__item--active': null}`} value={6} ref={'paginator6'} onMouseEnter={this.hoverPaginHandler.bind(this)}>6</div>
                <div className={`approach-types__item ${this.props.approachesState === 7 ? ' approach-types__item--active': null}`} value={7} ref={'paginator7'} onMouseEnter={this.hoverPaginHandler.bind(this)}>7</div>
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        approachesState: store.approachReducer.approachItem
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({setApproachItem}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ApproachNav);