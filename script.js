// simulasi perhitungan
// nilai input dari pembiayaan
const nilaiangsuran = document.getElementById('hasil')

nilaiangsuran.addEventListener('click',function (){
    const jumlahpembiayaan = parseInt (document.getElementById ['jumlah-pembiayaan'].value);
    const margin =  (document.getElementById ['margin'].value);
    const Jangkwaktu = parseInt (document.getElementById ['jangka-waktu'].value);

    // perhitungan angsuran
    const nominalangsuran = (jumlahpembiayaan/Jangkwaktu) + (jumlahpembiayaan*margin)
    console.log (nominalangsuran)
})

