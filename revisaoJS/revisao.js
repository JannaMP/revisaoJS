function dados(){
    const ds = [
                  {id:1, login:"jhow", password:"1234@", email:"jhow@gmail.com"},
                  {id:2, login:"janna", password:"1212@", email:"janna@gmail.com"},
                  {id:3, login:"pandora", password:"12345@", email:"pandora@gmail.com"}
               ]

    const js = JSON.stringify(ds)

    localStorage.setItem("banco", js)

}

function meuLogin(){
    const ds = JSON.parse(localStorage.getItem("banco"))

    let lg = document.querySelector("#login").value
    let ps = document.querySelector("#pass").value
   
    for(let i=0;i<ds.length;i++){
        if(lg == ds[i].login && ps == ds[i].password){

            const usuario = JSON.stringify(ds[i])

            sessionStorage.setItem("user", usuario)
            alert("Logou!")
        }
    }
}