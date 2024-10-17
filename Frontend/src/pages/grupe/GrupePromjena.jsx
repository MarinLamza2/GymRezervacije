import GrupaService from "../../services/GrupaService"
import { Button, Row, Col, Form } from "react-bootstrap";
import moment from "moment";
import { Link, useNavigate, useParams } from "react-router-dom";
import { RouteNames } from "../../constants";
import { useEffect, useState } from "react";


export default function GrupePromjena(){

    const [konobar,setKonobar] = useState({})
    const navigate = useNavigate()
    const routeParams = useParams()

    async function dohvatiSmjer(){
        const odgovor = await GrupaService.getBySifra(routeParams.sifra);
        if(odgovor.greska){
            alert(odgovor.poruka)
            return
        }
        //debugger; // ovo radi u Chrome inspect (ali i ostali preglednici)
        let s = odgovor.poruka
        setKonobar(s)
    } 

    useEffect(()=>{
        dohvatiSmjer();
     },[])

     async function promjena(konobar) {
        //console.log(konobar)
        //console.log(JSON.stringify(konobar))
        const odgovor = await GrupaService.promjena(routeParams.sifra,konobar)
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
        promjena({
            naziv: podaci.get('naziv'),
            zaposlenik: podaci.get('zaposlenik')
        })
    }

    return(
        <>
        Promjena konobara
        <Form onSubmit={obradiSubmit}>

        <Form.Group controlId="naziv">
                <Form.Label>naziv</Form.Label>
                <Form.Control type="text" name="naziv" required defaultValue={konobar.naziv}/>
            </Form.Group>

            <Form.Group controlId="zaposlenik">
                <Form.Label>zaposlenik</Form.Label>
                <Form.Control type="text" name="zaposlenik" required  defaultValue={konobar.zaposlenik}/>
            </Form.Group>

         

        <Row className="akcije">
            <Col xs={6} sm={12} md={3} lg={6} xl={6} xxl={6}>
            <Link to={RouteNames.GRUPAPREGLED} 
            className="btn btn-danger siroko">Odustani</Link>
            </Col>
            <Col xs={6} sm={12} md={9} lg={6} xl={6} xxl={6}>
            <Button variant="success"
            type="submit"
            className="siroko">Promjeni konobar</Button>
            </Col>
        </Row>
        </Form>
        </>
    )
}