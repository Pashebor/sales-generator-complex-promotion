import React, { Component } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';

const Facts = () => {
        return(
            <ScrollableAnchor id={'facts'}>
                <section className="facts">
                    <div className="container">
                        <h2 className="facts__title">НЕСКОЛЬКО ФАКТОВ О НАС:</h2>
                        <div className="facts-info">
                            <div className="facts-info__item">
                                <img src="images/specialists.svg" alt="Специалисты" title="Специалисты" data-audit="Специалисты"/>
                                <p>В нашей команде более <br/> <strong>67</strong> специалистов</p>
                            </div>
                            <div className="facts-info__item">
                                <img src="images/cliensts-grow.svg" alt="Привлечение клиентов" title="Привлечение клиентов" data-audit="Привлечение клиентов"/>
                                <p>Мы привлекли на сайты наших <br/> клиентов <strong>7 990 502</strong> посетителей</p>
                            </div>
                            <div className="facts-info__item">
                                <img src="images/money.svg" alt="Работа с проектами" title="Работа с проектами"  data-audit="Работа с проектами"/>
                                <p>Мы работаем с проектами <br/>от <strong>40</strong> тыс. рублей</p>
                            </div>
                            <div className="facts-info__item">
                                <img src="images/traffic-grow.svg" alt="Цена проектов" title="Цена проектов"  data-audit="Цена проектов"/>
                                <p>Средний рост трафика наших клиентов <br/>за прошедший год <strong>724 %</strong></p>
                            </div>
                        </div>
                    </div>
                    <div className="separatorbottom">
                        <svg version="1.1" id="bottom-triangle" viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M 0 100 H 100 V 0 H 58.5 L 50 100 L 41.5 0 H 0 Z"></path></svg>
                    </div>
                </section>
            </ScrollableAnchor>
        );
};



export default Facts;