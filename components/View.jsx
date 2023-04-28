const View = ({ name, sector, agree }) => {
    return (
        <div className="view">
            {name ? (
                <h2>
                    Hello, <span>{name} !</span>
                </h2>
            ) : (
                ""
            )}
            <div className="sector">
                {name ? (
                    <span>
                        You're currently working at <span>{sector?.text}</span>
                    </span>
                ) : (
                    ""
                )}
            </div>
        </div>
    );
};
export default View;
