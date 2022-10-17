import React, { useState } from 'react';
import { Card, Text, Group, Badge, Center } from '@mantine/core';
import Carousel from 'react-bootstrap/Carousel';

import { IconDeviceMobile, IconAppWindow } from '@tabler/icons';





function Projects() {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
      <Card style={{ marginTop: 20, width: "60vw" }} shadow="sm" p="lg" radius="md" withBorder>
        <Text style={{ textAlign: 'center' }} variant="gradient"
          gradient={{ from: 'indigo', to: 'cyan', deg: 45 }} size={50} weight={200}>MobEthnos</Text>
        <Carousel activeIndex={index} onSelect={handleSelect} style={{ backgroundColor: "grey", paddingBlock: 50, borderRadius: 5, marginTop: 5 }}>
          <Carousel.Item style={{ textAlign: 'center' }}>
            <img
              style={{ width: "auto", height: "400px" }}
              src="./Web.png"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item style={{ textAlign: 'center' }}>
            <img
              style={{ width: "auto", height: "400px" }}
              src="./ProjectScreen.png"
              alt="Second slide"
            />
          </Carousel.Item>
        </Carousel>
        <Group position="apart" mt="md" mb="xs">
          <Badge color="indigo" radius="sm" variant="outline">React.js</Badge>
          <Badge color="indigo" radius="sm" variant="outline">React Native</Badge>
          <Badge color="indigo" radius="sm" variant="outline">Expo</Badge>
          <Badge color="indigo" radius="sm" variant="outline">Firebase</Badge>
          <Badge color="indigo" radius="sm" variant="outline">Mantine</Badge>
          <Badge color="indigo" radius="sm" variant="outline">Localbase</Badge>
          <Badge color="indigo" radius="sm" variant="outline">React-beautiful-dnd</Badge>
          <Badge color="indigo" radius="sm" variant="outline">Google maps</Badge>
        </Group>
        <Text style={{textAlign:'center', marginTop:20}} weight={200}>A Software Tool that uses mobile ethnography for data collection. Also, it provides researchers or service providers tools to improve a certain service.</Text>
        <Text style={{textAlign:'center', marginTop:20}} weight={200}>Consists on a progressive web application to collect data and on a web app to analyze data.</Text>
        <Center>
          <Group position="apart" mt="lg" mb="xs">
            <div  style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <IconAppWindow color='indigo' style={{ cursor: 'pointer' }} size={60} onClick={(e) => {
                e.preventDefault();
                window.open('https://mobethnos.firebaseapp.com/');
              }} />
              <Text style={{textAlign:'center'}} color={'indigo'} weight={800}>Website</Text>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <IconDeviceMobile color='indigo' style={{ cursor: 'pointer' }} size={60} onClick={(e) => {
                e.preventDefault();
                window.open('https://mobethnos.dei.uc.pt/');
              }} />
              <Text style={{textAlign:'center'}} color={'indigo'} weight={800}>PWA</Text>
            </div>
          </Group>
        </Center>
      </Card>
    </div>

  )
}

export default Projects