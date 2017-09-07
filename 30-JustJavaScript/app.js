const Title = (props) => <h1>{props.title}</h1>;

const Clock = (props) => {
    const displayTime = moment(props.time).add(props.hourOffset, 'h').toString();
    return (
        <h3>
            {displayTime}
        </h3>
    );
};

class AppComponent extends React.Component {

    state = {
        countries: ['France', 'Germany', 'Italy', 'India', 'Indonesia', 'Switzerland', 'Sweden'],
    };

    render() {
        const now = new Date();
        return (
            <div>
                <Title title={this.props.title}/>
                {
                    this.state.countries.map((country, index) => (
                        <div key={index}>
                            Time in {country}: <Clock time={now} hourOffset={index}></Clock>
                        </div>
                    ))
                }
            </div>
        );
    };
}

const app = <AppComponent title="Greetings"/>;

ReactDOM.render(app, document.getElementById('root'));

