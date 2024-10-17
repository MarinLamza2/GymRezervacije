import GrupaService from "../../services/GrupaService"
import { Button, Row, Col, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { RouteNames } from "../../constants";


export default function GrupeDodaj(){

    const navigate = useNavigate()

    async function dodaj(smjer) {
        //console.log(smjer)
        //console.log(JSON.stringify(smjer))
        const odgovor = await GrupaService.dodaj(smjer)
        if(odgovor.greska){
            alert(odgovor.poruka)
            return;
        }
        navigate(RouteNames.GRUPAPREGLED)
    }

    function obradiSubmit(e){ // e je event
        e.preventDefault(); // nemoj odraditi zahtjev na server
        let podaci = new FormData(e.target)
        //console.log(podaci.get('naziv'))
        dodaj({
            naziv: podaci.get('naziv'),
            zaposlenik: podaci.get('zaposlenik')
        })
    }

    return(
        <>
        Dodavanje konobara
        <Form onSubmit={obradiSubmit}>

            <Form.Group controlId="naziv">
                <Form.Label>naziv</Form.Label>
                <Form.Control type="text" name="naziv" required />
            </Form.Group>

            <Form.Group controlId="zaposlenik">
                <Form.Label>zaposlenik</Form.Label>
                <Form.Control type="text" name="zaposlenik" required />
            </Form.Group>

          
        <Row className="akcije">
            <Col xs={6} sm={12} md={3} lg={6} xl={6} xxl={6}>
            <Link to={RouteNames.GRUPAPREGLED} 
            className="btn btn-danger siroko">Odustani</Link>
            </Col>
            <Col xs={6} sm={12} md={9} lg={6} xl={6} xxl={6}>
            <Button variant="success"
            type="submit"
            className="siroko">Dodaj smjer</Button>
            </Col>
        </Row>
        </Form>
        </>
    )
}