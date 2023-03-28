import React from 'react';

function GoalForm(props) {
    const [formData, setFormData] = React.useState({'goal': '', 'by': ''});

    function changeHandler(e) {
        setFormData({...formData, [e.target.name]: e.target.value});
    };


    function submitHandler(e) {
        e.preventDefault();
        props.onAdd(formData);
        setFormData({'goal': '', 'by': ''});
    };


    return (
            <>
            <h1>Goal Tracker</h1>
            <form onSubmit={submitHandler}>
                <label htmlFor="goal">Goal: </label>
                <input type="text" name="goal" value={formData.goal} onChange={changeHandler} placeholder="Add Goal" required/>
                <label htmlFor="by">By: </label>
                <input type="text" name="by" value={formData.by} onChange={changeHandler} placeholder="Target Date" required/>
                <button>Submit Goal</button>
            </form>
            </>
        );

}

function ListOfGoals(props) {
    return (
        <ol>
            {props.allGoals.map((g) => (
                <li key={g.goal}>
                    <span>My Goal : {g.goal}, Achieve by : {g.by}</span>
                </li>
            ))}
        </ol>
    );

}

export default function Goals() {
    const [allGoals, updateAllGoals] = React.useState([]);

    function addGoal(goal) {
        updateAllGoals([...allGoals, goal]);
    }

    function clearGoals(e) {
        e.preventDefault();
        updateAllGoals([]);
    }

    return (
        <div className='Goals'>
            <GoalForm onAdd={addGoal} />
            <ListOfGoals allGoals={allGoals} />
            <button onClick={clearGoals}>Clear Goals</button>
            
        </div>
    )
}