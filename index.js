

const user  = {
    name: 'ivan',
    lastName: 'samusev',
    age: 16,
    location: {
        country: "Ukraine",
        city: 'Dnieper'
    }
}

function hello(user){
const {name ,
     lastName, 
     age, 
     location :{ country, city } } = user

     console.log('hello :>> ', `Вітаю ${name} ${lastName} , вам ${age} років? Ви проживаєте в місті ${city} в ${country}?`);
}

hello(user)

