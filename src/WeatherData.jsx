import { Card, CardBody, Stack,Heading,Text } from '@chakra-ui/react';
import WeatherIcon from "./WeatherIcon";

function WeatherData({ weather }) {
  return(
    <>{
        weather.map((item,index) => (
          <Card maxW = 'sm'>
            <CardBody>
              <WeatherIcon weather={item.summary_forecast} />        {/* Pass weather detail to WeatherIcon */}
              <Stack>
                <Heading fontSize='2xl' textAlign='center'>{item.location.location_name}</Heading>
                <Text fontSize='md' textAlign='center'>{item.date}</Text>
                <Text fontSize='md' textAlign='center'>{item.morning_forecast}</Text>
                <Text fontSize='md' textAlign='center'>{item.afternoon_forecast}</Text>
                <Text fontSize='md' textAlign='center'>{item.night_forecast}</Text>
                <Text fontSize='md' textAlign='center'>{item.summary_forecast}</Text>
                <Text fontSize='md' textAlign='center'>{item.summary_when}</Text>
                <Text fontSize='md' textAlign='center'>{item.min_temp}</Text>
                <Text fontSize='md' textAlign='center'>{item.max_temp}</Text>
              </Stack>
            </CardBody>
          </Card>
        ))
      }
    </>
  )
}

export default WeatherData