import { Card, CardBody, Stack,Heading,Text, Flex } from '@chakra-ui/react';
import WeatherIcon from "./WeatherIcon";

function WeatherData({ weather }) {
  return(
    <Flex wrap="wrap" gap="10px" justify="center">{
        weather.map((item,index) => (
          <Card maxW = 'sm' margin="10px" key={index}>
            <CardBody>
              <Flex direction="column" align="center" justify="center" mb="4">
                <WeatherIcon weather={item.summary_forecast} />
              </Flex>    {/* Pass weather detail to WeatherIcon */}
              <Stack>
                <Heading fontSize='2xl' textAlign='center'>{item.location.location_name}</Heading>
                <Text fontSize='md' textAlign='center'>Date: {item.date}</Text>
                <Text fontSize='md' textAlign='center'>Morning Forecast: {item.morning_forecast}</Text>
                <Text fontSize='md' textAlign='center'>Afternoon Forecast: {item.afternoon_forecast}</Text>
                <Text fontSize='md' textAlign='center'>Night Forecast: {item.night_forecast}</Text>
                <Text fontSize='md' textAlign='center'>Summary Forecast: {item.summary_forecast}</Text>
                <Text fontSize='md' textAlign='center'>Summary When: {item.summary_when}</Text>
                <Text fontSize='md' textAlign='center'>Min Temperature: {item.min_temp}</Text>
                <Text fontSize='md' textAlign='center'>Max Temperature: {item.max_temp}</Text>
              </Stack>
            </CardBody>
          </Card>
        ))
      }
    </Flex>
  )
}

export default WeatherData