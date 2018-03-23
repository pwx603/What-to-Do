class WhatToDoApp extends React.Component{
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.state = {
            options: ["Thing one", "Thing two", "Thing three"]
        }
    }

    handleDeleteOptions(){
        this.setState(()=>{
            return {
                options:[]
            }
        });
    }

    handlePick(){
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);     
    }

    render(){
        const title = "What to Do?"
        const subtitle = "What should I do, Jarvis?"

        return (
        <div>
            <Header title = {title} subtitle = {subtitle}/>
            <Action hasOptions ={this.state.options.length > 0}
            handlePick = {this.handlePick}/>
            <Options options = {this.state.options}
                    handleDeleteOptions = {this.handleDeleteOptions}/>
            <AddOption />
        </div>
        )
    }
}



class Header extends React.Component{
    render(){
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}

class Action extends React.Component{
    render(){
        return (
            <div>
                <button 
                    onClick = {this.props.handlePick}
                    disabled = {!this.props.hasOptions}
                    >
                    What should I do?</button>
            </div>
        )
    }

}


class Options extends React.Component{
    render(){
        return (
            <div>
            <button onClick={this.props.handleDeleteOptions}>Remove All</button>
            <ol>
                {this.props.options.map((option) => {
                    return <Option key={option} optionText={option}/>
                })
                }
            </ol>
            </div>
        )
    }

}

class Option extends React.Component{
    render(){
        return (
            <div>
                <li key = {this.props.key}>{this.props.optionText}</li>
            </div>
        )
    }
}

class AddOption extends React.Component{
    onFormSubmit(e){
        e.preventDefault();
        let str = e.target.elements.option.value.trim();
        e.target.elements.option.value = "";

        if(str)
            alert(str)
    }

    render(){
        return (
            <div>
                <form onSubmit = {this.onFormSubmit}>
                    <input type = "text" name = "option"/>
                    <button>Add Option</button>
                </form>
            </div>
        )
    }

}



ReactDOM.render(<WhatToDoApp />, document.getElementById("app"))