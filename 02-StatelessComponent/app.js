const Title = (props) => <h1>{props.title}</h1>;

const Clock = (props) => {
    const displayTime = moment(props.time).add(props.hourOffset, 'h').toString();
    return (
        <h3>
            {displayTime}
        </h3>
    );
};

const AppComponent = (props) => {
    const now = new Date();
    return (
        <div>
            <Title title={props.title}/>
            The current time is: <Clock time={now} />
            The current GMT is: <Clock time={now} hourOffset={-2} />
        </div>
    );
};

const app = <AppComponent title="Greetings"/>;

ReactDOM.render(
    app,
    document.getElementById('root')
);


// DEMO:
// - destructure props
