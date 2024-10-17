import { HttpService } from "./HttpService";



async function get(){
    return await HttpService.get('/Grupa')
    .then((odgovor)=>{
        //console.log(odgovor.data)
        //console.table(odgovor.data)
        return {greska: false, poruka: odgovor.data}
    })
    .catch((e)=>{
        //console.log(e)
        return {greska: true, poruka: 'Problem kod dohvaćanja Grupaova'}   
    })
}

async function brisanje(sifra){
    return await HttpService.delete('/Grupa/' + sifra)
    .then(()=>{
        return {greska: false, poruka: 'Obrisano'}
    })
    .catch(()=>{
        return {greska: true, poruka: 'Problem kod brisanja Grupaa'}   
    })
}

async function dodaj(Grupa){
    return await HttpService.post('/Grupa',Grupa)
    .then(()=>{
        return {greska: false, poruka: 'Dodano'}
    })
    .catch(()=>{
        return {greska: true, poruka: 'Problem kod dodavanja Grupaa'}   
    })
}

async function promjena(sifra,Grupa){
    return await HttpService.put('/Grupa/' + sifra,Grupa)
    .then(()=>{
        return {greska: false, poruka: 'Dodano'}
    })
    .catch(()=>{
        return {greska: true, poruka: 'Problem kod dodavanja Grupaa'}   
    })
}

async function getBySifra(sifra){
    return await HttpService.get('/Grupa/'+sifra)
    .then((odgovor)=>{
        return {greska: false, poruka: odgovor.data}
    })
    .catch((e)=>{
        return {greska: true, poruka: 'Problem kod dohvaćanja Grupaa s šifrom '+sifra}   
    })
}


export default {
    get,
    brisanje,
    dodaj,
    getBySifra,
    promjena
}
