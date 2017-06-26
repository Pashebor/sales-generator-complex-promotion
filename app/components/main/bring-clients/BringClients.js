import React from 'react';
import {connect} from 'react-redux';
import {sendClientsCallback} from '../../../actions/index';
import { bindActionCreators } from 'redux';
import MaskedInput from 'react-maskedinput';
import ScrollableAnchor from 'react-scrollable-anchor';

class BringClients extends React.Component{

    btnSubmitHandler(e) {
        e.preventDefault();
        let formData = {'form-name': 'know-bottom'};

        formData.name = this.refs.name.value;
        formData.phone = this.refs.phone.mask.getValue();
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
            <section className="b-clients">
                    <div className="container">
                        <h2 className="b-clients__title">УЗНАЙТЕ, СКОЛЬКО КЛИЕНТОВ МОЖЕТ ПРИНОСИТЬ ВАШ САЙТ:</h2>
                        <p className="b-clients__text">Нет двух одинаковых сайтов, поэтому для каждого сайта мы делаем индивидуальный расчет!</p>
                        <p className="b-clients__text">Получите индивидуальное предложение, <strong>оставив заявку</strong> или позвонив по телефону: <a href="tel:8 800 333 12 93"><strong>8 800 333 12 93</strong></a></p>
                        {this.clientsNotification()}

                        <form className="form-group know-form" onSubmit={this.btnSubmitHandler.bind(this)}>
                            <input className="form-control" placeholder="Имя *" type="text" ref="name" required/>
                            <MaskedInput mask="+7(111) 111 11 11" type="text" ref="phone" className="form-control" placeholder="Телефон *"  required/>
                            <input type="submit" className="btn submit-btn"  value="Получить индивидуальное предложение!"/>
                        </form>

                <ScrollableAnchor id={'how-many-clients'}>
                        <p className="b-clients__text">Это бесплатно и ни к чему Вас не обязывает</p>
                </ScrollableAnchor>
                    </div>
            </section>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(BringClients);