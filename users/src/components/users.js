import React from "react";

const UserContext = React.createContext();


class CardMain extends React.Component {
    render() {
        return (
            <UserContext.Consumer>
                {(context) => (
                    <div>
                        <h2>{context.state.name}</h2>
                        <button onClick={context.edit}>Change</button>
                    </div>
                )}
            </UserContext.Consumer>
        )
    }
}

class CardInput extends React.Component {
    render() {
        return (
            <UserContext.Consumer>
                {(context) => {
                    if (context.state.editing) {
                        return <input type="text" defaultValue={context.state.name} onChange={context.updateName}/>
                    }
                }}
            </UserContext.Consumer>
        )
    }
}

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Гость",
            editing: false,
            newName: "Гость"
        }
    }
    render() {
        return (
            <UserContext.Provider value={{
                state: this.state,
                edit: () => {
                    if (!this.state.editing) {
                        this.setState({
                            editing: !this.state.editing
                        })
                    } else {
                        this.setState({
                            editing: !this.state.editing,
                            name: this.state.newName,
                            newName: "Гость"
                        });
                    }
                },
                updateName: (event) => {
                    this.setState({
                        newName: event.target.value
                    })
                }
            }}>
                <div className="card">
                    <CardMain name={this.state.name}/>
                    <CardInput name={this.state.name}/>
                </div>
            </UserContext.Provider>
        )
    }
}

export default Card;