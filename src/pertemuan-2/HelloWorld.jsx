export default function HelloWorld(){
    return (
        <div>
            <h1>Hello World</h1>
            <p>Selamat Belajar ReactJs</p>
            <GreetingBinjai/>
            <QuoteText/>
            <UserCard
            nama="M Aldi Ritonga" 
            nim="2355301099"
            tanggal={new Date().toLocaleDateString()}
          />
        </div>
    )
}

function GreetingBinjai (){
    return(
        <small> Salam dari binjai </small>
    )
}

function QuoteText() {
    const text = "Mulutmu Harimaumu";
    const text2 = "Aku ingin jadi macan";
    return (
        <div>
            <hr/>
            <p>{text.toLowerCase()}</p>
            <p>{text2.toUpperCase()}</p>
        </div>
    )
}
    function UserCard(props){
        return (
            <div>
                <hr/>
                <h3>Nama: {props.nama}</h3>
                <p>NIM: {props.nim}</p>
                <p>Tanggal: {props.tanggal}</p>

                <img src="img/AA.png" alt="logo" className="gambar" />
            </div>
        )
    }
