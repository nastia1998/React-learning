import React from "react";

class Form extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.weather}>
                <input type="text" name="city" placeholder="City" />
                <button>Get weather</button>
            </form>
        );
    }
}

export default Form;