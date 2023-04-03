import Greeting from './Greeting';
import Button from './Button';
import InputComponent from './Hooks';
import MappingPractice from "./map";

const desserts = [
    {
        name: "Chocolate Cake",
        calories: 400,
        createdAt: "2022-09-01"
    }, {
        name: "Ice Cream",
        calories: 200,
        createdAt: "2022-01-02"
    }, {
        name: "Tiramisu",
        calories: 300,
        createdAt: "2021-10-03"
    }, {
        name: "Cheesecake",
        calories: 600,
        createdAt: "2022-01-04"
    },
];

const time = new Date().getHours();

function HomePage() {
    return (
        <> 
          {
            time > 8 && time < 18 ? <Greeting greet="friend"/> : <Greeting greet="stranger"/>
            }
        
            <Button/> 
            <InputComponent/>
            <div>
                <h2>Here, List of some low calorie deserts:
                </h2>
                <MappingPractice data={desserts}/>
            </div>
        </>
    );
}

export default HomePage;
