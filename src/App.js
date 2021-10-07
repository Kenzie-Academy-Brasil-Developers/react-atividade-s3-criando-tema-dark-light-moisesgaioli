import { useCallback, useState } from "react";
import { AppContainer, MainSection } from "./components/app.style";
import { ThemeProvider } from "styled-components";
import { themes } from "./themes";
import { Button } from "./components/button.style";

const App = () => {

  const [currentTheme, setCurrentTheme] = useState("claro");

  
  const getOpositeTheme = useCallback(
    () => (currentTheme === "claro" ? "escuro" : "claro"),
    [currentTheme]
  );

  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <AppContainer>
        <MainSection>
          <h1>Você está no modo {currentTheme} </h1>
          <Button onClick={() => setCurrentTheme(getOpositeTheme())}>
            Mudar para o modo {getOpositeTheme()} 
          </Button>
        </MainSection>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
