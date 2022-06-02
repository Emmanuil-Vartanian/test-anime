import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { MainContainer, MainBlock } from "./style";

import SearchPage from "pages/Search";
import Header from "components/Header";
import store from 'store'

const App = () => {
  return (
    <Provider store={store.store}>
      <PersistGate loading={null} persistor={store.persistor}>
        <Header />
        <MainContainer>
          <MainBlock>
            <SearchPage />
          </MainBlock>
        </MainContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
