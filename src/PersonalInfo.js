import React from 'react';
import { Card, Grid, Text, Badge, Group, Avatar, Center } from '@mantine/core';
import { IconLocation, IconPhone, IconBrandLinkedin, IconBrandGithub, IconMail } from '@tabler/icons';


function PersonalInfo() {
    return (
        <div style={{ marginTop: 20, display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
            <Card style={{ height: "460px" }} shadow="sm" p="lg" radius="md" withBorder>
                <Center>
                    <Avatar style={{ marginLeft: 20 }} size="xl" radius={600} src={"/avatar.jpg"} alt="Diogo Boinas" />
                    <div style={{ marginLeft: 20, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Text weight={500} size="lg">Diogo Boinas</Text>
                        <Text color={"dimmed"}>
                            Software Engineer
                        </Text>
                    </div>
                </Center>
                <div style={{ marginTop: 20, display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <Badge color="dark" radius="sm" variant="outline">React.js</Badge>
                    <Badge color="dark" radius="sm" variant="outline">React Native</Badge>
                    <Badge color="dark" radius="sm" variant="outline">AWS</Badge>
                </div>
                <div style={{ marginTop: 20, display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <Badge color="dark" radius="sm" variant="outline">Redux</Badge>
                    <Badge color="dark" radius="sm" variant="outline">JSX</Badge>
                    <Badge color="dark" radius="sm" variant="outline">Firebase</Badge>
                </div>
                <div style={{ marginTop: 20, display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <Badge color="dark" radius="sm" variant="outline">C</Badge>
                    <Badge color="dark" radius="sm" variant="outline">Python</Badge>
                    <Badge color="dark" radius="sm" variant="outline">Java</Badge>
                    <Badge color="dark" radius="sm" variant="outline">SQL</Badge>
                </div>
                <Center style={{ marginTop: 20 }}>
                    <Group position="apart" mt="md" mb="xs">
                        <div style={{ display: 'flex', flexDirection: 'row', alignContent: 'center' }}>
                            <IconLocation color='indigo' />
                            <Text style={{ marginLeft: 5 }} weight={500} variant="gradient"
                                gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}>Residence</Text>
                        </div>
                        <Text color={"dimmed"}  weight={200}>Ermesinde, Porto</Text>
                    </Group>
                </Center>
                <Center>
                    <Group position="apart" mt="md" mb="xs">
                        <div style={{ display: 'flex', flexDirection: 'row', alignContent: 'center' }}>
                            <IconPhone color='indigo' />
                            <Text style={{ marginLeft: 5 }} weight={500} variant="gradient"
                                gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}>Phone</Text>
                        </div>
                        <Text color={"dimmed"}  weight={200}>+351 913 212 559</Text>
                    </Group>
                </Center>
                <Center>
                    <Group position="apart" mt="md" mb="xs">
                        <div style={{ display: 'flex', flexDirection: 'row', alignContent: 'center' }}>
                            <IconMail color='indigo' />
                            <Text style={{ marginLeft: 5 }} weight={500} variant="gradient"
                                gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}>Email</Text>
                        </div>
                        <Text color={"dimmed"} weight={200}>diogoboinas@gmail.com</Text>
                    </Group>
                </Center>
                <Center>
                    <Group position="apart" mt="md" mb="xs">
                        <IconBrandLinkedin color='indigo' style={{ cursor: 'pointer' }} onClick={(e) => {
                            e.preventDefault();
                            window.open('https://www.linkedin.com/in/diogo-boinas/');
                        }} />

                        <IconBrandGithub color='indigo' style={{ cursor: 'pointer' }} onClick={(e) => {
                            e.preventDefault();
                            window.open('https://github.com/DiogoBoinas');
                        }} />
                    </Group>
                </Center>
            </Card>
            <Grid style={{ width: "75vw" }}>
                <Grid.Col>
                    <Card shadow="sm" p="lg" radius="md" withBorder>

                        <Group position="apart" mt="md" mb="xs">
                            <Text weight={500} size="xl" variant="gradient"
                                gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}>About Me</Text>
                        </Group>
                        <hr color='gainsboro' />
                        <Text  weight={200}>
                            A Software Engineer from Porto, Portugal.
                        </Text>
                        <Text weight={200}>
                            Eager to learn new technologies, I am a dedicated self-learner.
                        </Text>
                        <Text weight={200}>
                            Love to develop new ideas.
                        </Text>   
                        <Text weight={200}>
                            Focusing now on front-end technologies, but I own some fullstack knowledge.
                        </Text>
                        <Text weight={200}>
                            My hobbies are surf, photography and cars.
                        </Text>
                    </Card>
                </Grid.Col>

                <Grid.Col>
                    <Card shadow="sm" p="lg" radius="md" withBorder>
                        <Group position="apart" mt="md" mb="xs">
                            <Text weight={500} size="xl" variant="gradient"
                                gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}>Education</Text>
                        </Group>
                        <hr color='gainsboro' />
                        <Group position="apart" mt="md" mb="xs">
                            <Text weight={200}>BSC in Informatics Engineering</Text>
                            <Text  weight={200} color="dimmed">
                                University of Coimbra, from 2016 to 2020
                            </Text>
                        </Group>
                        <Group style={{ marginTop: "50px" }} position="apart" mt="md" mb="xs">
                            <Grid>
                                <Grid.Col><Text  weight={200}>MSC in Informatics Engineering</Text></Grid.Col>
                                <Grid.Col><Text size={"xs"}  weight={200}>Specialization in Software Engineering</Text></Grid.Col>
                            </Grid>
                            <Text  weight={200} color="dimmed">
                                University of Coimbra, from 2020 to 2022
                            </Text>
                        </Group>
                        <Text color="dimmed"  weight={200} size={"xs"}>
                            This master's degree allowed to gain a greater scope on software engineering projects, which was later applied to the project developed in the thesis. In this project a state-of-the-art was made, the methodology used was based on SCRUM, a requirements document was made, a software architecture using the C4 model and, after the project developed, usability tests were carried out with users and end-to-end tests using the Selenium tool. In this project were developed: a website and a progressive web application. The technologies used for the front-end were React.js for the website and React Native, using the SDK Expo for the progressive web application. Regarding the backend, Firebase was chosen. The thesis had the final classification of 16/20 values.
                        </Text>
                    </Card>
                </Grid.Col>

                <Grid.Col>
                    <Card shadow="sm" p="lg" radius="md" withBorder>

                        <Group position="apart" mt="md" mb="xs">
                            <Text weight={500} size="xl" variant="gradient"
                                gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}>Languages</Text>
                        </Group>
                        <hr color='gainsboro' />
                        <Group position="apart" mt="md" mb="xs">
                            <Text weight={200}>Native Language</Text>
                            <Text color="dimmed" weight={200}>
                                Portuguese
                            </Text>
                        </Group>
                        <Grid>
                            <Grid.Col>
                                <Group position="apart" mt="md" mb="xs">
                                    <Text weight={200}>English</Text>
                                    <Text color={"dimmed"} weight={200}>Level B2 (FCE)</Text>
                                </Group>
                            </Grid.Col>
                        </Grid>
                    </Card>
                </Grid.Col>
            </Grid>
        </div>
    )
}

export default PersonalInfo