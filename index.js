var Counter = React.createClass({

    getDefaultProps() {
        console.log('Initialization');
    },

    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter -1
        });
    },

    render: function() {
        return React.createElement('div', {},
                React.createElement('button', {onClick: this.increment}, 'Plus'),
                React.createElement('button', {onClick: this.decrement}, 'Minus'),
                React.createElement('p', {}, 'Counter ' + this.state.counter,)
        );
    },

    componentWillMount() {
        console.log('Mounting');
    },

    componentDidMount() {
        console.log('Add element into DOM');
    },

    componentWillReceiveProps() {
        console.log('Update if there are new props');
    },

     shouldComponentUpdate() {
        console.log('Find if the new props are true');
        return true;
    },
    componentWillUpdate() {
        console.log('Perform preparations for render');
    },

    componentDidUpdate() {
        console.log('Perform operations on DOM');
    },

    componentWillUnmount() {
        console.log('Unmounting');
    },
});

var element =
  React.createElement('div', {},
    React.createElement(Counter, {}),
  );
ReactDOM.render(element, document.getElementById('app'));