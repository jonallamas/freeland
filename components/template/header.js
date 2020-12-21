import Container from './container'
import { Row, Col, Button, Typography } from 'antd'

const { Title, Paragraph } = Typography;

export default function Header(){
    return(
        <>
        <header>
            <Container>
                <Row>
                    <Col span={10} offset={7} style={{textAlign: 'center', paddingTop: '6rem', paddingBottom: '4rem'}}>
                        <Title>Ant Design</Title>
                        <p>
                            In the process of internal desktop applications development, many different design specs and implementations would be involved.
                        </p>
                        <Button type="link">Link Button</Button>
                        <Button type="primary">Primary Button</Button>
                    </Col>
                </Row>
            </Container>
        </header>
        <style jsx>{`
            header{
                {/* background-color: #1890FF */}
            }    
        `}</style>
        </>
    )
}