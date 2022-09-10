import React from "react";
import {Segment, Item} from 'semantic-ui-react';
import data from '../assets/data/periodicElements.json';
import layout from '../assets/data/layout';

import {Responsive, WidthProvider} from "react-grid-layout";
import El from "./El";


const ResponsiveGridLayout = WidthProvider(Responsive);

const tableObj = data.reduce((row, cur) => {
    return {
        ...row,
        [cur.symbol]: cur
    }
}, {})
const Element = () => {
    return (

            <ResponsiveGridLayout
                layouts={{
                lg: layout,
                md: layout,
                sm: layout,
                xs: layout,
                xxs: layout
            }}
                breakpoints={{
                lg: 1200,
                md: 996,
                sm: 768,
                xs: 480,
                xxs: 0
            }}
                cols={{
                lg: 19,
                md: 19,
                sm: 19,
                xs: 19,
                xxs: 19
            }}
                compactType={"vertical"}
                static = {true}
                isDraggable = {false}
                isResizable = {false}
                rowHeight={20}
                width={1200}>
                {layout.map((card) => {
                    const symbol = card.i
                    const cell = tableObj[symbol]
                    if (cell === undefined) {
                        return <div
                            key={symbol}
                            style={{
                            background: "white"
                        }}/>
                    }
                    return (
                        <Segment
                            key={symbol}
                            style={{
                            "background": `#${cell["cpk-hex"]}`
                        }}>
                            <El cell={cell}/>
                        </Segment>
                    )
                })
}
            </ResponsiveGridLayout>
        
    );
}

export default Element;