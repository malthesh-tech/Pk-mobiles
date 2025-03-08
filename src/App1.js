import React from 'react'
import Main from './To-do-list/main'
import {store} from './To-do-list/Redux/Store'   //---
import {Provider} from 'react-redux'  //---

const App1 = () => {
  return (
    <>
    <Provider store={store}> 
      <Main />
      </Provider>
    </>
  )
}

export default App1
