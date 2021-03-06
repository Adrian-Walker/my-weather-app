import { Grid, Card, Text, Title, ThemeIcon, Space } from "@mantine/core";
import { MapPin, Temperature, Cloud } from "tabler-icons-react";

function weatherInfo({ info, units }) {
  if (!info) {
    return null;
  }

  const temperture = (value) => {
    if (units === "metric") {
      return `${value}\u00b0C`;
    }
    if (units === "imperial") {
      return `${value}\u00b0F`;
    }
    return `${value}\u212A`;
  };
  return (
    <div>
      <Grid>
        <Grid.Col md={6} sm="12">
          <div style={{ margin: "auto" }}>
            <Card shadow="md" p="lg">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <ThemeIcon mr="xs" variant="light">
                  <MapPin />
                </ThemeIcon>
                <Title order={3}>Coordinates</Title>
              </div>
              <Space h="sm" />

              <Text>Latitude: {info.coord.lat}</Text>
              <Text>Longitude: {info.coord.lon}</Text>

              <Space h="lg" />

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <ThemeIcon mr="xs" variant="light">
                  <Cloud />
                </ThemeIcon>
                <Title order={3}>Weather</Title>
              </div>

              <Space h="sm" />

              <div style={{ display: "flex" }}>
                <img
                  alt="weather-image"
                  src={`http://openweathermap.org/img/wn/${info.weather[0].icon}.png`}
                  style={{
                    marginRight: "8px",
                  }}
                />
              </div>

              <div>
                <Text>{info.weather[0].main}</Text>
                <Text size="sm">{info.weather[0].description}</Text>
              </div>
            </Card>
          </div>
        </Grid.Col>

        <Grid.Col md={6} sm="12">
          <div style={{ margin: "auto" }}>
            <Card shadow="md" p="lg">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <ThemeIcon mr="xs" variant="light">
                  <Temperature />
                </ThemeIcon>
                <Title order={3}>Main</Title>
              </div>
              <Space h="sm" />

              <Text>Temperature: {temperture(info.main.temp)}</Text>
              <Text>Temperature Max: {temperture(info.main.temp_max)}</Text>
              <Text>Temperature Min: {temperture(info.main.temp_min)}</Text>
              <Text>Feels Like: {temperture(info.main.feels_like)}</Text>
              {/* <Text>Pressure: {temperture(info.main.pressure)}</Text> */}
              <Text>Humidity: {temperture(info.main.humidity)}</Text>
            </Card>
          </div>
        </Grid.Col>
      </Grid>
    </div>
  );
}

export default weatherInfo;
