import React from 'react';
import {showModal, contractShow} from '../../../actions/index';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import ScrollableAnchor from 'react-scrollable-anchor';

class Guarantees extends React.Component{
    constructor(props) {
        super(props);
        this.callPopupHandler = this.callPopupHandler.bind(this);
        this.orderAnContractHandler = this.orderAnContractHandler.bind(this);
    }

    orderAnContractHandler() {
        this.props.contractShow(true);
        this.props.showModal(true);
    }

    callPopupHandler(event) {
        this.props.showModal(true);
        /*switch (event.target.getAttribute('data-audit')) {
            case 'Поднять позиции в поисковых системах':
                yaCounter44418460.reachGoal('RAISE_POSITION'); return true;
                break;
            case 'Увеличить число новых клиентов':
                yaCounter44418460.reachGoal('INCREASE'); return true;
                break;
            case 'Уменьшить стоимость привлечения клиентов':
                yaCounter44418460.reachGoal('CUT_COST'); return true;
                break;
        }*/
    }
    render() {
        return(
            <ScrollableAnchor id={'guarantees'}>
            <section className="guarantees">
                <div className="container">
                    <h2 className="guarantees__title">МЫ ДАЕМ ГАРАНТИИ, КОТОРЫЕ НЕ МОГУТ СЕБЕ ПОЗВОЛИТЬ 95% КОМПАНИЙ:</h2>
                    <div className="guarantees-info">
                        <div className="guarantees-info__item">
                            <img src="images/balance.svg" alt="ЮРИДИЧЕСКИЕ ГАРАНТИИ" title="ЮРИДИЧЕСКИЕ ГАРАНТИИ"  onClick={this.callPopupHandler}/>
                            <h4>ЮРИДИЧЕСКИЕ ГАРАНТИИ</h4>
                            <p>Весь объем выполняемых работ и результаты зафиксированы в договоре</p>
                        </div>
                        <div className="guarantees-info__item">
                            <img src="images/process.svg" alt="ПРОЗРАЧНОСТЬ ПРОЦЕССА" title="ПРОЗРАЧНОСТЬ ПРОЦЕССА" onClick={this.callPopupHandler}/>
                            <h4>ПРОЗРАЧНОСТЬ ПРОЦЕССА</h4>
                            <p>Мы фиксируем контрольные точки <br/>и даем на них гарантию</p>
                        </div>
                        <div className="guarantees-info__item">
                            <img src="images/financial-guarantees.svg" alt="ФИНАНСОВЫЕ ГАРАНТИИ" title="ФИНАНСОВЫЕ ГАРАНТИИ"   onClick={this.callPopupHandler}/>
                            <h4>ФИНАНСОВЫЕ ГАРАНТИИ</h4>
                            <p>Мы вернем Вам все Ваши деньги если не достигнем результатов в срок</p>
                        </div>
                    </div>
                    <div className="btn-block">
                        <button className="btn" onClick={this.orderAnContractHandler}>Скачать пример договора!</button>
                    </div>
              </div>
                <div className="separatorbottom">
                    <svg version="1.1" id="bottom-triangle" viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M 0 100 H 100 V 0 H 58.5 L 50 100 L 41.5 0 H 0 Z"></path></svg>
                </div>
            </section>
            </ScrollableAnchor>
        );
    }
}

const mapStateToProps = (store) => {
    return {
        formState: store.salesReducer
    }
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({showModal, contractShow}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Guarantees);