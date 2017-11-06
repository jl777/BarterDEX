import React from 'react'

import { observer, inject } from 'mobx-react';
import classNames from 'classnames';
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import buy from '../../static/buy.svg';
import sell from '../../static/sell.svg';
import stop from '../../static/stop.svg';

const formatNumber = (str) => str;


@inject('app')
@observer
class Orders extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    getClassState = () => classNames({
        'balance-action': true
    })


    render() {
        const { bots } = this.props.app.trade;

        const listBots = bots.map((bot, i) =>
          <li className="orders-item" key={i}>
            <div className={`orders-item-details`}>
              <div className={`orders-item-details-action ${bot.base}`}>
                <span className="orders-item-details-action-type">BOT {bot.action}</span>
                <span className="coin-colorized orders-item-details_action" dangerouslySetInnerHTML={{ __html: bot.action === 'buy' ? buy : sell }} />

                <span>{ bot.totalbasevolume } { bot.base }</span>

              </div>
              <div className={`orders-item-details-meta ${bot.base}`}>
                <div>
                  <small className="coin-colorized"><strong>Max Price</strong> { bot.maxprice } { bot.rel }</small>
                  <small className="coin-colorized"><strong>Total</strong> { bot.totalrelvolume } { bot.rel }</small>
                </div>

                <button className="order-stop action align-left danger">
                  <span>stop</span>
                  <i dangerouslySetInnerHTML={{ __html: stop }} />
                </button>
              </div>
            </div>
          </li>

    );

        const hasBots = bots.length > 0;
        console.log(hasBots);
        console.log(bots)
        return (
          <section className={this.getClassState()}>
            { hasBots ? (
              <ul className="orders-list">
                { listBots }
              </ul>
          ) : '' }
          </section>
        );
    }
}


export default Orders