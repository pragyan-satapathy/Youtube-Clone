import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import store from './utils/store'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainComponent from './components/MainComponent';
import WatchPage from './components/WatchPage'

const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body />,
  children: [
    {
      path: "/",
      element: <MainComponent />
    },
    {
      path: "/watch",
      element: <WatchPage />
    }    
  ]
}])
function App() {
  return (
    <Provider store={store}>
      <Head />
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
