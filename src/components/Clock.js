
import React from 'react'
class Clock extends React.Component{
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
      }
      componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
      }
    
      componentWillUnmount() {
        clearInterval(this.timerID);
      }
    
      tick() {
        this.setState({
          date: new Date()
        });
      }
      timeZone() {
        const currentDate = new Date();
        const dateAsString = currentDate.toString();
        const timezone = dateAsString.match(/\(([^)]+)\)$/)[1]    
        return timezone
      }
      currentDate() {
        const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];
        const currentDate = new Date();
        let cDay = currentDate.getDate()
        let cMonth = monthNames[currentDate.getMonth()]
        let cYear = currentDate.getFullYear()
        const finalDate = `${cMonth} ${cDay}, ${cYear}`
        return finalDate
      }

    render() {
        return (
          <div>
            <h1>Hello, world!</h1>
            <h2>It is {this.state.date.toLocaleTimeString()} {this.timeZone()}.</h2>
            <h2>Current date: {this.currentDate()}</h2>
          </div>
        )
    }
}
export default Clock