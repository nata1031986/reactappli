import React, { Component } from 'react';

const list = [
    'Yes', 'Not sure...', 'No way!', 'Ask a friend', 'Call the police', 'Leave me alone', 'Ask your stupid question someone else', 'I am bored', '😒', 'Of course', 'Definitely', '🖕'
]

const MyContext = React.createContext();
class MyProvider extends Component {
    state = {
        screen: 0,
        question:'',
        result: ''
    }

    handleGoTo = (value) => {
this.setState({screen:value})
    }

    handleQuestion = (value) => {
        this.setState({screen:value})
    }

    getRandomValue = () => {
        return list[Math.floor(Math.random()* list.length)]
    }
handleResult = () => {
    let rand = this.getRandomValue()
    if(this.state.result !== ''){
        while(rand === this.state.result) {
rand = this.getRandomValue();
        }
    }
}

handleReset = () => {
    this.setState({
        screen:0,
        question:'',
        result:''
    })
}
    render() {
        return(
<>
<MyContext.Provider value={{
state: this.state,
goTo: this.handleGoTo,
question: this.handleQuestion,
result: this.handleResult,
reset: this.handleReset


}} 
>

    {this.props.children}
</MyContext.Provider>
        </>
        )
}
}
export {
    MyProvider,
    MyContext
}