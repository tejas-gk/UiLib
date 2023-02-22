const Card = ({ children, img, description, ...props }) => {
    return (
        <div
            className="flex flex-col w-80 h-80 bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out 
        "
        >
            <div className="flex justify-center items-center h-inherit rounded-lg">
                <img src={img} alt="hello" className="w-80 h-[12rem] rounded-lg object-cover
                " />
            </div>
            <div className="flex pl-4 h-20  text-start flex-col mt-2">
                <h1 className="text-2xl font-bold capitalize">{children}</h1>
                <div className="flex justify-between items-center mt-2">
                    <p className="text-gray-400 text-sm pt-2 pl-2 capitalize">
                        {description}
                    </p>
                    <p className="text-gray-400 text-sm mr-4">{props.status}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;