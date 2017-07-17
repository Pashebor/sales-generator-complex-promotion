import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import routeCode from '../../../../utils/route.path';


class SemanticCore extends Component{
    render() {
        return(
            <section className="stages">
                <div className="stages-links">
                    <Link to={routeCode.HOME} className="stages-links__item"><p><strong>1</strong>  — Подготовка сайта к продвижению</p></Link>
                    <Link to={routeCode.OPTIMIZATION} className="stages-links__item"><p><strong>2</strong> — Внешняя и внутренняя оптимизация сайта</p></Link>
                    <Link to={routeCode.SEMANTIC_CORE} className="stages-links__item stages-links__item--active"><p><strong>3</strong> — Составление семантического ядра</p></Link>
                    <Link to={routeCode.EXPERT_CONTENT} className="stages-links__item"><p><strong>4</strong> — Создание экспертного контента</p></Link>
                    <Link to={routeCode.CONVERSION} className="stages-links__item"><p><strong>5</strong> — Увеличение конверсионности ресурса</p></Link>
                </div>
                <div className="stages__description">
                    <div className="stages__description-wrapper">
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
                    </div>
                </div>
            </section>
        )
    }
}

export default SemanticCore;