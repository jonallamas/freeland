import { Row, Col } from 'antd'

export default function Container({children}){
    return(
        <Row>
            <Col span={20} offset={2}>
                { children }
            </Col>
        </Row>
    )
}