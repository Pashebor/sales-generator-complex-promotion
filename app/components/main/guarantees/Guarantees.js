import React, { Component } from 'react';
import {showModal, setTypeAudit} from '../../../actions/index';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import ScrollableAnchor from 'react-scrollable-anchor';

class Guarantees extends Component{
    callPopupHandler(event) {
        this.props.setTypeAudit(event.target.getAttribute('data-audit'));
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
                            <img src="images/balance.svg" alt="ЮРИДИЧЕСКИЕ ГАРАНТИИ" title="ЮРИДИЧЕСКИЕ ГАРАНТИИ" data-audit="ЮРИДИЧЕСКИЕ ГАРАНТИИ" onClick={this.callPopupHandler.bind(this)}/>
                            <h4>ЮРИДИЧЕСКИЕ ГАРАНТИИ</h4>
                            <p>Весь объем выполняемых работ и результаты зафиксированы в договоре</p>
                        </div>
                        <div className="guarantees-info__item">
                            <img src="images/process.svg" alt="ПРОЗРАЧНОСТЬ ПРОЦЕССА" title="ПРОЗРАЧНОСТЬ ПРОЦЕССА" data-audit="ПРОЗРАЧНОСТЬ ПРОЦЕССА" onClick={this.callPopupHandler.bind(this)}/>
                            <h4>ПРОЗРАЧНОСТЬ ПРОЦЕССА</h4>
                            <p>Мы фиксируем контрольные точки и даем на них гарантию</p>
                        </div>
                        <div className="guarantees-info__item">
                            <img src="images/financial-guarantees.svg" alt="ФИНАНСОВЫЕ ГАРАНТИИ" title="ФИНАНСОВЫЕ ГАРАНТИИ"  data-audit="ФИНАНСОВЫЕ ГАРАНТИИ" onClick={this.callPopupHandler.bind(this)}/>
                            <h4>ФИНАНСОВЫЕ ГАРАНТИИ</h4>
                            <p>Мы вернем Вам все Ваши деньги если не достигнем результатов в срок</p>
                        </div>
                    </div>
                    <div className="btn-block">
                        <a href="#" className="btn">Скачать пример договора!</a>
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
    return bindActionCreators({showModal, setTypeAudit}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Guarantees);