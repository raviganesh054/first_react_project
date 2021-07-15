import UserProfile from './components/UserProfile/index'

import './App.css'

const userDetailsList = [
  {
    name: 'Esther Howard',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    role: 'Software Engineer',
  },
  {
    name: 'Floyd Miles',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    role: 'Software Engineer',
  },
  {
    name: 'Jacob jones',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    role: 'Software Engineer',
  },
  {
    name: 'Devon Lane',
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    role: 'Software Engineer',
  },
]
const App = () => (
  <div className="list-container">
    <h1 className="title">Users List</h1>
    <ul>
      <UserProfile userDetails={userDetailsList[0]} />
      <UserProfile userDetails={userDetailsList[1]} />
      <UserProfile userDetails={userDetailsList[2]} />
      <UserProfile userDetails={userDetailsList[3]} />
    </ul>
  </div>
)

export default App
