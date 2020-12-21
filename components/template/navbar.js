import Container from './container'
import {  Menu, Row, Col , Button } from 'antd'

export default function Navbar(){
    return(
        <>
        <nav style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <Container>
                <Row align="middle" justify="space-between">
                    <Col span={4}>
                        <img src="/logo.png" className="logo" />
                    </Col>
                    {/* <Col span={12}>
                        <Menu mode="horizontal" defaultSelectKeys={['inicio']}>
                            <Menu.Item key="inicio">Inicio</Menu.Item>
                        </Menu>
                    </Col> */}
                    <Col span={8} className="text-right">
                        <Button type="text">Link Button</Button>
                        <Button type="default">Primary Button</Button>
                    </Col>
                </Row>
            </Container>
        </nav>
        <style jsx>{`
            nav{
                background-color: #1890FF;
                padding: 1rem 0
            }
            .logo{
                height: 25px
            }    
            .text-right{
                text-align: right;
            }
        `}</style>
        </>
    )
}