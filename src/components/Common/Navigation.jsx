import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { ExternalLink } from "react-feather";
import { navigation,external } from '../../setup/navigation'
import Card from "./Card";


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
                <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-4 px-8 gap-6">
                    {navigation.map((item, i) => {
                        return (
                            <div key={i} className="mt-2 flex justify-center items-center">
                                <Link to={item.link}>
                                    <Card
                                        children={item.title}
                                        img={item.img}
                                        description={item.description}
                                        status={item?.status}
                                    />
                                </Link>
                            </div>
                        );
                    })}
                    <div>
                        <a href="https://space-tourism-peach.vercel.app/" className="mt-2 flex justify-center items-center">
                            <Card
                                children="Space Tourism"
                                img="/assets/space-tourism/preview.jpg"
                                description="Space Tourism"
                                status={<ExternalLink className="w-5 h-5" />}
                            />
                        </a>
                        {
                            external.map((item, i) => {
                                <div key={i} className="mt-2 flex justify-center items-center">
                                    <a href={item.link}>
                                        <Card
                                            children={item.title}
                                            image={item.image}
                                            description={item.description}
                                            status={<ExternalLink className="w-5 h-5" />}
                                        />
                                    </a>
                                </div>
                            })
                        }
                    </div>
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

