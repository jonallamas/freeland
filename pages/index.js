import Navbar from '../components/template/navbar'
import Header from '../components/template/header'

import Container from '../components/template/container'
import List from '../components/proyects/list'

import { Row, Col, Card, Select, Affix } from 'antd'

const { Option } = Select

export default function Home(){
    return(
        <>
            <Navbar />
            <Header />
            <Container>
                <Row>
                    <Col span={7}>
                        <Affix offsetTop={70}>
                            <Card>
                                <Select 
                                    defaultValue="default" 
                                    style={{ width: '100%' }} 
                                    size='large'
                                    // onChange={handleChange}
                                >
                                    <Option value="default">
                                        Todas las categorías
                                    </Option>
                                    <Option value="diseno-web">Diseño web</Option>
                                    <Option value="programacion">Programación</Option>
                                    <Option value="edicion-video">Edición de video</Option>
                                </Select>
                            </Card>
                        </Affix>
                    </Col>
                    <Col span={16} offset={1}>
                        <List />

                    </Col>
                </Row>
            </Container>
        </>
    )
}