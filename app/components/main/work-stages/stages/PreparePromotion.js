import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class PreparePromotion extends Component{
    render() {
        return(
            <section className="stages">
                <div className="stages-links">
                    <Link to={'/'} className="stages-links__item stages-links__item--active"><p><strong>1</strong>  — Подготовка сайта к продвижению</p></Link>
                    <Link to={'/optimization'} className="stages-links__item"><p><strong>2</strong> — Внешняя и внутренняя оптимизация сайта</p></Link>
                    <Link to={'/semantic-core'} className="stages-links__item"><p><strong>3</strong> — Составление семантического ядра</p></Link>
                    <Link to={'/semantic-core'} className="stages-links__item"><p><strong>4</strong> — Создание экспертного контента</p></Link>
                    <Link to={'/semantic-core'} className="stages-links__item"><p><strong>5</strong> — Увеличение конверсионности ресурса</p></Link>
                </div>
                <div className="stages__description">
                   <div className="stages__description-wrapper">
                    <ul>
                        <li>Установка и настройка панели вебмастера Яндекс и Google</li>
                        <li>Установка счетчиков (Яндекс. Метрики и Google аналитики)</li>
                        <li>Настройка целей в веб-аналитике</li>
                        <li>Создание и/или настройка файла sitemap.xml</li>
                        <li>Создание и/или настройка файла robots.txt</li>
                        <li>Составление карты метатегов (title, h1, description, h2-h6, keywords, alt)</li>
                        <li>Настройка ЧПУ ссылок (url)</li>
                    </ul>
                   </div>
                </div>
            </section>
        )
    }
}

export default PreparePromotion;