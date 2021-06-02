interface HomeProps {
    window: number;
    homeName: string;
}

const Home = ({window, homeName}: HomeProps) => {
    return(
        <div>
            <h1>Home : {homeName}</h1>
            <h1>Home : {window}</h1>
        </div>
    );
};

export default Home;