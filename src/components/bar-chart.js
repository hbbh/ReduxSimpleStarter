import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

function average(data){
  return _.round(_.sum(data) / data.length);
}

export default function BarChart(props) {
    return (
        <div className="chart chart-bar">
            <Sparklines data={props.data} height={120} width={180}>
                <SparklinesLine color={props.colour}/>
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
            {average(props.data) + " " + props.units}
        </div>
    );
}
