import { useEffect, useState } from "react"
import GrupaService from "../../services/GrupaService"
import { Button, Table } from "react-bootstrap";
import { NumericFormat } from "react-number-format";
import moment from "moment";
import { GrValidate } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";
import { RouteNames } from "../../constants";


export default function GrupePregled(){

    const navigate = useNavigate()

    const[grupe, setGrupe] = useState();

    async function dohvatiGrupae(){
        const odgovor = await GrupaService.get();
        if(odgovor.greska){
            alert(odgovor.poruka)
            return
        }
        //debugger; // ovo radi u Chrome inspect (ali i ostali preglednici)
        setGrupe(odgovor.poruka)
    } 

    // Ovaj hook (kuka) se izvodi dolaskom na stranicu Grupai
    useEffect(()=>{
        dohvatiGrupae();
    },[])

  

    function obrisi(sifra){
        if(!confirm('Sigurno obrisati')){
            return;
        }
        brisanjeSmjera(sifra)
    }

    async function brisanjeSmjera(sifra) {
        
        const odgovor = await GrupaService.brisanje(sifra);
        if(odgovor.greska){
            alert(odgovor.poruka)
            return
        }
        dohvatiGrupae();
    }


    return(
        <>
        <Link to={RouteNames.GRUPANOVI}
        className="btn btn-success siroko">Dodaj novz grupu</Link>
        <Table striped bordered hover responsive>
            <thead>
                <tr>
                    <th>naziv</th>
                    <th>zaposlenik</th>
                   
                    <th>Akcija</th>
                </tr>
            </thead>
            <tbody>
                {grupe && grupe.map((smjer,index)=>(
                    <tr key={index}>
                        <td>
                            {smjer.naziv}
                        </td>
                        <td>
                            {smjer.zaposlenik}
                        </td>
                        
                        <td>
                            <Button
                            variant="danger"
                            onClick={()=>obrisi(smjer.id)}
                            >
                                Obriši
                            </Button>
                            &nbsp;&nbsp;&nbsp;
                            <Button
                            onClick={()=>navigate(`/grupe/${smjer.id}`)}
                            >
                                Promjena
                            </Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
        </>
    )
}