import React from 'react';
import Slider from 'react-slick';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import {setApproachItem} from '../../../actions'

class Approach extends React.Component{
    constructor(props) {
        super(props);
        this.nextHandler = this.nextHandler.bind(this);
        this.peviousHandler = this.peviousHandler.bind(this);
        this.hoverPaginHandler = this.hoverPaginHandler.bind(this);

    }

    componentDidMount() {
        console.log(this.refs);
    }

    nextHandler() {
        this.refs.slider.slickNext();
    }

    peviousHandler() {
        this.refs.slider.slickPrev();
    }

    hoverPaginHandler(event) {
        this.props.setApproachItem(parseInt(event.target.getAttribute('value')));
        this.refs.slider.slickGoTo(parseInt(event.target.getAttribute('value')) - 1);
    }

    itemsClassActive() {
        console.log(this);
        /* if (this.props.approachesState === event.target.getAttribute('value')) {
         return 'approach-types__item approach-types__item--active"';
         } else {
         return 'approach-types__item';
         }*/
    }

    approachItems() {
        const items = [1, 2, 3, 4, 5, 6, 7],
            text = ['Окупаемость вложений', 'Конкретный результат', '50% клиентов получают отказ', 'Масштабирование вашего бизнеса', 'Сущность потребностей ЦА', 'Уникальная методика', 'Погружение в бизнес клиента'];

        return items.map(item => {
            return (<div key={item} className={`approach-types__item ${this.props.approachesState === item ? ' approach-types__item--active': null}`} value={item} ref={`paginator${item}`} onMouseEnter={this.hoverPaginHandler}>{item}</div>);
        })
    }

    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            autoplaySpeed: 5000,
            autoplay: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            lazyLoad: false,
            draggable: true,
            pauseOnHover: false,
            arrows: false,
            fade: true,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    infinite: true
                }
            }, {

                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    dots: false,
                    arrows: false
                }
            }]
        };


        return(
            <section className="approach">
                <div className="container">
                    <h2 className="approach__title">СУТЬ НАШЕГО ПОДХОДА:</h2>
                    <div className="approach-types">
                      <div className="approach-types-wrapper">
                          {this.approachItems()}
                      </div>
                    </div>
                    <div className="approach-slider">
                        <div className="approach-slider__nav" onClick={this.peviousHandler}><img src="images/arrow-prev.svg"/></div>
                        <div className="approach-slider__block">
                    <Slider ref='slider' {...settings}>
                        <div className="approach-slider__item">
                            <p><strong>Окупаемость вложений</strong> клиента для нас святое. Именно с расчета окупаемости для клиента мы начинаем любой проект.</p>
                        </div>
                        <div className="approach-slider__item">
                            <p><strong>Конкретный результат</strong> мы прописываем в договоре и несём за это финансовую ответственность. Проще говоря, мы вернём Вам все деньги, если результат не будет достигнут.</p>
                        </div>
                        <div className="approach-slider__item">
                            <p><strong>50% клиентов получают отказ</strong>, потому что у нас нет 95%-ой уверенности в том, что вложения этих клиентов отобьются. Да, это больно по нам бьёт, но так - правильно.</p>
                        </div>
                        <div className="approach-slider__item">
                            <p><strong>Масштабирование Вашего бизнеса,</strong> а не трафик или лиды - цель нашей деятельности.</p>
                        </div>
                        <div className="approach-slider__item">
                            <p><strong>Сущность потребностей ЦА,</strong> а не список запросов для продвижения позволяют обеспечивать рост не только Вашего сайта, но и бизнеса.</p>
                        </div>
                        <div className="approach-slider__item">
                            <p><strong>Уникальная методика</strong> работы с контентом и сайтом позволяет нам делать средний рост органического трафика в 763 %. Да, мы готовы это подтвердить.</p>
                        </div>
                        <div className="approach-slider__item">
                            <p><strong>Погружение в бизнес клиента</strong> позволяет нам предлагать наиболее оптимальные решения. Это требует большой вовлечённости и работы как с нашей стороны, так и со стороны клиента. Не все к этому готовы, но оно того стоит.</p>
                        </div>
                    </Slider>
                        </div>
                        <div className="approach-slider__nav" onClick={this.nextHandler}><img src="images/arrow-next.svg" /></div>
                    </div>
                </div>
            </section>
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

export default connect(mapStateToProps, mapDispatchToProps)(Approach);