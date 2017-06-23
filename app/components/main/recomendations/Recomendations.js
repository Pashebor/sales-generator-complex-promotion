import React, { Component } from 'react';
import {showModal} from '../../../actions/index';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import ScrollableAnchor from 'react-scrollable-anchor';

class Recomendations extends Component{
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
            <ScrollableAnchor id={'recomendations'}>
                <section className="recomendations">
                    <div className="container">
                        <h2 className="recomendations__title">ПОЧЕМУ 87% КЛИЕНТОВ ПРИХОДЯТ К НАМ ПО РЕКОМЕНДАЦИИ:</h2>
                        <div className="recomendations-info">
                            <div className="recomendations-info__item">
                                <img src="images/cash-back.svg" alt="ВОЗВРАТ ИНВЕСТИЦИЙ" title="ВОЗВРАТ ИНВЕСТИЦИЙ" data-audit="ВОЗВРАТ ИНВЕСТИЦИЙ" onClick={this.callPopupHandler.bind(this)}/>
                                <h4>ВОЗВРАТ ИНВЕСТИЦИЙ</h4>
                                <p>Мы рассчитываем окупаемость инвестиций для каждого проекта</p>
                            </div>
                            <div className="recomendations-info__item">
                                <img src="images/specific-result.svg" alt="КОНКРЕТНЫЙ РЕЗУЛЬТАТ" title="КОНКРЕТНЫЙ РЕЗУЛЬТАТ" data-audit="КОНКРЕТНЫЙ РЕЗУЛЬТАТ" onClick={this.callPopupHandler.bind(this)}/>
                                <h4>КОНКРЕТНЫЙ РЕЗУЛЬТАТ</h4>
                                <p>Прописываем в договоре <br/> результат по трафику</p>
                            </div>
                            <div className="recomendations-info__item">
                                <img src="images/specialists-team.svg" alt="КОМАНДА СПЕЦИАЛИСТОВ" title="КОМАНДА СПЕЦИАЛИСТОВ"  data-audit="КОМАНДА СПЕЦИАЛИСТОВ" onClick={this.callPopupHandler.bind(this)}/>
                                <h4>КОМАНДА СПЕЦИАЛИСТОВ</h4>
                                <p>Над Вашим сайтом будет работать группа от 5 до 9 специалистов</p>
                            </div>
                            <div className="recomendations-info__item">
                                <img src="images/aim-auditory.svg" alt="ТОЛЬКО ЦЕЛЕВАЯ АУДИТОРИЯ" title="ТОЛЬКО ЦЕЛЕВАЯ АУДИТОРИЯ"  data-audit="ТОЛЬКО ЦЕЛЕВАЯ АУДИТОРИЯ" onClick={this.callPopupHandler.bind(this)}/>
                                <h4>ТОЛЬКО ЦЕЛЕВАЯ АУДИТОРИЯ</h4>
                                <p>Продвижение только по целевым запросам, согласованным с Вами</p>
                            </div>
                            <div className="recomendations-info__item">
                                <img src="images/individual-approach.svg" alt="ИНДИВИДУАЛЬНЫЙ ПОДХОД" title="ИНДИВИДУАЛЬНЫЙ ПОДХОД"  data-audit="ИНДИВИДУАЛЬНЫЙ ПОДХОД" onClick={this.callPopupHandler.bind(this)}/>
                                <h4>ИНДИВИДУАЛЬНЫЙ ПОДХОД</h4>
                                <p>Над каждым проектом работает персональный менеджер</p>
                            </div>
                            <div className="recomendations-info__item">
                                <img src="images/key-site.svg" alt="РАБОТА НАД САЙТОМ ПОД КЛЮЧ" title="РАБОТА НАД САЙТОМ ПОД КЛЮЧ"  data-audit="РАБОТА НАД САЙТОМ ПОД КЛЮЧ" onClick={this.callPopupHandler.bind(this)}/>
                                <h4>РАБОТА НАД САЙТОМ ПОД КЛЮЧ</h4>
                                <p>Вы забываете о сайте <br/> и просто получаете заявки</p>
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
    return bindActionCreators({showModal}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Recomendations);