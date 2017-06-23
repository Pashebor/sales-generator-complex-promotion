import React, { Component } from 'react';
import {showModal, setTypeAudit} from '../../../actions/index';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import ScrollableAnchor from 'react-scrollable-anchor';

class WhatDoYouGet extends Component{
    callPopupHandler() {
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
            <ScrollableAnchor id={'what-do-you-get'}>
                <section className="wdyg">
                    <div className="container">
                        <h2 className="wdyg__title">ЧТО ВЫ ПОЛУЧИТЕ В РЕЗУЛЬТАТЕ:</h2>
                        <div className="wdyg-info">
                            <div className="wdyg-info__item">
                                <img src="images/growing.svg" alt="РОСТ ОРГАНИЧЕСКОГО ТРАФИКА" title="РОСТ ОРГАНИЧЕСКОГО ТРАФИКА" data-audit="РОСТ ОРГАНИЧЕСКОГО ТРАФИКА" onClick={this.callPopupHandler.bind(this)}/>
                                <h4>РОСТ ОРГАНИЧЕСКОГО ТРАФИКА</h4>
                                <p>Увеличиваем количество посетителей сайта <br/> в несколько раз</p>
                            </div>
                            <div className="wdyg-info__item">
                                <img src="images/hold-clients.svg" alt="УДЕРЖАНИЕ КЛИЕНТОВ" title="УДЕРЖАНИЕ КЛИЕНТОВ" data-audit="УДЕРЖАНИЕ КЛИЕНТОВ" onClick={this.callPopupHandler.bind(this)}/>
                                <h4>УДЕРЖАНИЕ КЛИЕНТОВ</h4>
                                <p>Ваши клиенты будут возвращаться к Вам <br/> снова и снова</p>
                            </div>
                            <div className="wdyg-info__item">
                                <img src="images/rise-sales.svg" alt="УВЕЛИЧЕНИЕ ПРОДАЖ С САЙТА" title="УВЕЛИЧЕНИЕ ПРОДАЖ С САЙТА"  data-audit="УВЕЛИЧЕНИЕ ПРОДАЖ С САЙТА" onClick={this.callPopupHandler.bind(this)}/>
                                <h4>УВЕЛИЧЕНИЕ ПРОДАЖ С САЙТА</h4>
                                <p>Повышаем конверсионность, превращая посетителей сайта <br/> в клиентов</p>
                            </div>
                            <div className="wdyg-info__item">
                                <img src="images/low-costs.svg" alt="СНИЖЕНИЕ РАСХОДОВ" title="СНИЖЕНИЕ РАСХОДОВ"  data-audit="СНИЖЕНИЕ РАСХОДОВ" onClick={this.callPopupHandler.bind(this)}/>
                                <h4>СНИЖЕНИЕ РАСХОДОВ</h4>
                                <p>Чем дольше мы с Вами работаем, тем дешевле обходятся <br/> Вам клиенты</p>
                            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(WhatDoYouGet);