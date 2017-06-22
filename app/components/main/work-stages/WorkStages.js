import React from 'react';
import {connect} from 'react-redux';
import {sendClientsCallback} from '../../../actions/index';
import { bindActionCreators } from 'redux';
import MaskedInput from 'react-maskedinput';
import ScrollableAnchor from 'react-scrollable-anchor';

class WorkStages extends React.Component{

    btnSubmitHandler(e) {
        e.preventDefault();
        let formData = {'form-name': 'know'};
        for (let field in this.refs) {
            formData[field] = this.refs[field].mask.getValue();
        }
        this.props.sendClientsCallback(formData);
        /*yaCounter44418460.reachGoal('KNOW');*/
        return true;
    }

    clientsNotification() {
        let response = this.props.formState.clientsResp;
        let notification = (resp) => {
            switch (resp.response) {
                case true:
                    return <h5 className="know-form__notification">Ваша заявка принята, с Вами свяжется наш менеджер</h5>;
                    break;
                case false:
                    return <h5 className="know-form__notification know-form__notification--error">Произошла ошибка отправки письма</h5>;
                    break;
            }
        };

        if (response) {
            return notification(response);
        } else {
            return false;
        }
    }

    render() {
        return(
            <ScrollableAnchor id={'work-stages'}>
            <section className="work-stages">
             <div className="container">
                <h2 className="work-stages__title">Этапы работ:</h2>
              <div className="stage-count">
                <div className="stage">
                    <h4 className="stage__title">ПОДГОТОВКА САЙТА К ПРОДВИЖЕНИЮ</h4>
                    <div className="stage__description">
                        <ul>
                            <li>Установка и настройка панели вебмастера Яндекс и Google</li>
                            <li>Установка счетчиков (Яндекс. Метрики и Google аналитики)</li>
                            <li>Настройка целей в веб-аналитике</li>
                            <li>Создание и/или настройка файла sitemap.xml</li>
                            <li>Создание и/или настройка файла robots.txt</li>
                            <li>Составление карты метатегов (title, h1, description, h2-h6, keywords, alt)</li>
                            <li>Настройка ЧПУ ссылок (url)</li>
                        </ul>
                        <figure>
                            <img alt="ПОДГОТОВКА САЙТА К ПРОДВИЖЕНИЮ" title="ПОДГОТОВКА САЙТА К ПРОДВИЖЕНИЮ" src="images/prepare.png"/>
                        </figure>
                    </div>
                </div>
                  <ScrollableAnchor id={'two'}>
                      <a className="arrow-down" href="#two"></a>
                  </ScrollableAnchor>
              </div>
              <div className="stage-count">
                  <div className="stage">
                      <h4 className="stage__title">ВНЕШНЯЯ И ВНУТРЕННЯЯ ОПТИМИЗАЦИЯ САЙТА</h4>
                      <div className="stage__description">
                          <ul>
                              <li>Анализ и наращивание ссылочной массы для вашего сайта</li>
                              <li>Исправление технических ошибок сайта</li>
                              <li>Оптимизация скорости загрузки</li>
                              <li>Совершенствование и улучшение юзабилити ресурса</li>
                              <li>Адаптация сайта под мобильные устройства</li>
                              <li>Оптимизация мета-тегов</li>
                              <li>Реализация внутренней перелинковки</li>
                              <li>Построение ссылочного профиля</li>
                          </ul>
                          <figure>
                              <img alt="ВНЕШНЯЯ И ВНУТРЕННЯЯ ОПТИМИЗАЦИЯ САЙТА" title="ВНЕШНЯЯ И ВНУТРЕННЯЯ ОПТИМИЗАЦИЯ САЙТА" src="images/optimization.png"/>
                          </figure>
                      </div>
                  </div>
                  <ScrollableAnchor id={'three'}>
                      <div className="btn-block">
                          <a href="#" className="btn">Скачать пример плана работ на 2 месяца! PDF, 2.5 мб.</a>
                      </div>
                  </ScrollableAnchor>
                  <a className="arrow-down" href="#three"></a>
              </div>
                 <div className="stage-count">

                     <div className="stage">
                         <h4 className="stage__title">СОСТАВЛЕНИЕ СЕМАНТИЧЕСКОГО ЯДРА</h4>
                         <div className="stage__description">
                             <ul>
                                 <li>Анализ специфики бизнеса на основе брифа</li>
                                 <li>Подготовка и согласование базовых запросов</li>
                                 <li>Оценка Ваших конкурентов</li>
                                 <li>Проверка конкурентности запросов</li>
                                 <li>Формирование расширенного списка основных запросов</li>
                                 <li>Сортирование запросов по частоте</li>
                                 <li>Утверждение групп запросов Вашей целевой аудитории</li>
                                 <li>Составление финального семантического ядра</li>
                             </ul>
                             <figure>
                                 <img alt="СОСТАВЛЕНИЕ СЕМАНТИЧЕСКОГО ЯДРА" title="СОСТАВЛЕНИЕ СЕМАНТИЧЕСКОГО ЯДРА" src="images/semantic-core.png"/>
                             </figure>
                         </div>
                     </div>
                     <ScrollableAnchor id={'four'}>
                         <a className="arrow-down" href="#four"></a>
                     </ScrollableAnchor>
                 </div>
                 <div className="stage-count">
                     <div className="stage">
                         <h4 className="stage__title">СОЗДАНИЕ ЭКСПЕРТНОГО КОНТЕНТА</h4>
                         <div className="stage__description">
                             <ul>
                                 <li>Разбор семантического ядра</li>
                                 <li>Проработка целевой аудитории</li>
                                 <li>Подбор главного запроса для страницы</li>
                                 <li>Подготовка и согласование контент плана</li>
                                 <li>Постановка задач копирайтеру</li>
                                 <li>Написание экспертных статей и их форматирование для улучшения восприятия</li>
                                 <li>Размещение контента на сайте</li>
                                 <li>Оптимизация статей для поисковиков</li>
                                 <li>Перелинковка материалов между собой</li>
                             </ul>
                             <figure>
                                 <img alt="СОЗДАНИЕ ЭКСПЕРТНОГО КОНТЕНТА" title="СОЗДАНИЕ ЭКСПЕРТНОГО КОНТЕНТА" src="images/expert-content.png"/>
                             </figure>
                         </div>
                     </div>
                     <ScrollableAnchor id={'five'}>
                         <a className="arrow-down" href="#five"></a>
                     </ScrollableAnchor>
                 </div>
                 <div className="stage-count">
                     <div className="stage">
                         <h4 className="stage__title">УВЕЛИЧЕНИЕ КОНВЕРСИОННОСТИ РЕСУРСА</h4>
                         <div className="stage__description">
                             <ul>
                                 <li>Увеличение количества обращений в Вашу компанию, за счет различных элементов</li>
                                 <li>Аналитика поведения посетителей сайта</li>
                                 <li>Проработка структуры сайта</li>
                                 <li>Исправление заголовков и текстов на страницах</li>
                                 <li>Создание и оптимизация продающих триггеров (отзывы, гарантии, рекламные акции)</li>
                                 <li>Улучшение юзабилити сайта</li>
                                 <li>Проверка корректности отображения сайта в разных браузерах</li>
                             </ul>
                             <figure>
                                 <img alt="УВЕЛИЧЕНИЕ КОНВЕРСИОННОСТИ РЕСУРСА" title="УВЕЛИЧЕНИЕ КОНВЕРСИОННОСТИ РЕСУРСА" src="images/expert-content.png"/>
                             </figure>
                         </div>
                     </div>
                 </div>
                 <h5 className="know-form__title">Узнайте, сколько новых клиентов Вы можете получить с сайта!</h5>
                 {this.clientsNotification()}
                 <form className="form-group know-form" onSubmit={this.btnSubmitHandler.bind(this)}>
                     <MaskedInput mask="+7(111) 111 11 11" type="text" ref="phone" className="form-control" placeholder="Телефон *"  required/>
                     <input type="submit" className="btn submit-btn"  value="Узнать сколько получу клиентов!"/>
                 </form>
            </div>
                <div className="separatorbottom">
                    <svg version="1.1" id="bottom-triangle" viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M 0 100 H 100 V 0 H 58.5 L 50 100 L 41.5 0 H 0 Z"></path></svg>
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
    return bindActionCreators({sendClientsCallback}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(WorkStages);
