import { AppShell, Header, Text } from "@mantine/core";
import "./style.css";
import WeatherApp from "./Components/WeatherApp";

function App() {
  return (
    <div className="App">
      <AppShell
        fixed
        header={
          <Header height={55} p="md">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                height: "100%",
              }}
            >
              <Text>Weather App</Text>
            </div>
          </Header>
        }
      >
        <WeatherApp />
      </AppShell>
    </div>
  );
}

export default App;
