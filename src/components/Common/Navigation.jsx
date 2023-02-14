import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
const navigation = [
    {
        name: "qr",
        link: "/qr",
        img: "/assets/qr/design/desktop-design.jpg",
        description: "QR code generator",
    },
    {
        name: "order-summary",
        link: "/order-summary",
        img: "/assets/order-summary/design/desktop-design.jpg",
        description: "Order summary",
    },
    {
        name: "shopping-cart",
        link: "/shopping-cart",
        img: "/assets/shopping-cart.jpeg",
        description: "shopping cart",
    },
    {
        name: "product-preview",
        link: "/product-preview",
        img: "/assets/product-preview-card-component-main/product-preview-card-component-main/design/desktop-design.jpg",
        description: "product preview",
    },
    {
        name: "nft",
        link: "/nft",
        img: "/assets/nft-preview-card-component-main/design/desktop-design.jpg",
        description: "nft",
    },
    {
        name: "rock-paper-scissors",
        link: "/rock-paper-scissors",
        img: "/assets/rock-paper-scissors/design/desktop-preview.jpg",
        description: "rock-paper-scissors",
    },
    {
        name: "profile-card",
        link: "/profile-card",
        img: "/assets/profile-card-component-main/design/desktop-design.jpg",
        description: "profile-card",
    },
    {
        name: "advice",
        link: "advice",
        img: "/assets/advice-generator-app-main/design/active-states.jpg",
        description: "advice",
    },
    {
        name: "expenses-chart",
        link: "expenses-chart",
        img: "/assets/expenses-chart/design/active-states.jpg",
        description: "expenses-chart",
    },
    {
        name: "password-generator",
        link: "password-generator",
        img: "/assets/password-generator.jpg",
        status: "in progress",
        description: "password-generator",
    },
    {
        name: "news homepage",
        link: "news",
        img: "/assets/news/design/active-states.jpg",
        description: "news homepage",
        status: "in progress",
    },
    {
        name: "hydrate",
        link: "/hydrate",
        img: "/assets/hydrate.jpeg",
        description: "Hydrate",
        status:'old project'
    },
    {
        name: "dictionary",
        link: "dictionary",
        img: "/assets/dictionary/preview.jpg",
        description: "dictionary",
        status: "in progress",
    },
    {
        name: "interactive rating",
        link: "interactive-rating",
        img: "/assets/interactive-rating-component-main/design/active-states.jpg",
        description: "interactive rating",
    },
    {
        name: "four card feature",
        link: "four-card-feature",
        img: "/assets/four-card-feature-section-master/design/desktop-design.jpg",
        description: "four card feature",
    },
    {
        name: 'clock',
        link: 'clock',
        img: '/assets/clock.png',
        description: 'clock',
        status: 'old project'
    },
    {
        name: 'login',
        link: 'login',
        img: '/assets/login.png',
        description: 'login',
        
    }
    // {
    //     name: "comments",
    //     link: "comments",
    //     img: "/assets/comments/design/desktop-design.jpg",
    //     description: "comments",
    //     status: "in progress",
    // },
    // {
    //     name: "ecommerce",
    //     link: "ecommerce",
    //     img: "/assets/ecommerce-product-page-main/ecommerce-product-page-main/design/desktop-design.jpg",
    //     description: "ecommerce",
    //     status: "in progress",
    // },
    // {
    //     name: "launch countdown",
    //     link: "launch-countdown",
    //     img: "/assets/launch-countdown-timer-main/launch-countdown-timer-main/design/desktop-design.jpg",
    //     description: "launch countdown",
    //     status: "in progress",
    // },
    // {
    //     name: "url-shortening",
    //     link: "url-shortening",
    //     img: "/assets/url-shortening-api-master/url-shortening-api-master/design/desktop-design.jpg",
    //     description: "url-shortening",
    // }
];

export default function Navigation() {
    const [contributions, setContributions] = useState([]);
    useEffect(() => {
        fetch("https://api.github.com/repos/tejas-gk/UILib/contributors")
            .then((res) => res.json())
            .then((data) => {
                setContributions(data);
            });
    }, []);
    return (
        <>
            <Navbar />
            <div>
                {/* <h1 className="text-5xl font-bold md:text-start md:ml-28 text-center mt-10 underline decoration-wavy">UI Library</h1> */}
                <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-4 px-8 gap-6">
                    {navigation.map((item, i) => {
                        return (
                            <div key={i} className="mt-2 flex justify-center items-center">
                                <Link to={item.link}>
                                    <Card
                                        children={item.name}
                                        img={item.img}
                                        description={item.description}
                                        status={item?.status}
                                    />
                                </Link>
                            </div>
                        );
                    })}
                </div>
                <div className="flex flex-col justify-center items-center mt-20 border-t-2 border-t-gray-300">
                    <h1 className="text-2xl font-bold">Contributors</h1>
                    <div className="flex flex-wrap justify-center items-center mt-4 gap-10">
                        {contributions.map((item, i) => {
                            return (
                                <div
                                    key={i}
                                    className="flex flex-col justify-center items-center"
                                >
                                    <a href={item.html_url} target="_blank" rel="noreferrer">
                                        <img
                                            src={item.avatar_url}
                                            alt="hello"
                                            className="w-20 h-20 rounded-full"
                                        />
                                        <p className="text-center">{item.login}</p>
                                    </a>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}

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
