const food = ["chocolate","juice", "coca-cola", "candies"]

const Header = (props) => {
    return <h1 className = "header" >Hello from {props.jelena} Earth!</h1>
}

const FoodItem = (props) => {
    return <li>{props.item}</li>
}

const FoodList = (props) => {
    const foodList = props.food;
    return (
        <ul>
            {foodList.map(item => {
              return <FoodItem item={item}/>
            })}
            
        </ul>
    )
}

const Body = (props) => {
    return (
        <main>
            <h3 className = "mainHeader">Houston Calling</h3>
            <p>Is anybody in the house?</p>

            <section>
                <h2>Enceladus responses</h2>
                <p>{props.response}</p>
            </section>
            <FoodList food={food} />
        </main>
    )
}

const Footer = (props) => {
    return <p>For contact with Alien call {props.contactTel}</p>
}

const App = (props) => {
    return (
        <div>
            <Header jelena="green" />
            <Body response="We found water!" />
            <Footer contactTel="+38188888999666"/>
        </div>
    )
}

// moze da se funkcija zapise i const Footer = (props) => (pa tu bez return jer dir vraca).
const rootElement = document.querySelector(".root");
ReactDOM.render(<App />, rootElement);