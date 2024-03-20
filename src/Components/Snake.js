import React from "react";

const Snake = (props) => {
    const { snakeDots } = props;
    return (
        <div>
            {snakeDots.map((dot, i) => {
                const style = {
                    left: `${dot[0]}%`,
                    top: `${dot[1]}%`,
                    backgroundColor: i === snakeDots.length - 1 ? "#ff0432d6" : "#04dc2f" // Change color for head
                };
                return <div className="snake" key={i} style={style} />;
            })}
        </div>
    );
};

export default Snake;
