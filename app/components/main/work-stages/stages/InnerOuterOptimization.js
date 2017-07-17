import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import routeCode from '../../../../utils/route.path';



class InnerOuterOptimization extends Component{
    render() {
        return(
            <section className="stages">
                <div className="stages-links">
                    <Link to={routeCode.HOME} className="stages-links__item"><p><strong>1</strong>  — Подготовка сайта к продвижению</p></Link>
                    <Link to={routeCode.OPTIMIZATION} className="stages-links__item stages-links__item--active"><p><strong>2</strong> — Внешняя и внутренняя оптимизация сайта</p></Link>
                    <Link to={routeCode.SEMANTIC_CORE} className="stages-links__item"><p><strong>3</strong> — Составление семантического ядра</p></Link>
                    <Link to={routeCode.EXPERT_CONTENT} className="stages-links__item"><p><strong>4</strong> — Создание экспертного контента</p></Link>
                    <Link to={routeCode.CONVERSION} className="stages-links__item"><p><strong>5</strong> — Увеличение конверсионности ресурса</p></Link>
                </div>
                <div className="stages__description">
                   <div className="stages__description-wrapper">
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
                   </div>
                </div>
            </section>
        )
    }
}

export default InnerOuterOptimization;