import ActionCable from "actioncable";

const token = localStorage.getItem('token')
const App = {};
App.cable = ActionCable.createConsumer(`ws://localhost:3001/cable?token=${token}`);

export default App.cable
