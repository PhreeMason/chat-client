import ActionCable from "actioncable";

const token = localStorage.getItem('token')
const App = {};
App.cable = ActionCable.createConsumer(`wss://lit-ridge-65285.herokuapp.com/cable?token=${token}`);

export default App.cable
