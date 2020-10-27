




document.getElementById('frm').addEventListener('submit',onSubmit)
if(localStorage.getItem("contacts") === null)
{
    localStorage.setItem("contacts","[]")
}


let result = '';
let contacts= JSON.parse(localStorage.getItem("contacts"))


let i;

for( i=0;i< contacts.length;i++)
{
    result+=`
    
                <div class="contact_item" >
                        <i class="far fa-user fa-2x color-primary"></i>
                        <div class="contact_item_info">
                                <h4>${contacts[i].name}</h4> 
                                <p>${contacts[i].number}</p>
                        </div>
                        <i class="fas fa-times-circle color-primary delete" style="cursor: pointer;" onClick="deleteContact('${contacts[i].id}')"></i>
                 </div>
    
    
    `


    document.getElementsByClassName('contact_body')[0].innerHTML=result
}


function onSubmit(e)
{
    e.preventDefault()
    let contact_name = document.getElementById('contact').value;
    let phone_number = document.getElementById('phone').value;
    // console.log(contact,phone)
    

    let contacts= JSON.parse(localStorage.getItem("contacts"))
   
    let contact = {
        id:Math.random().toString(36).substr(2,9),
        name:contact_name,
        number:phone_number
    }

    // contacts.push(contact)

    contacts.unshift(contact)

    localStorage.setItem("contacts",JSON.stringify(contacts))
    console.log(contacts)

    document.getElementById('contact').value='';

    document.getElementById('phone').value='';

    location.reload()

}


function deleteContact(id)
{
    let contacts= JSON.parse(localStorage.getItem("contacts"))

    console.log(id)


    contacts=contacts.filter((value)=>{
        return value.id !== id
    })

    localStorage.setItem("contacts",JSON.stringify(contacts))
    location.reload()

}