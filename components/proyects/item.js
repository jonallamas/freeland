import { Card, Row, Col, Typography, Tag, Button, Space } from 'antd'

const { Title, Paragraph, Text } = Typography

import { AiOutlineCheck } from "react-icons/ai"

export default function Item({ proyect }){

    const { id, title, description, time, price, currency, flexibilty, send, category } = proyect

    return(
        <>
            <Card 
                // title="Esto es una card" 
                // extra={<a href="#">More</a>} 
                style={{marginBottom: '1rem'}}
            >
                <Row>
                    <Col span={24}>
                        <Tag color="blue">{ category }</Tag>
                        <Text> • </Text>
                        <Text type="secondary">{ time }</Text>
                    </Col>
                    <Col span={17}>
                        <Title level={2} style={{ fontSize: '1.5rem' }}>{ title }</Title>
                        <Paragraph>{ description }</Paragraph>
                    </Col>
                    <Col span={6} offset={1}>
                        <Title level={4} style={{ fontSize: '1rem'}}>Presupuesto:</Title>
                        <Paragraph style={{ fontSize: '1.4rem', marginBottom: 0 }}>~${price} <small>{ currency }</small></Paragraph>
                        {
                            flexibilty === 1 ? (
                                <Tag color="success" style={{ display: 'block', textAlign: 'center', marginRight: 0, marginBottom: '1rem' }}>Ofrece flexibilidad</Tag>
                            ) : (
                                <Tag color="warning" style={{ display: 'block', textAlign: 'center', marginRight: 0, marginBottom: '1rem' }}>Presupuesto limitado</Tag>
                            )
                        }

                        {
                            send === 1 ? (
                                <Button block className="btn-align-center"><AiOutlineCheck /> Enviado</Button>
                            ) : (
                                <Button type="primary" block>Enviar propuesta</Button>
                            )
                        }
                    </Col>
                </Row>
            </Card>
        </>
    )
}